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

export type ConsoleUi = {
  titulo: string;
  status: { pronto: string; rodando: string; aguardando: string };
  resultado: string;
  ver: string;
  opcoesAria: string;
  nota: string;
};

const pt: { ui: ConsoleUi; execucoes: Execucao[] } = {
  ui: {
    titulo: 'mateus@agente — ~/portfolio',
    status: { pronto: 'pronto', rodando: 'rodando', aguardando: 'aguardando' },
    resultado: '✓ resultado',
    ver: 'ver',
    opcoesAria: 'Escolha uma tarefa para o agente',
    nota: 'Demonstração roteirizada do que meus agentes fazem. Sem dados reais nem código interno.',
  },
  execucoes: [
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
  ],
};

const en: { ui: ConsoleUi; execucoes: Execucao[] } = {
  ui: {
    titulo: 'mateus@agent — ~/portfolio',
    status: { pronto: 'done', rodando: 'running', aguardando: 'idle' },
    resultado: '✓ result',
    ver: 'see',
    opcoesAria: 'Pick a task for the agent',
    nota: 'Scripted demo of what my agents do. No real data or internal code.',
  },
  execucoes: [
    {
      id: 'skills',
      rotulo: 'team skills',
      prompt: 'build the signup screen and wire it to the three services',
      passos: [
        { tipo: 'pensa', texto: 'Before writing a single line, I load how this team writes code.' },
        { tipo: 'tool', nome: 'mcp.team_context', saida: 'patterns, naming and examples loaded', ms: 900 },
        { tipo: 'tool', nome: 'skill.server_driven_screen', args: 'screen: "signup"', saida: 'Kotlin code + screen payload', ms: 1300 },
        { tipo: 'tool', nome: 'skill.conditional_actions', saida: 'rules with the Strategy pattern', ms: 800 },
        { tipo: 'tool', nome: 'skill.messaging_listener', args: 'type: "kafka"', saida: 'consumer and configuration', ms: 900 },
        { tipo: 'tool', nome: 'skill.full_journey', args: 'services: 3', saida: 'journey wired end to end', ms: 1400 },
      ],
      resultado: 'Ready for review. In real life, a delivery that took 4 to 5.5 months shipped in 3 weeks.',
      alvo: { href: '#btg', label: 'BTG · MCP server' },
    },
    {
      id: 'diagnostico',
      rotulo: 'stuck account',
      prompt: 'why did this account opening get stuck?',
      passos: [
        { tipo: 'pensa', texto: 'Silent bug: no error, no alert. I follow the evidence.' },
        { tipo: 'tool', nome: 'logs.search', args: 'customer: "•••••"', saida: 'events out of order', ms: 1000 },
        { tipo: 'tool', nome: 'db.compare_states', saida: 'customer record and account out of sync', ms: 1100 },
        { tipo: 'tool', nome: 'queue.check_dlq', saida: '1 message landed in the DLQ', ms: 800 },
      ],
      resultado: 'Root cause found, with a step-by-step fix. With the dashboard, incidents dropped 50% and time to resolve dropped 90%.',
      alvo: { href: '#btg', label: 'BTG · diagnostics' },
    },
    {
      id: 'enteros',
      rotulo: 'defend or settle',
      prompt: 'should I defend or settle this lawsuit?',
      passos: [
        { tipo: 'pensa', texto: 'The customer claims not to recognize the loan. First: what evidence exists?' },
        { tipo: 'tool', nome: 'case_file.read', saida: 'statement ✓  proof of credit ✓  contract ✗', ms: 1100 },
        { tipo: 'tool', nome: 'evidence_radar.risk', saida: 'without the contract, the chance of losing goes from 12% to 75%', ms: 1300 },
        { tipo: 'tool', nome: 'contract.expected_cost', args: 'bank, law_firm', saida: 'defending costs more than settling', ms: 900 },
      ],
      resultado: 'Recommendation: recover the contract before deciding. With all three pieces of evidence, the chance of losing drops to 2%.',
      alvo: { href: '#enteros', label: 'EnterOS' },
    },
    {
      id: 'brandloop',
      rotulo: 'campaign',
      prompt: "make a campaign that doesn't look like all the others",
      passos: [
        { tipo: 'pensa', texto: 'Every ad looks the same. First, understand the brand.' },
        { tipo: 'tool', nome: 'agent.interviewer', saida: 'questions for the leadership', ms: 900 },
        { tipo: 'tool', nome: 'agent.market_research', args: 'case: "iFood"', saida: '1,516 real conversations, 5 platforms, US$ 0.89', ms: 1500 },
        { tipo: 'pensa', texto: "Finding: restaurant owners fear the fees and can't tell whether joining pays off." },
        { tipo: 'tool', nome: 'agent.strategist', saida: 'transparency campaign: the price that pays off', ms: 900 },
        { tipo: 'tool', nome: 'agent.creative', saida: 'copy, video and voiceover', ms: 1000 },
        { tipo: 'tool', nome: 'agent.publisher', saida: 'ad published', ms: 900 },
      ],
      resultado: 'From diagnosis to a live ad, with no human step in between. A whole agency, in six agents.',
      alvo: { href: '#brandloop', label: 'BrandLoop' },
    },
  ],
};

export const consoles = { pt, en };
