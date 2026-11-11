// Versão do perfil para agentes: mesmo conteúdo do site, em Markdown.
// Servida em /llms.txt (pt) e /en/llms.txt (en), e exibida na visão "Machine".
import type { Conteudo } from '../data/types';

export function perfilEmMarkdown(c: Conteudo, site?: URL): string {
  const { ui, perfil, sobre, principios, experiencias, projetos, formacao } = c;
  const t = ui.md;
  const l: string[] = [];

  l.push(`# ${perfil.nome}`, '');
  l.push(`> ${perfil.cargo} @ ${perfil.empresa} · ${formacao[0].titulo} @ ${formacao[0].lugar} · ${perfil.local}`, '');
  l.push(perfil.resumo, '');
  if (perfil.links.length) l.push(perfil.links.map((x) => `- ${x.label}: ${x.href.replace('mailto:', '')}`).join('\n'), '');

  l.push(`## ${t.sobre}`, '');
  l.push(`"${sobre.frase}"`, '');
  sobre.paragrafos.forEach((p) => l.push(p, ''));
  l.push(`> "${sobre.citacao.texto}" (${sobre.citacao.fonte})`);
  if (sobre.citacao.traducao) l.push(`> ${sobre.citacao.traducao}`);
  l.push('');

  l.push(`## ${t.comoTrabalho}`, '');
  principios.forEach((p) => l.push(`- **${p.titulo}.** ${p.texto}`));
  l.push('');

  l.push(`## ${t.experiencia}`, '');
  experiencias.forEach((e) => {
    l.push(`### ${e.empresa} · ${e.cargo} (${e.periodo})`, '');
    l.push(e.resumo, '');
    e.blocos.forEach((b) => {
      let n = b.numeros?.length ? ` (${b.numeros.map((x) => `${x.valor} ${x.rotulo}`).join('; ')})` : '';
      if (b.comparativo) n += ` (${b.comparativo.depois.rotulo}: ${b.comparativo.depois.texto}; ${b.comparativo.antes.rotulo}: ${b.comparativo.antes.texto})`;
      l.push(`- **${b.titulo}:** ${b.texto}${n}`);
    });
    l.push(`- Stack: ${e.stack.join(', ')}`, '');
  });

  l.push(`## ${t.projetos}`, '');
  projetos.forEach((p) => {
    l.push(`### ${p.nome} · ${p.contexto} (${p.data})${p.selo ? ` · ${p.selo}` : ''}`, '');
    l.push(p.descricao, '');
    l.push(`- ${t.minhaParte}: ${p.papel}`);
    l.push(`- ${t.time}: ${p.time}`);
    if (p.numeros.length) l.push(`- ${t.numeros}: ${p.numeros.map((n) => `${n.valor} ${n.rotulo}`).join('; ')}`);
    l.push(`- Stack: ${p.stack.join(', ')}`);
    if (p.caso) l.push(`- ${p.caso.titulo}: ${p.caso.passos.join(' ')}`);
    p.links.forEach((x) => l.push(`- ${x.label}: ${x.href}`));
    if (p.aviso) l.push(`- ${t.nota}: ${p.aviso}`);
    l.push('');
  });

  l.push(`## ${t.formacao}`, '');
  formacao.forEach((f) => l.push(`- ${f.titulo}, ${f.lugar} (${f.periodo})`));
  l.push('');

  if (site) l.push('---', `${t.versaoHumana}: ${site.href}`);
  return l.join('\n');
}
