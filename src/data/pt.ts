// Conteúdo em português. A página, a visão Machine e o /llms.txt leem deste arquivo.
// A versão em inglês fica em en.ts, com o mesmo formato.
import type { Conteudo } from './types';

const pt: Conteudo = {
  ui: {
    htmlLang: 'pt-BR',
    pular: 'Pular para o conteúdo',
    navAria: 'Seções',
    nav: { sobre: 'Sobre', trabalho: 'Trabalho', projetos: 'Hackathons' },
    vistaAria: 'Versão da página',
    idiomaAria: 'Idioma',
    maquinaAria: 'Versão em Markdown',
    maquinaArquivo: 'perfil.md',
    h1: ['Construo agentes de IA que ', 'entendem como o time trabalha.'],
    verTrabalho: 'Ver o trabalho',
    destaquesAria: 'Destaques',
    fotoAlt: 'Mateus apresentando um pitch com microfone',
    tagsAria: 'Tecnologias',
    secoes: {
      sobre: '01 / Sobre',
      trabalho: '02 / Trabalho',
      trabalhoTitulo: ['Onde eu construo ', 'hoje.'],
      projetos: '03 / Hackathons',
      projetosTitulo: ['Hackathons, ', 'sempre com IA.'],
      comoTrabalho: '04 / Como eu trabalho',
    },
    comparativoLegenda: (de, ate) => `${de}–${ate}× mais rápido · 4 a 5,5 meses convertidos em semanas`,
    minhaParte: 'minha parte →',
    contato: {
      titulo: ['Vamos construir ', 'alguma coisa?'],
      texto: 'O jeito mais rápido de falar comigo é por mensagem no LinkedIn.',
      cta: 'Mandar mensagem no LinkedIn ↗',
      paraAgente: 'Para o seu agente',
    },
    md: {
      sobre: 'Sobre',
      comoTrabalho: 'Como trabalho',
      experiencia: 'Experiência',
      projetos: 'Hackathons',
      formacao: 'Formação',
      minhaParte: 'Minha parte',
      time: 'Time',
      numeros: 'Números',
      nota: 'Nota',
      versaoHumana: 'Versão para humanos',
    },
  },

  perfil: {
    nome: 'Mateus Pachela',
    cargo: 'Software Engineer',
    empresa: 'BTG Pactual',
    local: 'Campinas, SP',
    resumo:
      'Engenheiro de software backend no BTG Pactual e estudante de Engenharia de Computação na Unicamp. Escrevo o backend e construo a IA que acelera o time.',
    linkedin: 'https://www.linkedin.com/in/mateus-pachela/',
    email: 'mateuspachela270@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mateus-pachela/' },
      { label: 'GitHub', href: 'https://github.com/mateuspachela' },
      { label: 'E-mail', href: 'mailto:mateuspachela270@gmail.com' },
    ],
  },

  destaques: [
    { valor: '6–8×', rotulo: 'mais rápido com o MCP: 3 semanas no lugar de 4 a 5,5 meses' },
    { valor: 'Menção honrosa', rotulo: 'Hackathon Enter × Unicamp' },
    { valor: 'US$ 0,89', rotulo: 'para o BrandLoop ler 1.516 conversas reais' },
  ],

  sobre: {
    frase: 'Eu não descobri o que queria pensando. Descobri construindo.',
    paragrafos: [
      'Entrei no técnico em Mecatrônica do Cotuca com 14 anos. Foram o cursinho e o estágio numa startup de IoT que me mostraram que eu queria computação.',
      'Hoje escrevo backend em Kotlin no BTG e, no tempo que sobra, faço hackathons, quase sempre com agentes de IA no centro da solução. Sou obcecado por construir algo de valor para pessoas reais.',
      'Aprendi fazendo, em vez de só imaginar. A imaginação é o que mais nos limita; é construindo que eu descubro até onde consigo ir.',
    ],
    citacao: {
      texto: 'Mas existe um grande, o maior obstáculo para eu ir adiante: eu mesma.',
      fonte: 'Clarice Lispector, Uma Aprendizagem ou O Livro dos Prazeres (1969)',
    },
  },

  principios: [
    {
      titulo: 'Estressar a ideia antes de construir',
      texto: 'Começo todo projeto com uma rodada de perguntas difíceis sobre a ideia. Melhor descobrir o furo na conversa do que no código.',
    },
    {
      titulo: 'IA com o contexto do time',
      texto: 'Um agente só ajuda se segue as convenções de quem vai revisar o código, não as boas práticas genéricas da internet.',
    },
    {
      titulo: 'Previsível onde mexe com gente real',
      texto: 'Quando os dados são de clientes de verdade, prefiro consulta auditável a agente autônomo.',
    },
  ],

  experiencias: [
    {
      id: 'btg',
      empresa: 'BTG Pactual',
      cargo: 'Software Engineer · Backend',
      periodo: 'Jul 2025 — atual',
      resumo:
        'Entrei por um estágio de férias e fui efetivado como engenheiro júnior depois de um mês. Trabalho no backend da abertura de contas do app, nacional e internacional.',
      blocos: [
        {
          titulo: 'Servidor MCP e skills para o time',
          texto:
            'Por iniciativa própria, criei um servidor MCP com skills que automatizam as partes manuais do trabalho: gerar telas server-driven de ponta a ponta, integrações HTTP, listeners de mensageria e uma jornada inteira ligando três microsserviços. As skills seguem os padrões do time, então o código sai pronto para revisão. Com o MCP, uma entrega saiu em 3 semanas. Entregas de tamanho parecido levavam de 4 a 5,5 meses antes da IA, para o mesmo dev sênior trabalhando em dupla com outro sênior.',
          // 4 meses ≈ 17 semanas; 5,5 meses ≈ 24 semanas
          comparativo: {
            antes: { rotulo: 'Antes da IA · dupla de seniores', semanas: [17, 24], texto: '17–24 semanas' },
            depois: { rotulo: 'Com o MCP', semanas: 3, texto: '3 semanas' },
          },
        },
        {
          titulo: 'Diagnóstico de contas travadas',
          texto:
            'Algumas aberturas de conta travavam por inconsistências legadas que não geram erro nem alerta. Tentei primeiro um agente autônomo e descartei em poucos dias, porque eram dados reais de pessoas reais. Transformei o raciocínio de diagnóstico em consultas: um painel em que você informa o cliente e recebe a causa e a correção, com runbooks e alertas.',
          numeros: [
            { valor: '−50%', rotulo: 'incidentes' },
            { valor: '−90%', rotulo: 'tempo de resolução' },
          ],
        },
        {
          titulo: 'Fluxo regulatório de consentimento',
          texto: 'Construí o fluxo para coletar o consentimento de clientes numa migração de contas internacionais.',
        },
      ],
      stack: ['Kotlin', 'Spring Boot', 'PostgreSQL', 'Kafka', 'AWS', 'Terraform', 'Grafana', 'MCP'],
      frase: 'A documentação que nunca existiu virou o agente.',
    },
    {
      id: 'evolv',
      empresa: 'Evolv',
      cargo: 'IoT Systems Engineer · antes estagiário',
      periodo: 'Jan 2023 — Jun 2025',
      resumo: 'Startup de IoT. Desenhei fluxos do zero, a partir de ideias próprias, e testei se funcionavam para a empresa.',
      blocos: [
        {
          titulo: 'Analisador de bateria',
          texto:
            'A gente só descobria que um sensor tinha morrido quando o cliente reclamava. Escrevi um analisador de telemetria em Python, com regressão linear, que sinaliza sensores perto do fim da bateria e transforma queda inesperada em troca agendada.',
        },
        {
          titulo: 'Automação de dispositivos',
          texto: 'Scripts para configurar dispositivos em larga escala via REST e WebSockets, regras de telemetria em tempo real e codecs de hardware.',
        },
      ],
      stack: ['Python', 'JavaScript', 'ThingsBoard', 'ChirpStack'],
    },
  ],

  projetos: [
    {
      id: 'enteros',
      nome: 'EnterOS',
      contexto: 'Hackathon Enter × Unicamp',
      data: 'Set 2026',
      selo: 'Menção honrosa',
      frase: 'Defender, fazer acordo ou pedir o documento que falta.',
      descricao:
        'Sistema de decisão para processos em que o cliente diz não reconhecer um empréstimo. O método, que chamamos de Radar de Provas, mede o risco pelas provas existentes e recomenda o caminho mais barato para o banco. A sacada foi a terceira via: quando falta o contrato, a chance de derrota sobe de 12% para 75%, e recuperar o documento muda o jogo.',
      papel: 'Propus a solução e escrevi o motor de decisão, o custo ligado ao contrato com cada escritório, o backtest e o painel da empresa. Também fiz o deck e o pitch.',
      time: 'Time de 5 pessoas',
      numeros: [
        { valor: '60 mil', rotulo: 'sentenças na base' },
        { valor: '0,92', rotulo: 'AUC fora da amostra' },
        { valor: 'R$ 53 mi', rotulo: 'economia potencial (backtest)' },
      ],
      stack: ['Python', 'FastAPI', 'React', 'OpenAI', 'LangGraph'],
      links: [
        {
          label: 'Apresentação',
          href: 'https://htmlpreview.github.io/?https://github.com/felipeCapovilla/HackathonEnter/blob/main/docs/apresentacao/index.html',
        },
        { label: 'Vídeo', href: 'https://www.youtube.com/watch?v=yI8_-BOWEvU' },
        { label: 'Código', href: 'https://github.com/felipeCapovilla/HackathonEnter' },
      ],
      aviso: 'Valores de economia simulados sobre a base do desafio.',
    },
    {
      id: 'brandloop',
      nome: 'BrandLoop',
      contexto: 'Hack2L · AI Agents Hackathon',
      data: 'Ago 2026',
      frase: 'Uma agência inteira, em seis agentes.',
      descricao:
        'E agora todo anúncio parece igual. O BrandLoop roda o funil de marketing inteiro sozinho, sem nenhuma etapa humana no meio: entrevista as lideranças da marca, pesquisa como ela é comentada no mercado, escreve o texto, gera o vídeo e publica o anúncio. São seis agentes com contratos tipados e um fallback determinístico em cada chamada externa.',
      papel: 'Integrei a pesquisa de mercado com a API de dados sociais de um dos patrocinadores, cuidei da resiliência do pipeline e fiz o deck do pitch.',
      time: 'Time de 4 pessoas',
      numeros: [
        { valor: '1.516', rotulo: 'conversas reais analisadas' },
        { valor: '< 3 min', rotulo: 'em 5 plataformas' },
        { valor: 'US$ 0,89', rotulo: 'custo da pesquisa' },
      ],
      caso: {
        titulo: 'O que o agente descobriu no caso do iFood',
        passos: [
          'Em comentários do YouTube e do Reddit, achou donos de restaurante com medo de entrar no iFood por causa das taxas, sem saber calcular se valeria a pena.',
          'Achou até uma subcomunidade que vende planilhas de taxas das plataformas, que ficam desatualizadas com o tempo.',
          'Criou uma campanha que ataca essa dor com transparência: mostra ao dono que preço ele precisa cobrar para compensar entrar.',
        ],
      },
      stack: ['Next.js', 'TypeScript', 'Agentes de IA', 'API de dados sociais', 'ElevenLabs'],
      links: [{ label: 'Código', href: 'https://github.com/julio-amaral-oliveira/hack2L' }],
      aviso: 'Demo independente com o iFood como caso de exemplo, sem vínculo com a empresa.',
    },
    {
      id: 'space-weather',
      nome: 'Space Weather Game',
      contexto: 'NASA Space Apps Challenge',
      data: 'Out 2025',
      frase: 'Clima espacial de verdade, num jogo.',
      descricao:
        'Mini-game narrativo para conscientizar sobre os impactos de fenômenos reais do clima espacial, como atividade solar e tempestades geomagnéticas, usando dados da NASA e do INPE.',
      papel: 'Fiz todo o backend em Python: consumo da API DONKI da NASA e do portal EMBRACE do INPE, com cache local dos dados.',
      time: 'Projeto em equipe',
      numeros: [],
      stack: ['Python', 'NASA DONKI API', 'INPE EMBRACE', 'Godot'],
      links: [{ label: 'Código', href: 'https://github.com/Vinicius007700/Hackathon-Nasa' }],
    },
  ],

  formacao: [
    { titulo: 'Engenharia de Computação', lugar: 'Unicamp', periodo: '2024 — 2028' },
    { titulo: 'Técnico em Mecatrônica', lugar: 'Cotuca · Unicamp', periodo: '2020 — 2022' },
  ],
};

export default pt;
