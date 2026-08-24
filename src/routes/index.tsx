import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kits de Moldes Digitais — 10, 20, 30 e 50 Moldes" },
      {
        name: "description",
        content:
          "Escolha seu kit de moldes digitais prontos para imprimir. Kits com 10, 20, 30 ou 50 moldes, acesso imediato e uso ilimitado.",
      },
      { property: "og:title", content: "Kits de Moldes Digitais" },
      {
        property: "og:description",
        content: "Quanto maior o kit, maior a economia. Escolha seu pacote e receba os moldes imediatamente.",
      },
    ],
  }),
});

const kits = [
  {
    nome: "Kit 10 Moldes",
    quantidade: "10 moldes digitais",
    preco: "14,67",
    antigo: "29,90",
    destaque: false,
    economia: "Pacote de entrada",
  },
  {
    nome: "Kit 20 Moldes",
    quantidade: "20 moldes digitais",
    preco: "24,67",
    antigo: "59,90",
    destaque: true,
    economia: "Mais escolhido",
  },
  {
    nome: "Kit 30 Moldes",
    quantidade: "30 moldes digitais",
    preco: "34,67",
    antigo: "89,90",
    destaque: false,
    economia: "Mais variedade",
  },
  {
    nome: "Kit 50 Moldes",
    quantidade: "50 moldes digitais",
    preco: "49,67",
    antigo: "149,90",
    destaque: false,
    economia: "Melhor economia",
  },
];

const beneficios = [
  ["📥", "Acesso imediato", "Receba seu material assim que a compra for confirmada."],
  ["🖨️", "Prontos para imprimir", "Arquivos digitais para você salvar, imprimir e organizar."],
  ["♾️", "Use quantas vezes quiser", "O material digital fica com você para reutilizar quando precisar."],
  ["📱", "Funciona no celular e computador", "Baixe e acesse seus moldes no dispositivo que preferir."],
  ["💰", "Muito mais por menos", "Os kits maiores aumentam sua variedade sem pagar por cada molde separadamente."],
  ["🔒", "Compra segura", "Pagamento processado em ambiente seguro e entrega digital."],
];

const duvidas = [
  ["O que vou receber?", "Você recebe arquivos digitais com os moldes do kit escolhido. O produto é 100% digital; nenhum item físico será enviado."],
  ["Como recebo os moldes?", "Após a confirmação do pagamento, o acesso é liberado conforme a entrega configurada no checkout."],
  ["Posso imprimir os moldes?", "Sim. A proposta dos kits é facilitar o uso digital e a impressão dos moldes para seus projetos."],
  ["Qual kit devo escolher?", "Se você quer testar, comece pelo Kit 10. Para ter uma coleção mais completa, o Kit 20 é o destaque. Para máxima variedade, escolha 30 ou 50 moldes."],
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{text}</p>}
    </div>
  );
}

function KitCard({ kit }: { kit: (typeof kits)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -7 }}
      className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all ${
        kit.destaque
          ? "border-primary bg-primary/10 shadow-glow-primary"
          : "border-border bg-card"
      }`}
    >
      {kit.destaque && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-wider text-primary-foreground shadow-lg">
          ★ Mais escolhido
        </div>
      )}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{kit.economia}</span>
          <h3 className="mt-1 text-2xl font-black">{kit.nome}</h3>
        </div>
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-xl font-black text-primary">
          {kit.nome.split(" ")[1].replace("Moldes", "")}
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-background/60 p-5">
        <p className="text-sm font-bold text-muted-foreground">Você recebe</p>
        <p className="mt-1 text-xl font-black">{kit.quantidade}</p>
        <p className="mt-3 text-sm text-muted-foreground">De <span className="line-through">R$ {kit.antigo}</span></p>
        <div className="mt-1 flex items-end gap-1">
          <span className="text-sm font-bold">R$</span>
          <span className="text-4xl font-black leading-none text-gradient-gold">{kit.preco}</span>
        </div>
      </div>
      <ul className="my-6 space-y-3 text-sm">
        <li className="flex gap-2"><span className="text-success">✓</span> Acesso digital imediato</li>
        <li className="flex gap-2"><span className="text-success">✓</span> Arquivos prontos para salvar</li>
        <li className="flex gap-2"><span className="text-success">✓</span> Ótimo para imprimir e organizar</li>
      </ul>
      <a
        href="#checkout"
        className="mt-auto inline-flex min-h-14 items-center justify-center rounded-2xl bg-gradient-gold px-5 text-center text-sm font-black uppercase tracking-wide text-primary-foreground shadow-glow-primary transition-transform hover:scale-[1.02]"
      >
        Quero este kit
      </a>
    </motion.article>
  );
}

function Index() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />

      <div className="sticky top-0 z-50 overflow-hidden bg-gradient-urgency py-2.5 text-center text-[0.68rem] font-black uppercase tracking-wider text-white shadow-lg sm:text-xs">
        <div className="flex justify-center gap-8 whitespace-nowrap px-4">
          <span>🔥 Kits digitais em oferta</span>
          <span>•</span>
          <span>📥 Acesso imediato</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">🔒 Compra segura</span>
        </div>
      </div>

      <main className="overflow-x-hidden">
        <section className="relative bg-gradient-hero pb-20 pt-12 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.85_0.18_88_/_0.18),transparent_58%)]" />
          <div className="container relative mx-auto max-w-6xl px-5">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="text-center lg:text-left">
                <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.18em] text-primary">
                  Coleção digital de moldes
                </motion.span>
                <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 text-4xl font-black leading-[1.04] sm:text-5xl md:text-6xl">
                  Tenha uma coleção de <span className="text-gradient-gold">moldes digitais</span> pronta para usar
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                  Escolha seu kit, receba os arquivos digitais e tenha vários moldes organizados para imprimir, guardar e utilizar nos seus projetos.
                </motion.p>
                <div className="mt-7 flex flex-wrap justify-center gap-3 text-left lg:justify-start">
                  {["Acesso imediato", "Arquivos digitais", "Use quantas vezes quiser"].map((item) => (
                    <span key={item} className="rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-bold text-foreground/90">✓ {item}</span>
                  ))}
                </div>
                <a href="#ofertas" className="mt-8 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-2xl bg-gradient-gold px-7 text-base font-black uppercase tracking-wide text-primary-foreground shadow-glow-primary animate-pulse-glow sm:w-auto sm:text-lg">
                  Ver kits e escolher o meu
                </a>
                <p className="mt-4 text-xs text-muted-foreground">Pagamento seguro • Produto 100% digital</p>
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-lg">
                <div className="absolute -inset-8 rounded-[3rem] bg-primary/10 blur-3xl" />
                <div className="relative rounded-[2rem] border border-primary/20 bg-card/90 p-5 shadow-glow-primary backdrop-blur">
                  <div className="mb-4 flex items-center justify-between rounded-xl border border-border bg-background/70 px-4 py-3">
                    <span className="text-xs font-black uppercase tracking-wider text-muted-foreground">Sua coleção</span>
                    <span className="rounded-full bg-success/15 px-3 py-1 text-[0.65rem] font-black uppercase text-success">Digital</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[10, 20, 30, 50].map((n, i) => (
                      <motion.div key={n} animate={{ y: [0, i % 2 ? -5 : 4, 0] }} transition={{ duration: 3 + i * 0.3, repeat: Infinity }} className={`aspect-[0.82] rounded-2xl border p-4 ${n === 20 ? "border-primary bg-primary/15" : "border-border bg-background/70"}`}>
                        <div className="flex h-full flex-col justify-between">
                          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-sm font-black text-primary">PDF</div>
                          <div><p className="text-2xl font-black">{n}</p><p className="text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground">moldes</p></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-center">
                    <p className="text-sm font-black">Escolha o tamanho do seu kit</p>
                    <p className="mt-1 text-xs text-muted-foreground">Mais moldes = mais variedade e melhor custo por molde.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card/30 py-16">
          <div className="container mx-auto max-w-6xl px-5">
            <SectionTitle eyebrow="Por que comprar em kit?" title="Uma coleção que cabe no seu bolso" text="Em vez de comprar um molde por vez, você escolhe uma quantidade e leva uma coleção completa para ampliar suas opções." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {beneficios.map(([icon, title, text], i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-border bg-card p-6">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="mt-4 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="ofertas" className="scroll-mt-16 py-20">
          <div className="container mx-auto max-w-7xl px-5">
            <SectionTitle eyebrow="Escolha seu kit" title="Quanto mais moldes, maior sua coleção" text="Comece com o kit que faz sentido para você. Todos os pacotes são digitais e entregues conforme a confirmação do pagamento." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {kits.map((kit) => <KitCard key={kit.nome} kit={kit} />)}
            </div>
            <div id="checkout" className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card p-5 text-center">
              <p className="text-sm font-bold">🔒 Checkout seguro</p>
              <p className="mt-1 text-xs text-muted-foreground">Os botões estão preparados para receber o link de checkout de cada kit.</p>
            </div>
          </div>
        </section>

        <section className="bg-card/30 py-20">
          <div className="container mx-auto max-w-5xl px-5">
            <SectionTitle eyebrow="Compare" title="Veja o que muda de um kit para outro" />
            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
              <div className="grid grid-cols-5 border-b border-border bg-background/70 p-4 text-xs font-black uppercase tracking-wider text-muted-foreground">
                <span>Kit</span><span className="text-center">Moldes</span><span className="text-center">Preço</span><span className="text-center">Variedade</span><span className="text-center">Indicado</span>
              </div>
              {kits.map((kit) => (
                <div key={kit.nome} className="grid grid-cols-5 items-center border-b border-border p-4 text-xs last:border-0 sm:text-sm">
                  <strong>{kit.nome}</strong><span className="text-center font-bold">{kit.quantidade.split(" ")[0]}</span><span className="text-center font-black text-primary">R$ {kit.preco}</span><span className="text-center">{kit.economia}</span><span className="text-center text-muted-foreground">{kit.destaque ? "⭐ Preferido" : "Para ampliar"}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto max-w-3xl px-5">
            <SectionTitle eyebrow="Ainda está em dúvida?" title="Perguntas frequentes" />
            <div className="mt-10 space-y-3">
              {duvidas.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-border bg-card p-5">
                  <summary className="cursor-pointer list-none pr-8 text-base font-black marker:hidden">{q}<span className="float-right text-primary transition-transform group-open:rotate-45">＋</span></summary>
                  <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-primary/10 bg-gradient-hero py-20">
          <div className="container mx-auto max-w-3xl px-5 text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Sua coleção começa aqui</span>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">Escolha seu kit de moldes digitais</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">Tenha mais variedade, organização e praticidade sem precisar comprar cada molde separadamente.</p>
            <a href="#ofertas" className="mt-8 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-2xl bg-gradient-gold px-7 text-base font-black uppercase text-primary-foreground shadow-glow-primary animate-pulse-glow sm:text-lg">Quero escolher meu kit</a>
            <p className="mt-4 text-xs text-muted-foreground">Produto digital • Acesso após confirmação • Compra segura</p>
          </div>
        </section>

        <footer className="border-t border-border bg-background py-8 text-center text-xs text-muted-foreground">
          <p>© 2026 • Kits de Moldes Digitais</p>
          <p className="mt-2">Produto digital. Nenhum item físico será enviado.</p>
        </footer>
      </main>
    </>
  );
}
