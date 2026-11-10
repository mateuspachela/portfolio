// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// TODO: trocar pela URL final da Vercel (ou domínio próprio) quando existir.
export default defineConfig({
  site: 'https://mateuspachela.vercel.app',
  integrations: [react()],
});
