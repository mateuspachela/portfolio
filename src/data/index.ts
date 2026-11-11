import pt from './pt';
import en from './en';

export const conteudos = { pt, en };
export type Lang = keyof typeof conteudos;

// Caminho base de cada idioma: português na raiz, inglês em /en/
export const base: Record<Lang, string> = { pt: '/', en: '/en/' };
