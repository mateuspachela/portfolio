// English content. Same shape as pt.ts.
import type { Conteudo } from './types';

const en: Conteudo = {
  ui: {
    htmlLang: 'en',
    pular: 'Skip to content',
    navAria: 'Sections',
    nav: { sobre: 'About', trabalho: 'Work', projetos: 'Hackathons' },
    vistaAria: 'Page version',
    idiomaAria: 'Language',
    maquinaAria: 'Markdown version',
    maquinaArquivo: 'profile.md',
    h1: ['I build AI agents that ', 'understand how the team works.'],
    verTrabalho: 'See the work',
    destaquesAria: 'Highlights',
    fotoAlt: 'Mateus pitching with a microphone',
    tagsAria: 'Technologies',
    secoes: {
      sobre: '01 / About',
      trabalho: '02 / Work',
      trabalhoTitulo: ['Where I build ', 'today.'],
      projetos: '03 / Hackathons',
      projetosTitulo: ['Hackathons, ', 'always with AI.'],
      comoTrabalho: '04 / How I work',
    },
    comparativoLegenda: (de, ate) => `${de}–${ate}× faster · 4 to 5.5 months converted to weeks`,
    minhaParte: 'my part →',
    contato: {
      titulo: ["Let's build ", 'something?'],
      texto: 'The fastest way to reach me is a message on LinkedIn.',
      cta: 'Message me on LinkedIn ↗',
      paraAgente: 'For your agent',
    },
    md: {
      sobre: 'About',
      comoTrabalho: 'How I work',
      experiencia: 'Experience',
      projetos: 'Hackathons',
      formacao: 'Education',
      minhaParte: 'My part',
      time: 'Team',
      numeros: 'Numbers',
      nota: 'Note',
      versaoHumana: 'Human version',
    },
  },

  perfil: {
    nome: 'Mateus Pachela',
    cargo: 'Software Engineer',
    empresa: 'BTG Pactual',
    local: 'Campinas, Brazil',
    resumo:
      'Backend software engineer at BTG Pactual and Computer Engineering student at Unicamp. I write the backend and build the AI that speeds up the team.',
    linkedin: 'https://www.linkedin.com/in/mateus-pachela/',
    email: 'mateuspachela270@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mateus-pachela/' },
      { label: 'GitHub', href: 'https://github.com/mateuspachela' },
      { label: 'Email', href: 'mailto:mateuspachela270@gmail.com' },
    ],
  },

  destaques: [
    { valor: '6–8×', rotulo: 'faster with the MCP: 3 weeks instead of 4 to 5.5 months' },
    { valor: 'Honorable mention', rotulo: 'Enter × Unicamp Hackathon' },
    { valor: 'US$ 0.89', rotulo: 'for BrandLoop to read 1,516 real conversations' },
  ],

  sobre: {
    frase: "I didn't figure out what I wanted by thinking. I figured it out by building.",
    paragrafos: [
      'I started a technical program in Mechatronics at Cotuca when I was 14. A college prep course and an internship at an IoT startup showed me I wanted to work in computing.',
      "Today I write Kotlin backend at BTG and, in my spare time, I do hackathons, almost always with AI agents at the core. I'm obsessed with building things that matter to real people.",
      'I learned by doing, not just by imagining. Imagination is what limits us most; building is how I find out how far I can go.',
    ],
    citacao: {
      texto: 'Mas existe um grande, o maior obstáculo para eu ir adiante: eu mesma.',
      traducao: 'But there is a great obstacle, the greatest one, to my moving forward: myself. (free translation)',
      fonte: 'Clarice Lispector, An Apprenticeship or The Book of Pleasures (1969)',
    },
  },

  principios: [
    {
      titulo: 'Stress-test the idea before building',
      texto: 'I start every project with a round of hard questions about the idea. Better to find the hole in the conversation than in the code.',
    },
    {
      titulo: "AI with the team's context",
      texto: 'An agent only helps if it follows the conventions of whoever reviews the code, not generic best practices from the internet.',
    },
    {
      titulo: 'Predictable where real people are involved',
      texto: 'When the data belongs to real customers, I prefer an auditable query over an autonomous agent.',
    },
  ],

  experiencias: [
    {
      id: 'btg',
      empresa: 'BTG Pactual',
      cargo: 'Software Engineer · Backend',
      periodo: 'Jul 2025 — present',
      resumo:
        'I joined through a summer internship and was hired as a junior engineer after one month. I work on the backend of account opening in the app, both domestic and international.',
      blocos: [
        {
          titulo: 'MCP server and skills for the team',
          texto:
            "On my own initiative, I built an MCP server with skills that automate the manual parts of the job: generating server-driven screens end to end, HTTP integrations, messaging listeners, and a full journey spanning three microservices. The skills follow the team's own conventions, so the code comes out ready for review. With the MCP, one delivery shipped in 3 weeks. Deliveries of similar size took 4 to 5.5 months before AI, for the same senior developer working in a pair with another senior.",
          comparativo: {
            antes: { rotulo: 'Before AI · pair of seniors', semanas: [17, 24], texto: '17–24 weeks' },
            depois: { rotulo: 'With the MCP', semanas: 3, texto: '3 weeks' },
          },
        },
        {
          titulo: 'Diagnosing stuck accounts',
          texto:
            'Some account openings got stuck because of legacy inconsistencies that throw no error and trigger no alert. My first idea was an autonomous agent, and I dropped it within days: this was real data from real people. Instead, I turned the diagnostic reasoning into queries: a dashboard where you enter the customer and get the root cause and the fix, backed by runbooks and alerts.',
          numeros: [
            { valor: '−50%', rotulo: 'incidents' },
            { valor: '−90%', rotulo: 'time to resolve' },
          ],
        },
        {
          titulo: 'Regulatory consent flow',
          texto: 'I built the flow that collects customer consent during an international account migration.',
        },
      ],
      stack: ['Kotlin', 'Spring Boot', 'PostgreSQL', 'Kafka', 'AWS', 'Terraform', 'Grafana', 'MCP'],
      frase: 'The documentation that never existed became the agent.',
    },
    {
      id: 'evolv',
      empresa: 'Evolv',
      cargo: 'IoT Systems Engineer · previously intern',
      periodo: 'Jan 2023 — Jun 2025',
      resumo: 'IoT startup. I designed workflows from scratch, based on my own ideas, and tested whether they worked for the company.',
      blocos: [
        {
          titulo: 'Battery analyzer',
          texto:
            'We only found out a sensor had died when the customer complained. I wrote a telemetry analyzer in Python, using linear regression, that flags sensors close to running out of battery and turns unexpected outages into scheduled replacements.',
        },
        {
          titulo: 'Device automation',
          texto: 'Scripts to configure devices at scale over REST and WebSockets, real-time telemetry rules, and hardware codecs.',
        },
      ],
      stack: ['Python', 'JavaScript', 'ThingsBoard', 'ChirpStack'],
    },
  ],

  projetos: [
    {
      id: 'enteros',
      nome: 'EnterOS',
      contexto: 'Enter × Unicamp Hackathon',
      data: 'Sep 2026',
      selo: 'Honorable mention',
      frase: 'Defend, settle, or request the missing document.',
      descricao:
        'A decision system for lawsuits in which a customer claims not to recognize a loan. Our method, Radar de Provas ("Evidence Radar"), measures risk from the existing evidence and recommends the cheapest path for the bank. The insight was the third option: when the contract is missing, the chance of losing jumps from 12% to 75%, and recovering the document changes the game.',
      papel: "I proposed the solution and wrote the decision engine, the cost model tied to each law firm's contract, the backtest, and the company dashboard. I also built the deck and gave the pitch.",
      time: 'Team of 5',
      numeros: [
        { valor: '60k', rotulo: 'court rulings in the dataset' },
        { valor: '0.92', rotulo: 'out-of-sample AUC' },
        { valor: 'R$ 53M', rotulo: 'potential savings (backtest)' },
      ],
      stack: ['Python', 'FastAPI', 'React', 'OpenAI', 'LangGraph'],
      links: [
        {
          label: 'Slides',
          href: 'https://htmlpreview.github.io/?https://github.com/felipeCapovilla/HackathonEnter/blob/main/docs/apresentacao/index.html',
        },
        { label: 'Video', href: 'https://www.youtube.com/watch?v=yI8_-BOWEvU' },
        { label: 'Code', href: 'https://github.com/felipeCapovilla/HackathonEnter' },
      ],
      aviso: 'Savings figures simulated on the challenge dataset.',
    },
    {
      id: 'brandloop',
      nome: 'BrandLoop',
      contexto: 'Hack2L · AI Agents Hackathon',
      data: 'Aug 2026',
      frase: 'A whole agency, in six agents.',
      descricao:
        "Now every ad looks the same. BrandLoop runs the entire marketing funnel on its own, with no human step in between: it interviews the brand's leaders, researches how the brand is discussed in the market, writes the copy, generates the video, and publishes the ad. Six agents with typed contracts and a deterministic fallback on every external call.",
      papel: "I integrated market research with a sponsor's social data API, handled pipeline resilience, and built the pitch deck.",
      time: 'Team of 4',
      numeros: [
        { valor: '1,516', rotulo: 'real conversations analyzed' },
        { valor: '< 3 min', rotulo: 'across 5 platforms' },
        { valor: 'US$ 0.89', rotulo: 'research cost' },
      ],
      caso: {
        titulo: "What the agent found in the iFood case (Brazil's leading food delivery app)",
        passos: [
          'In YouTube and Reddit comments, it found restaurant owners afraid to join iFood because of the fees, unable to tell whether it would pay off.',
          'It even found a subcommunity selling spreadsheets of platform fees, which go out of date over time.',
          'It created a campaign that tackles that pain with transparency: it shows owners the price they need to charge for joining to pay off.',
        ],
      },
      stack: ['Next.js', 'TypeScript', 'AI agents', 'Social data API', 'ElevenLabs'],
      links: [{ label: 'Code', href: 'https://github.com/julio-amaral-oliveira/hack2L' }],
      aviso: 'Independent demo using iFood as an example case, with no affiliation with the company.',
    },
    {
      id: 'space-weather',
      nome: 'Space Weather Game',
      contexto: 'NASA Space Apps Challenge',
      data: 'Oct 2025',
      frase: 'Real space weather, in a game.',
      descricao:
        "A narrative mini-game that raises awareness of the impacts of real space weather phenomena, such as solar activity and geomagnetic storms, using data from NASA and INPE (Brazil's National Institute for Space Research).",
      papel: "I built the entire Python backend: consuming NASA's DONKI API and INPE's EMBRACE portal, with local data caching.",
      time: 'Team project',
      numeros: [],
      stack: ['Python', 'NASA DONKI API', 'INPE EMBRACE', 'Godot'],
      links: [{ label: 'Code', href: 'https://github.com/Vinicius007700/Hackathon-Nasa' }],
    },
  ],

  formacao: [
    { titulo: 'Computer Engineering', lugar: 'Unicamp', periodo: '2024 — 2028' },
    { titulo: 'Technical Degree in Mechatronics', lugar: 'Cotuca · Unicamp', periodo: '2020 — 2022' },
  ],
};

export default en;
