import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Moldes de EVA para Professores | Kits 10, 20, 30 e 50" },
      { name: "description", content: "Kits de moldes digitais para professores criarem painéis, murais, decoração e atividades em EVA." },
    ],
  }),
});

const kits = [
  { nome: "Kit 10 Moldes", preco: "14,67", antigo: "29,90", destaque: false, texto: "Para começar" },
  { nome: "Kit 20 Moldes", preco: "24,67", antigo: "59,90", destaque: true, texto: "Mais escolhido" },
  { nome: "Kit 30 Moldes", preco: "34,67", antigo: "89,90", destaque: false, texto: "Mais variedade" },
  { nome: "Kit 50 Moldes", preco: "49,67", antigo: "149,90", destaque: false, texto: "Coleção completa" },
];

const beneficios = [
  ["✂️", "Feitos para EVA", "Moldes digitais pensados para recortar, montar e transformar em peças de EVA."],
  ["🏫", "Foco em professores", "Ideais para murais, painéis, decoração, datas comemorativas e atividades."],
  ["🖨️", "Prontos para imprimir", "Baixe, imprima e use como base para transferir o desenho para o EVA."],
  ["📚", "Economize tempo", "Tenha modelos prontos em vez de começar cada desenho do zero."],
  ["♻️", "Use novamente", "Guarde os arquivos e reutilize os moldes nos seus próximos projetos."],
  ["📱", "100% digital", "Acesse pelo celular ou computador e mantenha sua coleção organizada."],
];

const depoimentos = [
  ["Professora de Educação Infantil", "Espaço reservado para um depoimento real de uma professora sobre a praticidade dos moldes."],
  ["Professora do Ensino Fundamental", "Espaço reservado para uma avaliação real sobre os trabalhos com EVA feitos em sala de aula."],
  ["Professora / Artesã", "Espaço reservado para uma avaliação real sobre variedade, impressão e facilidade de uso."],
];

const duvidas = [
  ["Os moldes são para EVA?", "Sim. A coleção é direcionada para trabalhos com EVA, especialmente para professores que produzem peças para a sala de aula."],
  ["É um produto físico?", "Não. É um produto digital. Nenhum item físico será enviado."],
  ["Como uso o molde?", "Você recebe o arquivo digital, imprime e utiliza o desenho como base para cortar e montar suas peças em EVA."],
  ["Qual kit escolher?", "O Kit 10 é para começar. O Kit 20 é o destaque pelo equilíbrio entre quantidade e preço. Os kits 30 e 50 são para quem quer uma coleção maior."],
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="mx-auto max-w-3xl text-center"><span className="text-xs font-black uppercase tracking-[0.18em] text-violet-600">{eyebrow}</span><h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">{title}</h2>{text && <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">{text}</p>}</div>;
}

function KitCard({ kit }: { kit: (typeof kits)[number] }) {
  return <motion.article whileHover={{ y: -5 }} className={`relative flex h-full flex-col rounded-3xl border p-6 ${kit.destaque ? "border-violet-400 bg-violet-50 shadow-xl shadow-violet-100" : "border-slate-200 bg-white shadow-sm"}`}>
    {kit.destaque && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1.5 text-[0.65rem] font-black uppercase text-white shadow-md">★ Mais escolhido</div>}
    <div className="mb-5 flex items-start justify-between gap-3"><div><span className="text-xs font-bold uppercase tracking-wide text-slate-400">{kit.texto}</span><h3 className="mt-1 text-2xl font-black text-slate-900">{kit.nome}</h3></div><div className="flex size-12 items-center justify-center rounded-2xl bg-violet-100 text-xs font-black text-violet-700">EVA</div></div>
    <div className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-semibold text-slate-500">Você recebe</p><p className="mt-1 text-lg font-black text-slate-900">{kit.nome.replace("Kit ", "")}</p><p className="mt-3 text-sm text-slate-400">De <span className="line-through">R$ {kit.antigo}</span></p><div className="mt-1 flex items-end gap-1 text-violet-700"><span className="text-sm font-bold">R$</span><span className="text-4xl font-black leading-none">{kit.preco}</span></div></div>
    <ul className="my-6 space-y-3 text-sm text-slate-600"><li>✓ Arquivos digitais</li><li>✓ Prontos para imprimir</li><li>✓ Pensados para trabalhos em EVA</li><li>✓ Ideal para professores</li></ul>
    <a href="#checkout" className="mt-auto inline-flex min-h-14 items-center justify-center rounded-2xl bg-violet-600 px-5 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-violet-700">Quero este kit</a>
  </motion.article>;
}

function Index() {
  return <>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Nunito:wght@700;800;900&display=swap" rel="stylesheet" />
    <div className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 py-2.5 text-center text-[0.68rem] font-extrabold uppercase tracking-wide text-violet-700 backdrop-blur sm:text-xs">📚 Moldes de EVA para professores • Acesso digital</div>
    <main className="overflow-x-hidden bg-[#fcfbff] font-[Inter,sans-serif] text-slate-900">
      <section className="relative overflow-hidden border-b border-violet-100 bg-gradient-to-b from-violet-50 via-white to-[#fcfbff] py-12 sm:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-violet-200/50 blur-3xl" /><div className="pointer-events-none absolute -left-32 bottom-0 size-72 rounded-full bg-fuchsia-100/70 blur-3xl" />
        <div className="container relative mx-auto max-w-6xl px-5"><div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left"><span className="inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-violet-700 shadow-sm">✂️ Coleção de moldes para EVA</span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">Crie uma sala de aula mais bonita <span className="text-violet-600">sem perder horas criando moldes</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">Kits de moldes digitais para professores que trabalham com EVA e querem preparar painéis, murais, decoração e atividades de forma prática.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">{["Para professores", "Moldes para EVA", "Prontos para imprimir"].map(x => <span key={x} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">✓ {x}</span>)}</div>
            <a href="#ofertas" className="mt-8 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-2xl bg-violet-600 px-7 text-base font-black uppercase tracking-wide text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 sm:w-auto">Ver os kits de moldes</a>
            <p className="mt-4 text-xs text-slate-400">Produto 100% digital • Pagamento seguro</p>
          </div>
          <div className="relative mx-auto w-full max-w-lg"><div className="overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-violet-100"><img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=85" alt="Professora em ambiente de sala de aula" className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[430px]" /><div className="relative mx-4 -mt-12 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg"><p className="text-sm font-black">Transforme ideias em peças de EVA</p><p className="mt-1 text-xs leading-relaxed text-slate-500">Imprima o molde, passe para o EVA e monte suas criações para a sala.</p></div></div></div>
        </div></div>
      </section>

      <section className="py-16 sm:py-20"><div className="container mx-auto max-w-6xl px-5"><SectionTitle eyebrow="Feito para sua rotina" title="Seu trabalho com EVA começa pelo molde certo" text="Tenha uma coleção digital para facilitar os momentos em que você precisa preparar uma sala bonita, uma atividade ou um painel especial." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{beneficios.map(([icon,title,text],i)=><motion.div key={title} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="flex size-11 items-center justify-center rounded-xl bg-violet-50 text-xl">{icon}</span><h3 className="mt-4 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p></motion.div>)}</div></div></section>

      <section className="border-y border-violet-100 bg-violet-50/60 py-16"><div className="container mx-auto max-w-6xl px-5"><div className="grid items-center gap-8 md:grid-cols-2"><div className="overflow-hidden rounded-3xl bg-white p-2 shadow-xl shadow-violet-100"><img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=85" alt="Ambiente educativo" className="h-72 w-full rounded-2xl object-cover md:h-80" /></div><div><span className="text-xs font-extrabold uppercase tracking-[0.18em] text-violet-600">Para quem vive a sala de aula</span><h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Mais criatividade para seus projetos</h2><p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">Use os moldes para criar personagens, letras, números e elementos decorativos em EVA.</p><div className="mt-6 space-y-3 text-sm font-bold text-slate-700"><p>✓ Murais e painéis temáticos</p><p>✓ Decoração para datas comemorativas</p><p>✓ Cantinhos educativos</p><p>✓ Atividades e projetos com os alunos</p></div></div></div></div></section>

      <section id="ofertas" className="scroll-mt-16 py-20"><div className="container mx-auto max-w-7xl px-5"><SectionTitle eyebrow="Escolha seu kit" title="Quantos moldes você quer ter?" text="Todos os kits são digitais e pensados para facilitar seu trabalho com EVA." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{kits.map(kit=><KitCard key={kit.nome} kit={kit}/>)}</div></div></section>

      <section className="bg-white py-20"><div className="container mx-auto max-w-6xl px-5"><SectionTitle eyebrow="Depoimentos" title="O que professores podem contar sobre os kits" text="Abaixo deixamos o espaço pronto para inserir avaliações reais de clientes após as primeiras vendas." /><div className="mt-10 grid gap-5 md:grid-cols-3">{depoimentos.map(([cargo,text])=><article key={cargo} className="rounded-3xl border border-slate-200 bg-[#fcfbff] p-6 shadow-sm"><div className="flex gap-1 text-amber-400">★★★★★</div><p className="mt-4 text-sm leading-relaxed text-slate-600">“{text}”</p><div className="mt-6 border-t border-slate-200 pt-4"><p className="font-black text-slate-900">{cargo}</p><p className="mt-1 text-xs text-slate-400">Depoimento real a inserir</p></div></article>)}</div></div></section>

      <section className="bg-slate-900 py-20 text-white"><div className="container mx-auto max-w-5xl px-5 text-center"><span className="text-xs font-extrabold uppercase tracking-[0.18em] text-violet-300">Seu próximo projeto começa aqui</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Tenha seus moldes de EVA sempre à mão</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">Escolha seu kit e tenha uma coleção digital para preparar suas próximas criações.</p><a href="#ofertas" className="mt-8 inline-flex min-h-14 rounded-2xl bg-violet-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-violet-900/30 transition hover:bg-violet-400">Escolher meu kit</a></div></section>

      <section id="checkout" className="py-16"><div className="container mx-auto max-w-3xl px-5"><SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" /><div className="mt-10 space-y-3">{duvidas.map(([pergunta,resposta])=><details key={pergunta} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none pr-6 text-sm font-black text-slate-900">{pergunta}<span className="float-right text-violet-600">＋</span></summary><p className="mt-3 text-sm leading-relaxed text-slate-500">{resposta}</p></details>)}</div></div></section>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-400"><p>© {new Date().getFullYear()} • Moldes de EVA para Professores</p><p className="mt-2">Produto digital. Nenhum item físico será enviado.</p></footer>
    </main>
  </>;
}
