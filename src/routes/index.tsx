import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import heroEva from "@/assets/hero-eva.jpg";
import kitMoldes from "@/assets/kit-moldes.jpg";
import criacaoPaineis from "@/assets/criacao-paineis.jpg";
import criacaoLetras from "@/assets/criacao-letras.jpg";
import criacaoPersonagens from "@/assets/criacao-personagens.jpg";
import criacaoDatas from "@/assets/criacao-datas.jpg";
import criacaoCantinho from "@/assets/criacao-cantinho.jpg";
import criacaoAtividades from "@/assets/criacao-atividades.jpg";
import passoImprima from "@/assets/passo-imprima.jpg";
import passoRecorte from "@/assets/passo-recorte.jpg";
import passoPeca from "@/assets/passo-peca.jpg";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import depo3 from "@/assets/depo-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "Kits de Peças para EVA | Moldes para Professores" },
    { name: "description", content: "Kits digitais de moldes para EVA para professores criarem painéis, murais, decoração e atividades." },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Kits de Peças para EVA | Moldes para Professores" },
    { property: "og:description", content: "Kits digitais de moldes para EVA para professores criarem painéis, murais, decoração e atividades." },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
});

const links = {
  10: "https://ggcheckout.app/checkout/v5/1vB0wswvFdBEVrASEPjL",
  20: "https://ggcheckout.app/checkout/v5/C5EqKd1ZfW70nHAdLnm5",
  30: "https://ggcheckout.app/checkout/v5/KPJwp1H4kQVlmu9hOScy",
  50: "https://ggcheckout.app/checkout/v5/DHgLiJOWwrr6ErcDYpBd",
  down20: "https://ggcheckout.app/checkout/v5/gMe3OgtrhSvkU15TNrkW",
} as const;

const kits = [
  { name: "Kit 10 Peças", qty: 10, price: "14,67", old: "29,90", note: "Para começar" },
  { name: "Kit 20 Peças", qty: 20, price: "24,67", old: "59,90", note: "Mais escolhido", hot: true },
  { name: "Kit 30 Peças", qty: 30, price: "34,67", old: "89,90", note: "Mais variedade" },
  { name: "Kit 50 Peças", qty: 50, price: "49,67", old: "149,90", note: "Coleção completa" },
];

const benefits = [
  ["✂️", "Feitos para EVA", "Moldes para imprimir, transferir para o EVA e criar suas peças."],
  ["🏫", "Para professores", "Ideais para sala de aula, painéis, murais e atividades."],
  ["🖨️", "Prontos para imprimir", "Arquivos digitais para você ter os moldes sempre à mão."],
  ["⏱️", "Economize tempo", "Pare de desenhar tudo do zero e foque na criação."],
  ["♻️", "Use várias vezes", "Guarde os arquivos e reutilize em novos projetos."],
  ["📱", "100% digital", "Acesse pelo celular ou computador."],
];

const creations: [string, string, string][] = [
  [criacaoPaineis, "Painéis e murais", "Deixe a sala mais bonita e acolhedora."],
  [criacaoLetras, "Letras e números", "Apoie alfabetização, matemática e atividades visuais."],
  [criacaoPersonagens, "Personagens", "Crie projetos infantis com elementos divertidos."],
  [criacaoDatas, "Datas comemorativas", "Decore a sala para momentos especiais."],
  [criacaoCantinho, "Cantinhos educativos", "Monte espaços de leitura, rotina e aprendizagem."],
  [criacaoAtividades, "Atividades criativas", "Tenha recursos para trabalhos manuais."],
];

const steps: [string, string, string, string, string][] = [
  ["01", passoImprima, "Imprima", "Escolha o molde e imprima.", "Folhas de moldes impressas ao lado de folhas de EVA coloridas e impressora"],
  ["02", passoRecorte, "Passe para o EVA", "Use o desenho como referência para contornar e recortar.", "Mãos riscando molde impresso sobre folha de EVA amarela"],
  ["03", passoPeca, "Crie sua peça", "Monte, decore e use na sala.", "Mãos segurando leão de EVA colorido finalizado"],
];

const depoimentos: [string, string, string, string][] = [
  [depo1, "Mariana Souza", "Professora de Educação Infantil", "Os moldes mudaram minha rotina. Montei o painel da sala em uma tarde e ficou lindo."],
  [depo2, "Carla Pereira", "Professora do Ensino Fundamental", "Imprimo, contorno no EVA e pronto. Economizo horas toda semana."],
  [depo3, "Ana Beatriz", "Professora e Artesã", "Moldes bem desenhados e fáceis de usar. As peças ficam com acabamento profissional."],
];

const faqs = [
  ["Os moldes são para trabalhos em EVA?", "Sim. Os arquivos foram pensados como base para trabalhos em EVA."],
  ["É um produto físico?", "Não. É um produto 100% digital. Nenhum material físico será enviado."],
  ["Como uso os moldes?", "Você recebe os arquivos, imprime e usa o desenho como base para transferir e cortar no EVA."],
  ["Qual kit escolher?", "O Kit 10 é ótimo para começar. O Kit 20 é o mais escolhido. Os kits 30 e 50 oferecem mais variedade."],
];

function Title({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="mx-auto max-w-3xl text-center"><span className="text-xs font-black uppercase tracking-[.18em] text-violet-600">{eyebrow}</span><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">{title}</h2>{text && <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">{text}</p>}</div>;
}

function BuyCard({ kit, onTen }: { kit: typeof kits[number]; onTen: () => void }) {
  const go = () => kit.qty === 10 ? onTen() : window.location.assign(links[kit.qty as 20 | 30 | 50]);
  return <motion.article whileHover={{ y: -5 }} className={`relative flex flex-col rounded-3xl border p-5 ${kit.hot ? "border-violet-400 bg-violet-50 shadow-xl shadow-violet-100" : "border-slate-200 bg-white shadow-sm"}`}>
    {kit.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1.5 text-[10px] font-black uppercase text-white">★ Mais escolhido</div>}
    <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-wide text-slate-400">{kit.note}</p><h3 className="mt-1 text-2xl font-black">{kit.name}</h3></div><span className="flex size-11 items-center justify-center rounded-xl bg-violet-100 text-xs font-black text-violet-700">EVA</span></div>
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100 bg-violet-50"><img src={kitMoldes} alt={`Folhas de moldes para EVA do ${kit.name}`} loading="lazy" width={1024} height={1024} className="h-40 w-full object-cover" /><div className="bg-white px-4 py-4"><p className="text-sm text-slate-500">Você recebe</p><p className="text-2xl font-black">{kit.qty} Moldes</p></div></div>
    <div className="mt-4"><p className="text-xs text-slate-400">De <span className="line-through">R$ {kit.old}</span></p><p className="text-4xl font-black text-violet-700"><small className="mr-1 text-sm">R$</small>{kit.price}</p></div>
    <ul className="my-5 space-y-2 text-sm text-slate-600"><li>✓ Arquivos digitais</li><li>✓ Prontos para imprimir</li><li>✓ Para trabalhos em EVA</li><li>✓ Ideal para professores</li></ul>
    <button onClick={go} className="mt-auto min-h-14 rounded-2xl bg-violet-600 px-5 text-sm font-black uppercase text-white transition hover:bg-violet-700">Quero este kit</button>
  </motion.article>;
}

function Downsell({ open, close }: { open: boolean; close: () => void }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
    <motion.div initial={{ opacity: 0, scale: .94, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-2xl">
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-500 px-6 py-8 text-center text-white"><span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-black uppercase">🎁 Oferta especial</span><h2 className="mt-4 text-3xl font-black leading-tight">Espere! Temos uma condição especial</h2><p className="mt-2 text-sm text-violet-100">Leve 20 moldes em vez de 10.</p></div>
      <div className="p-6 text-center"><div className="rounded-2xl border-2 border-violet-100 bg-violet-50 p-5"><p className="text-xs font-black uppercase tracking-widest text-violet-600">Oferta exclusiva</p><h3 className="mt-1 text-2xl font-black">Kit 20 Peças</h3><p className="font-black text-violet-700">20 Moldes</p><p className="mt-3 text-sm text-slate-400 line-through">R$ 24,67</p><p className="text-4xl font-black text-violet-700">R$ 19,90</p><div className="mt-4 space-y-2 text-left text-sm text-slate-600"><p>✓ 20 moldes para EVA</p><p>✓ Mais variedade</p><p>✓ Produto 100% digital</p></div></div><button onClick={() => window.location.assign(links.down20)} className="mt-5 w-full rounded-2xl bg-violet-600 px-4 py-4 text-sm font-black uppercase text-white shadow-lg hover:bg-violet-700">Sim! Quero 20 Moldes por R$ 19,90</button><button onClick={() => window.location.assign(links[10])} className="mt-3 w-full py-2 text-xs font-bold text-slate-400">Não, prefiro continuar com o Kit 10</button><button onClick={close} className="mt-2 text-[11px] text-slate-300">Fechar</button></div>
    </motion.div>
  </div>;
}

function Index() {
  const [downsell, setDownsell] = useState(false);
  return <>
    <Downsell open={downsell} close={() => setDownsell(false)} />
    <main className="min-h-screen overflow-x-hidden bg-[#fcfbff] text-slate-900">
      <div className="sticky top-0 z-40 border-b border-violet-100 bg-white/95 px-4 py-2.5 text-center text-[11px] font-black uppercase tracking-wide text-violet-700 backdrop-blur">📚 Moldes para EVA • Feitos para professores</div>

      <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-[#fcfbff] py-12 sm:py-20"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2"><div className="text-center lg:text-left"><span className="rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-black uppercase text-violet-700 shadow-sm">✂️ Moldes digitais para EVA</span><h1 className="mt-6 text-4xl font-black leading-[1.04] sm:text-5xl md:text-6xl">Transforme EVA em <span className="text-violet-600">painéis incríveis</span> para sua sala</h1><p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">Tenha moldes prontos para criar personagens, letras, números, enfeites e atividades, sem precisar desenhar tudo do zero.</p><div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">{["Para professores","Feitos para EVA","Prontos para imprimir"].map(x => <span key={x} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600">✓ {x}</span>)}</div><a href="#ofertas" className="mt-7 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-2xl bg-violet-600 px-7 text-sm font-black uppercase text-white shadow-lg shadow-violet-200 hover:bg-violet-700 sm:w-auto">Ver os kits</a><p className="mt-3 text-xs text-slate-400">Produto digital • Acesso após a compra • Pagamento seguro</p></div><div><div className="overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl"><img src={heroEva} alt="Peças artesanais de EVA: ursinho, coruja, leão, flores, letras e números coloridos" width={1024} height={1024} className="h-full w-full object-cover" /></div><div className="relative -mt-8 mx-4 rounded-2xl bg-white p-4 text-center shadow-lg"><b>Do molde para o EVA ✂️</b><p className="mt-1 text-xs text-slate-500">Imprima, transfira, recorte e crie.</p></div></div></div></section>

      <section className="py-16"><div className="mx-auto max-w-6xl px-5"><Title eyebrow="Como funciona" title="Do molde à peça pronta" text="Um processo simples para você criar sem começar do zero."/><div className="mt-10 grid gap-4 md:grid-cols-3">{steps.map(([n, img, t, d, alt])=><div key={n} className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm"><img src={img} alt={alt} loading="lazy" width={1280} height={832} className="h-40 w-full rounded-2xl object-cover" /><span className="mt-4 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-600">Passo {n}</span><h3 className="mt-3 text-lg font-black">{t}</h3><p className="mt-2 text-sm text-slate-500">{d}</p></div>)}</div></div></section>

      <section className="border-y border-violet-100 bg-violet-50/60 py-16"><div className="mx-auto max-w-6xl px-5"><Title eyebrow="Pensado para sua rotina" title="Mais tempo para ensinar. Menos tempo desenhando."/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([i,t,d])=><div key={t} className="rounded-2xl border border-white bg-white p-6 shadow-sm"><span className="flex size-11 items-center justify-center rounded-xl bg-violet-50 text-xl">{i}</span><h3 className="mt-4 font-black">{t}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{d}</p></div>)}</div></div></section>

      <section className="py-16"><div className="mx-auto max-w-6xl px-5"><Title eyebrow="Inspire-se" title="Veja o que você pode criar" text="Use os moldes em diferentes momentos da rotina escolar."/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{creations.map(([img,t,d])=><motion.div whileHover={{ y:-3 }} key={t} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><img src={img} alt={`Criação em EVA: ${t}`} loading="lazy" width={1280} height={832} className="h-44 w-full object-cover" /><div className="p-6"><h3 className="text-xl font-black">{t}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{d}</p></div></motion.div>)}</div></div></section>

      <section className="bg-slate-900 py-16 text-white"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2"><div><span className="text-xs font-black uppercase tracking-[.18em] text-violet-300">Para quem vive a sala de aula</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Uma sala bonita sem complicar sua rotina</h2><p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">Prepare painéis, atividades e decoração partindo de moldes prontos e coloque sua criatividade no acabamento.</p><div className="mt-7 space-y-3 text-sm font-bold"><p>✓ Prepare painéis com mais rapidez</p><p>✓ Tenha ideias para novos projetos</p><p>✓ Crie materiais visuais para seus alunos</p><p>✓ Monte sua biblioteca digital de moldes</p></div></div><div className="grid grid-cols-2 gap-3 rounded-3xl bg-white/10 p-3">{[[criacaoPersonagens,"Personagens"],[criacaoLetras,"Letras"],[criacaoPaineis,"Painéis"],[criacaoDatas,"Decoração"]].map(([img,t])=><div key={t} className="relative h-32 overflow-hidden rounded-2xl sm:h-40"><img src={img} alt={`Exemplo de ${t} feitos em EVA`} loading="lazy" width={1280} height={832} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-slate-900/30" /><span className="absolute bottom-2.5 left-3 text-sm font-black text-white drop-shadow">{t}</span></div>)}</div></div></section>

      <section id="ofertas" className="scroll-mt-10 py-20"><div className="mx-auto max-w-7xl px-5"><Title eyebrow="Escolha seu kit" title="Comece com quantas peças quiser" text="Todos os kits são digitais. Quanto maior o kit, maior a variedade de moldes."/><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{kits.map(k=><BuyCard key={k.name} kit={k} onTen={() => setDownsell(true)}/>)}</div><p className="mt-6 text-center text-xs text-slate-400">🔒 Compra segura • 📱 Produto digital • 🖨️ Pronto para imprimir</p></div></section>

      <section className="pb-20"><div className="mx-auto max-w-4xl px-5"><div className="rounded-3xl border-2 border-dashed border-violet-200 bg-violet-50 p-7 text-center"><span className="rounded-full bg-violet-600 px-4 py-1.5 text-xs font-black uppercase text-white">🎁 Oferta complementar</span><h2 className="mt-4 text-2xl font-black">Quer turbinar sua coleção?</h2><p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">Aqui podemos adicionar um pacote especial de moldes para datas comemorativas como order bump.</p><p className="mt-3 font-black text-violet-700">Sugestão: R$ 5,99</p></div></div></section>

      <section className="bg-white py-20"><div className="mx-auto max-w-6xl px-5"><Title eyebrow="Depoimentos" title="Quem usa, recomenda" text="Veja o que professoras dizem sobre os moldes."/><div className="mt-10 grid gap-5 md:grid-cols-3">{depoimentos.map(([img, nome, role, quote])=><article key={nome} className="rounded-3xl border border-slate-200 bg-[#fcfbff] p-6 shadow-sm"><div className="text-amber-400">★★★★★</div><p className="mt-4 text-sm leading-relaxed text-slate-600">“{quote}”</p><div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-4"><img src={img} alt={`Foto de ${nome}`} loading="lazy" width={816} height={816} className="size-12 rounded-full object-cover" /><div><b>{nome}</b><p className="mt-0.5 text-xs text-slate-400">{role}</p></div></div></article>)}</div></div></section>

      <section className="py-16"><div className="mx-auto max-w-3xl px-5"><Title eyebrow="Dúvidas" title="Perguntas frequentes"/><div className="mt-10 space-y-3">{faqs.map(([q,a])=><details key={q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none text-sm font-black">{q}<span className="float-right text-violet-600">＋</span></summary><p className="mt-3 text-sm leading-relaxed text-slate-500">{a}</p></details>)}</div></div></section>

      <section className="border-t border-violet-100 bg-violet-50 py-16"><div className="mx-auto max-w-3xl px-5 text-center"><span className="text-xs font-black uppercase tracking-[.18em] text-violet-600">Seu próximo projeto começa aqui</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Escolha seu kit e comece a criar</h2><p className="mt-4 text-sm text-slate-600">Tenha seus moldes de EVA organizados e prontos para os próximos projetos.</p><a href="#ofertas" className="mt-7 inline-flex min-h-14 items-center rounded-2xl bg-violet-600 px-8 text-sm font-black uppercase text-white shadow-lg hover:bg-violet-700">Ver os kits</a></div></section>
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-400">© {new Date().getFullYear()} • Kits de peças digitais para EVA<br/><span className="mt-2 inline-block">Produto digital • Nenhum material físico será enviado</span></footer>
    </main>
  </>;
}
