import type { APIRoute } from 'astro';
import { perfilEmMarkdown } from '../lib/markdown';

export const GET: APIRoute = ({ site }) =>
  new Response(perfilEmMarkdown(site), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
