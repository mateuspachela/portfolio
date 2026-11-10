// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// URL de produção na Vercel. Trocar aqui se ganhar domínio próprio.
export default defineConfig({
  site: 'https://mateuspachela.vercel.app',
  integrations: [react()],
});
