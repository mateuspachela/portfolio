import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';
import { consoles, type Execucao, type Passo } from '../data/agentRuns';
import './AgentConsole.css';

type Estado = {
  digitado: string;
  passos: number; // quantos passos já apareceram
  concluidos: number; // quantas tools já terminaram
  fim: boolean;
};

const inicial: Estado = { digitado: '', passos: 0, concluidos: 0, fim: false };
const cheio = (e: Execucao): Estado => ({ digitado: e.prompt, passos: e.passos.length, concluidos: e.passos.length, fim: true });

const esperar = (ms: number, sinal: { cancelado: boolean }) =>
  new Promise<void>((ok, falha) => {
    setTimeout(() => (sinal.cancelado ? falha(new Error('cancelado')) : ok()), ms);
  });

export default function AgentConsole({ lang = 'pt' }: { lang?: 'pt' | 'en' }) {
  const { ui, execucoes } = consoles[lang];
  const reduz = useReducedMotion();
  const raiz = useRef<HTMLDivElement>(null);
  const visivel = useInView(raiz, { once: true, amount: 0.2 });
  const [ativo, setAtivo] = useState(0);
  const [estado, setEstado] = useState<Estado>(inicial);
  const [rodada, setRodada] = useState(0);
  const corpo = useRef<HTMLDivElement>(null);

  const exec = execucoes[ativo];

  useEffect(() => {
    if (!visivel) return;
    if (reduz) {
      setEstado(cheio(exec));
      return;
    }
    const sinal = { cancelado: false };
    (async () => {
      try {
        setEstado(inicial);
        await esperar(300, sinal);
        for (let i = 1; i <= exec.prompt.length; i++) {
          setEstado((s) => ({ ...s, digitado: exec.prompt.slice(0, i) }));
          await esperar(22 + Math.random() * 30, sinal);
        }
        await esperar(450, sinal);
        for (let i = 0; i < exec.passos.length; i++) {
          const p = exec.passos[i];
          setEstado((s) => ({ ...s, passos: i + 1 }));
          await esperar(p.tipo === 'tool' ? p.ms : 700, sinal);
          setEstado((s) => ({ ...s, concluidos: i + 1 }));
          await esperar(180, sinal);
        }
        await esperar(250, sinal);
        setEstado((s) => ({ ...s, fim: true }));
      } catch {
        /* trocou de execução no meio */
      }
    })();
    return () => {
      sinal.cancelado = true;
    };
  }, [ativo, rodada, visivel, reduz]);

  // Mantém a última linha à vista sem rolar a página
  useEffect(() => {
    const el = corpo.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [estado.passos, estado.fim]);

  const escolher = (i: number) => {
    if (i === ativo) setRodada((r) => r + 1);
    else setAtivo(i);
  };

  return (
    <div className="console" ref={raiz}>
      <div className="console-barra">
        <span className="pontos" aria-hidden="true">
          <i /> <i /> <i />
        </span>
        <span className="mono console-titulo">{ui.titulo}</span>
        <span className="mono console-status" data-on={!estado.fim && estado.digitado.length > 0}>
          {estado.fim ? ui.status.pronto : estado.digitado ? ui.status.rodando : ui.status.aguardando}
        </span>
      </div>

      <div className="console-corpo mono" ref={corpo} aria-live="polite">
        <p className="linha prompt">
          <span className="cursor-sinal">›</span> {estado.digitado}
          {!estado.fim && estado.passos === 0 && <span className="caret" aria-hidden="true" />}
        </p>

        {exec.passos.slice(0, estado.passos).map((p, i) => (
          <PassoLinha key={`${exec.id}-${rodada}-${i}`} passo={p} feito={i < estado.concluidos} reduz={!!reduz} />
        ))}

        <AnimatePresence>
          {estado.fim && (
            <motion.div
              key={`${exec.id}-${rodada}-fim`}
              className="resultado"
              initial={reduz ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="resultado-rotulo">{ui.resultado}</p>
              <p className="resultado-texto">{exec.resultado}</p>
              <a className="resultado-link" href={exec.alvo.href}>
                {ui.ver} {exec.alvo.label} ↓
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="console-opcoes" role="group" aria-label={ui.opcoesAria}>
        {execucoes.map((e, i) => (
          <button
            key={e.id}
            type="button"
            className="chip mono"
            aria-pressed={i === ativo}
            onClick={() => escolher(i)}
          >
            {e.rotulo}
          </button>
        ))}
      </div>
      <p className="console-nota">{ui.nota}</p>
    </div>
  );
}

function PassoLinha({ passo, feito, reduz }: { passo: Passo; feito: boolean; reduz: boolean }) {
  return (
    <motion.div
      className={`linha passo passo-${passo.tipo}`}
      initial={reduz ? false : { opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
    >
      {passo.tipo === 'pensa' ? (
        <p className="pensa">
          <span className="pensa-icone">◆</span> {passo.texto}
        </p>
      ) : (
        <>
          <p className="tool">
            <span className={`estado ${feito ? 'ok' : 'rodando'}`} aria-hidden="true">
              {feito ? '✓' : ''}
            </span>
            <span className="tool-nome">{passo.nome}</span>
            <span className="tool-args">({passo.args ?? ''})</span>
            {feito && <span className="tool-ms">{(passo.ms / 1000).toFixed(1)}s</span>}
          </p>
          {feito && <p className="tool-saida">└ {passo.saida}</p>}
        </>
      )}
    </motion.div>
  );
}
