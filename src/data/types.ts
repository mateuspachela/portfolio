export type Link = { label: string; href: string };

export type Numero = { valor: string; rotulo: string };

export type Experiencia = {
  id: string;
  empresa: string;
  cargo: string;
  periodo: string;
  resumo: string;
  blocos: {
    titulo: string;
    texto: string;
    numeros?: Numero[];
    // Comparação visual em semanas (barras proporcionais)
    comparativo?: { antes: { rotulo: string; semanas: [number, number]; texto: string }; depois: { rotulo: string; semanas: number; texto: string } };
  }[];
  stack: string[];
  frase?: string;
};

export type Projeto = {
  id: string;
  nome: string;
  contexto: string;
  data: string;
  selo?: string;
  frase: string;
  descricao: string;
  papel: string;
  time: string;
  numeros: Numero[];
  stack: string[];
  links: Link[];
  aviso?: string;
  foto?: { src: string; alt: string };
  caso?: { titulo: string; passos: string[] };
};

// Textos fixos da interface (menus, títulos de seção, botões)
export type Ui = {
  htmlLang: string;
  pular: string;
  navAria: string;
  nav: { sobre: string; trabalho: string; projetos: string };
  vistaAria: string;
  idiomaAria: string;
  maquinaAria: string;
  maquinaArquivo: string;
  h1: [string, string];
  verTrabalho: string;
  destaquesAria: string;
  fotoAlt: string;
  tagsAria: string;
  secoes: {
    sobre: string;
    trabalho: string;
    trabalhoTitulo: [string, string];
    projetos: string;
    projetosTitulo: [string, string];
    comoTrabalho: string;
  };
  comparativoLegenda: (de: number, ate: number) => string;
  minhaParte: string;
  contato: { titulo: [string, string]; texto: string; cta: string; paraAgente: string };
  md: {
    sobre: string;
    comoTrabalho: string;
    experiencia: string;
    projetos: string;
    formacao: string;
    minhaParte: string;
    time: string;
    numeros: string;
    nota: string;
    versaoHumana: string;
  };
};

export type Conteudo = {
  ui: Ui;
  perfil: {
    nome: string;
    cargo: string;
    empresa: string;
    local: string;
    resumo: string;
    linkedin: string;
    email: string;
    links: Link[];
  };
  destaques: Numero[];
  sobre: {
    frase: string;
    paragrafos: string[];
    citacao: { texto: string; traducao?: string; fonte: string };
  };
  principios: { titulo: string; texto: string }[];
  experiencias: Experiencia[];
  projetos: Projeto[];
  formacao: { titulo: string; lugar: string; periodo: string }[];
};
