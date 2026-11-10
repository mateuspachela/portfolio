// Versão do perfil para agentes: mesmo conteúdo do site, em Markdown.
// Servida em /llms.txt e exibida na visão "Machine".
import { perfil, sobre, principios, experiencias, projetos, formacao } from '../data/site';

export function perfilEmMarkdown(site?: URL): string {
  const l: string[] = [];
  l.push(`# ${perfil.nome}`);
  l.push('');
  l.push(`> ${perfil.cargo} @ ${perfil.empresa} · Engenharia de Computação @ Unicamp · ${perfil.local}`);
  l.push('');
  l.push(perfil.resumo);
  l.push('');
  if (perfil.links.length) {
    l.push(perfil.links.map((x) => `- ${x.label}: ${x.href}`).join('\n'));
    l.push('');
  }

  l.push('## Sobre');
  l.push('');
  l.push(`"${sobre.frase}"`);
  l.push('');
  sobre.paragrafos.forEach((p) => l.push(p, ''));
  l.push(`> "${sobre.citacao.texto}" (${sobre.citacao.fonte})`, '');
  l.push('## Como trabalho');
  l.push('');
  principios.forEach((p) => l.push(`- **${p.titulo}.** ${p.texto}`));
  l.push('');

  l.push('## Experiência');
  l.push('');
  experiencias.forEach((e) => {
    l.push(`### ${e.empresa} · ${e.cargo} (${e.periodo})`);
    l.push('');
    l.push(e.resumo);
    l.push('');
    e.blocos.forEach((b) => {
      let n = b.numeros?.length ? ` (${b.numeros.map((x) => `${x.valor} ${x.rotulo}`).join('; ')})` : '';
      if (b.comparativo) n += ` (${b.comparativo.depois.rotulo}: ${b.comparativo.depois.texto}; ${b.comparativo.antes.rotulo}: ${b.comparativo.antes.texto})`;
      l.push(`- **${b.titulo}:** ${b.texto}${n}`);
    });
    l.push(`- Stack: ${e.stack.join(', ')}`);
    l.push('');
  });

  l.push('## Projetos');
  l.push('');
  projetos.forEach((p) => {
    l.push(`### ${p.nome} · ${p.contexto} (${p.data})${p.selo ? ` · ${p.selo}` : ''}`);
    l.push('');
    l.push(p.descricao);
    l.push('');
    l.push(`- Minha parte: ${p.papel}`);
    l.push(`- Time: ${p.time}`);
    if (p.numeros.length) l.push(`- Números: ${p.numeros.map((n) => `${n.valor} ${n.rotulo}`).join('; ')}`);
    l.push(`- Stack: ${p.stack.join(', ')}`);
    if (p.caso) l.push(`- ${p.caso.titulo}: ${p.caso.passos.join(' ')}`);
    p.links.forEach((x) => l.push(`- ${x.label}: ${x.href}`));
    if (p.aviso) l.push(`- Nota: ${p.aviso}`);
    l.push('');
  });

  l.push('## Formação');
  l.push('');
  formacao.forEach((f) => l.push(`- ${f.titulo}, ${f.lugar} (${f.periodo})`));
  l.push('');

  if (site) {
    l.push('---');
    l.push(`Versão para humanos: ${site.href}`);
  }
  return l.join('\n');
}
