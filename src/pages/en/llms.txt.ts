import type { APIRoute } from 'astro';
import { conteudos } from '../../data';
import { perfilEmMarkdown } from '../../lib/markdown';

export const GET: APIRoute = ({ site }) =>
  new Response(perfilEmMarkdown(conteudos.en, new URL('/en/', site)), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
