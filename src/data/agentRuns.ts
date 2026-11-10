// Execuções roteirizadas do console do hero. É uma ilustração, não um LLM de verdade.
// Nada aqui é código, nome de sistema ou dado interno do BTG.

export type Passo =
  | { tipo: 'pensa'; texto: string }
  | { tipo: 'tool'; nome: string; args?: string; saida: string; ms: number };

export type Execucao = {
  id: string;
  rotulo: string;
  prompt: string;
  passos: Passo[];
  resultado: string;
  alvo: { href: string; label: string };
};

export const execucoes: Execucao[] = [
  {
    id: 'skills',
    rotulo: 'skills do time',
    prompt: 'cria a tela de cadastro e liga nos três serviços',
    passos: [
      { tipo: 'pensa', texto: 'Antes de escrever qualquer linha, carrego como este time escreve código.' },
      { tipo: 'tool', nome: 'mcp.contexto_do_time', saida: 'padrões, nomenclatura e exemplos carregados', ms: 900 },
      { tipo: 'tool', nome: 'skill.tela_server_driven', args: 'tela: "cadastro"', saida: 'código Kotlin + payload da tela', ms: 1300 },
      { tipo: 'tool', nome: 'skill.acoes_condicionais', saida: 'regras com Strategy pattern', ms: 800 },
      { tipo: 'tool', nome: 'skill.listener_mensageria', args: 'tipo: "kafka"', saida: 'consumer e configuração', ms: 900 },
      { tipo: 'tool', nome: 'skill.jornada_completa', args: 'servicos: 3', saida: 'jornada ligada ponta a ponta', ms: 1400 },
    ],
    resultado: 'Pronto para revisão. Na vida real, uma entrega que levava de 4 a 5,5 meses saiu em 3 semanas.',
    alvo: { href: '#btg', label: 'BTG · servidor MCP' },
  },
  {
    id: 'diagnostico',
    rotulo: 'conta travada',
    prompt: 'por que a abertura dessa conta travou?',
    passos: [
      { tipo: 'pensa', texto: 'Bug silencioso: não gera erro nem alerta. Sigo as evidências.' },
      { tipo: 'tool', nome: 'logs.buscar', args: 'cliente: "•••••"', saida: 'eventos fora de ordem', ms: 1000 },
      { tipo: 'tool', nome: 'db.comparar_estados', saida: 'cadastro e conta divergentes', ms: 1100 },
      { tipo: 'tool', nome: 'fila.checar_dlq', saida: '1 mensagem caiu na DLQ', ms: 800 },
    ],
    resultado: 'Causa encontrada, com o passo a passo da correção. Com o painel, os incidentes caíram 50% e o tempo de resolução, 90%.',
    alvo: { href: '#btg', label: 'BTG · diagnóstico' },
  },
  {
    id: 'enteros',
    rotulo: 'defender ou acordar',
    prompt: 'defendo ou faço acordo neste processo?',
    passos: [
      { tipo: 'pensa', texto: 'Cliente diz não reconhecer o empréstimo. Primeiro: quais provas existem?' },
      { tipo: 'tool', nome: 'dossie.ler', saida: 'extrato ✓  comprovante ✓  contrato ✗', ms: 1100 },
      { tipo: 'tool', nome: 'radar_de_provas.risco', saida: 'sem contrato, a chance de derrota vai de 12% para 75%', ms: 1300 },
      { tipo: 'tool', nome: 'contrato.custo_esperado', args: 'banco, escritorio', saida: 'defesa sai mais cara que o acordo', ms: 900 },
    ],
    resultado: 'Recomendação: recuperar o contrato antes de decidir. Com as três provas, a chance de perder cai para 2%.',
    alvo: { href: '#enteros', label: 'EnterOS' },
  },
  {
    id: 'brandloop',
    rotulo: 'campanha',
    prompt: 'faz uma campanha que não pareça igual às outras',
    passos: [
      { tipo: 'pensa', texto: 'Todo anúncio parece igual. Primeiro, entender a marca.' },
      { tipo: 'tool', nome: 'agente.entrevistador', saida: 'perguntas para as lideranças', ms: 900 },
      { tipo: 'tool', nome: 'agente.pesquisa_mercado', args: 'caso: "iFood"', saida: '1.516 conversas reais, 5 plataformas, US$ 0,89', ms: 1500 },
      { tipo: 'pensa', texto: 'Achado: donos de restaurante têm medo das taxas e não sabem calcular se compensa entrar.' },
      { tipo: 'tool', nome: 'agente.estrategista', saida: 'campanha de transparência: o preço que compensa', ms: 900 },
      { tipo: 'tool', nome: 'agente.criativo', saida: 'texto, vídeo e locução', ms: 1000 },
      { tipo: 'tool', nome: 'agente.publicador', saida: 'anúncio publicado', ms: 900 },
    ],
    resultado: 'Do diagnóstico ao anúncio no ar, sem etapa humana no meio. Uma agência inteira, em seis agentes.',
    alvo: { href: '#brandloop', label: 'BrandLoop' },
  },
];
