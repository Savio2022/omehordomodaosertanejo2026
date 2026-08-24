import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "Kits de Peças para EVA | Moldes para Professores" },
    { name: "description", content: "Kits digitais de moldes para EVA, pensados para professores criarem painéis, murais, decoração e atividades." },
  ]}),
});

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
  return <div className="mx-auto max-w-3xl text-center">
    <span className="text-xs font-black uppercase tracking-[0.18em] text-violet-600">{eyebrow}</span>
    <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">{title}</h2>
    {text && <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">{text}</p>}
  </div>;
}

function KitCard({ kit }: { kit: (typeof kits)[number] }) {
  return <motion.article whileHover={{ y: -5 }} className={`relative flex h-full flex-col rounded-3xl border p-5 sm:p-6 ${kit.destaque ? "border-violet-400 bg-violet-50 shadow-xl shadow-violet-100" : "border-slate-200 bg-white shadow-sm"}`}>
    {kit.destaque && <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-violet-600 px-4 py-1.5 text-[0.65rem] font-black uppercase text-white shadow-md">★ Mais escolhido</div>}
    <div className="mb-5 flex items-start justify-between gap-3">
      <div><span className="text-xs font-bold uppercase tracking-wide text-slate-400">{kit.texto}</span><h3 className="mt-1 text-2xl font-black text-slate-900">{kit.nome}</h3></div>
      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-xs font-black text-violet-700">EVA</div>
    </div>
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
      <img src={`https://placehold.co/800x480/f5f3ff/6d28d9?text=${kit.qtd}+MOLDES+PARA+EVA`} alt={`${kit.qtd} moldes para EVA`} className="h-32 w-full object-cover" />
      <div className="p-5">
        <p className="text-sm font-semibold text-slate-500">Você recebe</p>
        <p className="mt-1 text-2xl font-black text-slate-900">{kit.qtd} Moldes</p>
        <p className="mt-3 text-sm text-slate-400">De <span className="line-through">R$ {kit.antigo}</span></p>
        <div className="mt-1 flex items-end gap-1 text-violet-700"><span className="text-sm font-bold">R$</span><span className="text-4xl font-black leading-none">{kit.preco}</span></div>
      </div>
    </div>
    <ul className="my-5 space-y-3 text-sm text-slate-600"><li>✓ Arquivos digitais</li><li>✓ Prontos para imprimir</li><li>✓ Para trabalhos em EVA</li><li>✓ Ideal para professores</li></ul>
    <a href="#checkout" className="mt-auto inline-flex min-h-14 items-center justify-center rounded-2xl bg-violet-600 px-5 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-violet-700">Quero este kit</a>
  </motion.article>;
}

function Index() {
  return <>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Nunito:wght@700;800;900&display=swap" rel="stylesheet" />
    <div className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 py-2.5 text-center text-[0.68rem] font-extrabold uppercase tracking-wide text-violet-700 backdrop-blur sm:text-xs">📚 PEÇAS PARA EVA • FEITAS PARA PROFESSORES</div>
    <main className="overflow-x-hidden bg-[#fcfbff] font-[Inter,sans-serif] text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-violet-100 bg-gradient-to-b from-violet-50 via-white to-[#fcfbff] py-10 sm:py-16">
        <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-violet-200/50 blur-3xl" /><div className="pointer-events-none absolute -left-32 bottom-0 size-72 rounded-full bg-fuchsia-100/70 blur-3xl" />
        <div className="container relative mx-auto max-w-6xl px-5"><div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-violet-700 shadow-sm">✂️ Moldes digitais para EVA</span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">Transforme EVA em <span className="text-violet-600">painéis incríveis</span> para sua sala de aula</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">Tenha moldes prontos para criar personagens, letras, números, enfeites e atividades — <strong>sem precisar desenhar tudo do zero.</strong></p>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">{["Para professores", "Feitos para EVA", "Prontos para imprimir"].map(x => <span key={x} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">✓ {x}</span>)}</div>
            <a href="#ofertas" className="mt-7 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-2xl bg-violet-600 px-7 text-base font-black uppercase tracking-wide text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 sm:w-auto">Ver os kits de peças</a>
            <p className="mt-3 text-xs text-slate-400">Produto 100% digital • Acesso após a compra • Pagamento seguro</p>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-violet-100">
              <div className="grid grid-cols-2 gap-2 rounded-[1.5rem] bg-violet-50 p-3">
                {['PERSONAGENS','LETRAS','NÚMEROS','DECORAÇÃO'].map((t,i)=><div key={t} className="flex h-32 items-center justify-center rounded-2xl bg-white text-center shadow-sm sm:h-40"><div><div className="text-4xl">{['🐻','🔤','🔢','🌈'][i]}</div><p className="mt-2 text-[0.65rem] font-black text-violet-700">{t}</p></div></div>)}
              </div>
              <div className="relative mx-4 -mt-7 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg"><p className="text-sm font-black">Do molde para o EVA ✂️</p><p className="mt-1 text-xs leading-relaxed text-slate-500">Imprima, transfira para o EVA e crie suas peças para a sala.</p></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* PROVA VISUAL */}
      <section className="py-14 sm:py-18"><div className="container mx-auto max-w-6xl px-5"><SectionTitle eyebrow="Veja a ideia" title="Do molde à peça pronta" text="A proposta é simples: você recebe o desenho, imprime e usa como base para produzir suas criações em EVA." /><div className="mt-10 grid gap-4 md:grid-cols-3">
        {[['01','🖨️','Imprima','Escolha o molde e imprima no tamanho que precisar.'],['02','✂️','Passe para o EVA','Use o molde como referência para contornar e recortar.'],['03','🎨','Crie sua peça','Monte, decore e use na sua sala de aula.']].map(([num,icon,title,text])=><div key={num} className="relative rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"><span className="absolute right-4 top-4 text-xs font-black text-violet-200">{num}</span><div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-violet-50 text-3xl">{icon}</div><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p></div>)}
      </div></div></section>

      {/* BENEFÍCIOS */}
      <section className="border-y border-violet-100 bg-violet-50/60 py-16"><div className="container mx-auto max-w-6xl px-5"><SectionTitle eyebrow="Pensado para sua rotina" title="Mais tempo para ensinar. Menos tempo desenhando." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{beneficios.map(([icon,title,text],i)=><motion.div key={title} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="rounded-2xl border border-white bg-white p-6 shadow-sm"><span className="flex size-11 items-center justify-center rounded-xl bg-violet-50 text-xl">{icon}</span><h3 className="mt-4 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p></motion.div>)}</div></div></section>

      {/* O QUE PODE CRIAR */}
      <section className="py-16 sm:py-20"><div className="container mx-auto max-w-6xl px-5"><SectionTitle eyebrow="Inspire-se" title="Veja o que você pode criar" text="Use os moldes como base para diferentes momentos da rotina escolar." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{criacoes.map(([icon,title,text])=><motion.div key={title} whileHover={{scale:1.01}} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-violet-200 hover:shadow-md"><div className="flex size-14 items-center justify-center rounded-2xl bg-violet-50 text-3xl">{icon}</div><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p></motion.div>)}</div></div></section>

      {/* IDENTIFICAÇÃO */}
      <section className="bg-slate-900 py-16 text-white"><div className="container mx-auto max-w-6xl px-5"><div className="grid items-center gap-10 md:grid-cols-2"><div><span className="text-xs font-extrabold uppercase tracking-[0.18em] text-violet-300">Para quem vive a sala de aula</span><h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Feito para quem quer uma sala bonita sem complicar a rotina</h2><p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">Sabemos que preparar atividades, painéis e decoração exige tempo. Os moldes ajudam você a começar pelo que já está pronto e colocar sua criatividade no acabamento.</p><div className="mt-7 space-y-3 text-sm font-bold text-white"><p>✓ Prepare painéis e murais com mais rapidez</p><p>✓ Tenha ideias prontas para diferentes projetos</p><p>✓ Crie materiais visuais para seus alunos</p><p>✓ Monte sua própria biblioteca digital de moldes</p></div></div><div className="rounded-3xl bg-white/10 p-3"><div className="grid grid-cols-2 gap-3">{['🐻 Personagens','🔤 Letras','🎨 Painéis','🌈 Decoração'].map(t=><div key={t} className="flex h-32 items-center justify-center rounded-2xl bg-white text-center text-sm font-black text-slate-900 sm:h-40">{t}</div>)}</div></div></div></div></section>

      {/* OFERTAS */}
      <section id="ofertas" className="scroll-mt-16 py-20"><div className="container mx-auto max-w-7xl px-5"><SectionTitle eyebrow="Escolha seu kit" title="Comece com quantas peças quiser" text="Todos os kits são digitais. Quanto maior o kit, maior a variedade de moldes para seus projetos." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{kits.map(kit=><KitCard key={kit.nome} kit={kit}/>)}</div><p className="mt-6 text-center text-xs text-slate-400">🔒 Compra segura • 📱 Produto digital • 🖨️ Pronto para imprimir</p></div></section>

      {/* ORDER BUMP / UPSELL */}
      <section className="pb-20"><div className="container mx-auto max-w-4xl px-5"><div className="rounded-3xl border-2 border-dashed border-violet-200 bg-violet-50 p-6 text-center sm:p-8"><span className="inline-flex rounded-full bg-violet-600 px-4 py-1.5 text-xs font-black uppercase text-white">🎁 Oferta complementar</span><h2 className="mt-4 text-2xl font-black sm:text-3xl">Quer turbinar sua coleção?</h2><p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">Você pode oferecer aqui um complemento de baixo custo, como um pacote especial de moldes para datas comemorativas. <strong>Valor sugerido: R$ 5,99.</strong></p><div className="mx-auto mt-5 max-w-xl rounded-2xl bg-white p-4 text-left shadow-sm"><p className="font-black">🎉 Pacote Especial de Datas Comemorativas</p><p className="mt-1 text-xs text-slate-500">Sugestão de order bump para aumentar o valor médio do pedido.</p></div></div></div></section>

      {/* DEPOIMENTOS */}
      <section className="bg-white py-20"><div className="container mx-auto max-w-6xl px-5"><SectionTitle eyebrow="Depoimentos" title="Quem usa, recomenda" text="Espaço pronto para colocar avaliações reais e fotos das peças feitas pelas clientes." /><div className="mt-10 grid gap-5 md:grid-cols-3">{depoimentos.map(([cargo,text])=><article key={cargo} className="rounded-3xl border border-slate-200 bg-[#fcfbff] p-6 shadow-sm"><div className="flex gap-1 text-amber-400">★★★★★</div><p className="mt-4 text-sm leading-relaxed text-slate-600">“{text}”</p><div className="mt-6 border-t border-slate-200 pt-4"><p className="font-black text-slate-900">{cargo}</p><p className="mt-1 text-xs text-slate-400">Avaliação real a inserir</p></div></article>)}</div></div></section>

      {/* FAQ */}
      <section id="checkout" className="py-16"><div className="container mx-auto max-w-3xl px-5"><SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" /><div className="mt-10 space-y-3">{duvidas.map(([pergunta,resposta])=><details key={pergunta} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none pr-6 text-sm font-black text-slate-900">{pergunta}<span className="float-right text-violet-600">＋</span></summary><p className="mt-3 text-sm leading-relaxed text-slate-500">{resposta}</p></details>)}</div></div></section>

      <section className="border-t border-violet-100 bg-violet-50 py-16"><div className="container mx-auto max-w-4xl px-5 text-center"><span className="text-xs font-extrabold uppercase tracking-[0.18em] text-violet-600">Seu próximo projeto começa aqui</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Escolha seu kit e comece a criar</h2><p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">Tenha seus moldes de EVA organizados e prontos para os próximos projetos da sua sala.</p><a href="#ofertas" className="mt-7 inline-flex min-h-14 rounded-2xl bg-violet-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700">Ver os kits</a></div></section>

      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-400"><p>© {new Date().getFullYear()} • Kits de peças digitais para EVA</p><p className="mt-2">Produto digital • Nenhum material físico será enviado</p></footer>
    </main>
  </>;
}
