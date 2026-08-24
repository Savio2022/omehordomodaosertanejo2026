import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "Kits de Peças para EVA | Moldes para Professores" },
    { name: "description", content: "Kits digitais de moldes para EVA, pensados para professores criarem painéis, murais, decoração e atividades." },
  ]}),
});

const checkout = {
  10: "https://ggcheckout.app/checkout/v5/1vB0wswvFdBEVrASEPjL",
  20: "https://ggcheckout.app/checkout/v5/C5EqKd1ZfW70nHAdLnm5",
  30: "https://ggcheckout.app/checkout/v5/KPJwp1H4kQVlmu9hOScy",
  50: "https://ggcheckout.app/checkout/v5/DHgLiJOWwrr6ErcDYpBd",
  downsell20: "https://ggcheckout.app/checkout/v5/gMe3OgtrhSvkU15TNrkW",
} as const;

const kits = [
  { nome: "Kit 10 Peças", qtd: 10, preco: "14,67", antigo: "29,90", texto: "Para começar", destaque: false },
  { nome: "Kit 20 Peças", qtd: 20, preco: "24,67", antigo: "59,90", texto: "Mais escolhido", destaque: true },
  { nome: "Kit 30 Peças", qtd: 30, preco: "34,67", antigo: "89,90", texto: "Mais variedade", destaque: false },
  { nome: "Kit 50 Peças", qtd: 50, preco: "49,67", antigo: "149,90", texto: "Coleção completa", destaque: false },
];

const beneficios = [
  ["✂️", "Feitos para EVA", "Moldes pensados para você imprimir, passar para o EVA e criar suas peças."],
  ["🏫", "Para professores", "Ideal para sala de aula, murais, painéis, decoração e atividades educativas."],
  ["🖨️", "Prontos para imprimir", "Receba os arquivos digitais e tenha os moldes sempre à mão."],
  ["⏱️", "Economize tempo", "Pare de desenhar tudo do zero e concentre seu tempo na criação."],
  ["♻️", "Use várias vezes", "Guarde os arquivos e reutilize os moldes em novos projetos."],
  ["📱", "100% digital", "Acesse pelo celular ou computador e organize sua coleção."],
];

const criacoes = [
  ["🎨", "Painéis e murais", "Crie cenários e decorações para deixar a sala mais acolhedora."],
  ["🔤", "Letras e números", "Use em alfabetização, matemática e atividades visuais."],
  ["🐻", "Personagens", "Dê vida aos projetos com personagens e elementos divertidos."],
  ["🎉", "Datas comemorativas", "Decore a sala para cada época especial do calendário escolar."],
  ["📚", "Cantinhos educativos", "Monte espaços de leitura, rotina, regras e aprendizagem."],
  ["🌈", "Atividades criativas", "Tenha recursos para projetos e trabalhos manuais com os alunos."],
];

const depoimentos = [
  ["Professora de Educação Infantil", "Depoimento real de uma professora sobre a praticidade dos moldes."],
  ["Professora do Ensino Fundamental", "Avaliação real sobre os trabalhos com EVA feitos em sala de aula."],
  ["Professora / Artesã", "Avaliação real sobre variedade, impressão e facilidade de uso."],
];

const duvidas = [
  ["Os moldes são para trabalhos em EVA?", "Sim. Os arquivos foram pensados para servir como base nos seus trabalhos com EVA."],
  ["É um produto físico?", "Não. É um produto 100% digital. Nenhum material físico será enviado."],
  ["Como vou usar os moldes?", "Você recebe os arquivos, imprime e usa o desenho como base para transferir e cortar no EVA."],
  ["Qual kit escolher?", "O Kit 10 é ótimo para começar. O Kit 20 é o mais escolhido. Já os kits 30 e 50 são indicados para quem quer mais variedade."],
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="mx-auto max-w-3xl text-center"><span className="text-xs font-black uppercase tracking-[0.18em] text-violet-600">{eyebrow}</span><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">{title}</h2>{text && <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">{text}</p>}</div>;
}

function KitCard({ kit, onBuy10 }: { kit: (typeof kits)[number]; onBuy10: () => void }) {
  const buy = () => {
    if (kit.qtd === 10) onBuy10();
    else window.location.href = checkout[kit.qtd as 20 | 30 | 50];
  };
  return <motion.article whileHover={{ y: -5 }} className={`relative flex h-full flex-col rounded-3xl border p-5 sm:p-6 ${kit.destaque ? "border-violet-400 bg-violet-50 shadow-xl shadow-violet-100" : "border-slate-200 bg-white shadow-sm"}`}>
    {kit.destaque && <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-violet-600 px-4 py-1.5 text-[0.65rem] font-black uppercase text-white shadow-md">★ Mais escolhido</div>}
    <div className="mb-5 flex items-start justify-between gap-3"><div><span className="text-xs font-bold uppercase tracking-wide text-slate-400">{kit.texto}</span><h3 className="mt-1 text-2xl font-black text-slate-900">{kit.nome}</h3></div><div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-xs font-black text-violet-700">EVA</div></div>
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white"><img src={`https://placehold.co/800x480/f5f3ff/6d28d9?text=${kit.qtd}+MOLDES+PARA+EVA`} alt={`${kit.qtd} moldes para EVA`} className="h-32 w-full object-cover" /><div className="p-5"><p className="text-sm font-semibold text-slate-500">Você recebe</p><p className="mt-1 text-2xl font-black text-slate-900">{kit.qtd} Moldes</p><p className="mt-3 text-sm text-slate-400">De <span className="line-through">R$ {kit.antigo}</span></p><div className="mt-1 flex items-end gap-1 text-violet-700"><span className="text-sm font-bold">R$</span><span className="text-4xl font-black leading-none">{kit.preco}</span></div></div></div>
    <ul className="my-5 space-y-3 text-sm text-slate-600"><li>✓ Arquivos digitais</li><li>✓ Prontos para imprimir</li><li>✓ Para trabalhos em EVA</li><li>✓ Ideal para professores</li></ul>
    <button onClick={buy} className="mt-auto inline-flex min-h-14 items-center justify-center rounded-2xl bg-violet-600 px-5 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-violet-700">Quero este kit</button>
  </motion.article>;
}

function UpsellModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const accept = () => { window.location.href = checkout.downsell20; };
  const decline = () => { window.location.href = checkout[10]; };
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Oferta especial Kit 20 Peças">
    <motion.div initial={{ opacity: 0, scale: 0.94, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-2xl">
      <button onClick={onClose} aria-label="Fechar" className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-slate-500 shadow-sm">×</button>
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-500 px-6 pb-7 pt-8 text-center text-white"><span className="inline-flex rounded-full bg-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-wide">🎁 Oferta especial</span><h2 className="mt-4 text-3xl font-black leading-tight">Espere! Temos uma condição especial para você</h2><p className="mt-2 text-sm text-violet-100">Em vez de levar 10 moldes, que tal sair com 20?</p></div>
      <div className="p-6 text-center"><div className="rounded-2xl border-2 border-violet-100 bg-violet-50 p-5"><p className="text-xs font-black uppercase tracking-widest text-violet-600">Upgrade exclusivo</p><h3 className="mt-1 text-2xl font-black text-slate-900">Kit 20 Peças</h3><p className="mt-1 text-lg font-black text-violet-700">20 Moldes</p><div className="mt-3"><span className="text-sm text-slate-400 line-through">R$ 24,67</span><p className="text-4xl font-black text-violet-700">R$ 19,90</p></div><div className="mt-4 space-y-2 text-left text-sm text-slate-600"><p>✓ 20 moldes para EVA</p><p>✓ Mais variedade para seus projetos</p><p>✓ Condição exclusiva desta oferta</p><p>✓ Produto 100% digital</p></div></div><button onClick={accept} className="mt-5 w-full rounded-2xl bg-violet-600 px-5 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-violet-200 hover:bg-violet-700">Sim! Quero 20 Moldes por R$ 19,90</button><button onClick={decline} className="mt-3 w-full py-2 text-xs font-bold text-slate-400 hover:text-slate-600">Não, prefiro continuar com o Kit 10</button><p className="mt-4 text-[0.65rem] text-slate-400">Oferta apresentada ao escolher o Kit 10.</p></div>
    </motion.div>
  </div>;
}

function Index() {
  const [showUpsell, setShowUpsell] = useState(false);
  return <>
    <UpsellModal open={showUpsell} onClose={() => setShowUpsell(false)} />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Nunito:wght@700;800;900&display=swap" rel="stylesheet" />
    <div className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 py-2.5 text-center text-[0.68rem] font-extrabold uppercase tracking-wide text-violet-700 backdrop-blur sm:text-xs">📚 PEÇAS PARA EVA • FEITAS PARA PROFESSORES</div>
    <main className="overflow-x-hidden bg-[#fcfbff] font-[Inter,sans-serif] text-slate-900">
      {/* restante da página permanece igual */}
      <section id="ofertas" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-20"><SectionTitle eyebrow="Escolha seu kit" title="Comece com quantas peças quiser" text="Todos os kits são digitais. Quanto maior o kit, maior a variedade de moldes para seus projetos." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{kits.map(kit=><KitCard key={kit.nome} kit={kit} onBuy10={() => setShowUpsell(true)}/>)}</div></section>
      <section id="checkout" className="py-16"><div className="container mx-auto max-w-3xl px-5"><SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" /><div className="mt-10 space-y-3">{duvidas.map(([pergunta,resposta])=><details key={pergunta} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none pr-6 text-sm font-black text-slate-900">{pergunta}<span className="float-right text-violet-600">＋</span></summary><p className="mt-3 text-sm leading-relaxed text-slate-500">{resposta}</p></details>)}</div></div></section>
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-400"><p>© {new Date().getFullYear()} • Kits de peças digitais para EVA</p><p className="mt-2">Produto digital • Nenhum material físico será enviado</p></footer>
    </main>
  </>;
}
