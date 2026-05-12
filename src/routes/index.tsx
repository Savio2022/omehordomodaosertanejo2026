import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-modao.png";
import bonusImg from "@/assets/bonus-videos.jpg";
import { UrgencyBar } from "@/components/landing/UrgencyBar";
import { CTAButton } from "@/components/landing/CTAButton";
import { Reveal } from "@/components/landing/Reveal";
import { PurchasePopup } from "@/components/landing/PurchasePopup";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { FAQ } from "@/components/landing/FAQ";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Coleção Modão Sertanejo Raiz — +5.000 Músicas Clássicas" },
      {
        name: "description",
        content:
          "Acesso vitalício a +5.000 modões sertanejos raiz em alta qualidade. Bônus: +100 videoclipes. Pague R$ 10 uma única vez.",
      },
      { property: "og:title", content: "Coleção Modão Sertanejo Raiz" },
      {
        property: "og:description",
        content: "Os clássicos que marcaram gerações por R$ 10 — acesso vitalício.",
      },
    ],
  }),
});

const categorias = [
  { t: "Modão Antigo", g: "from-amber-700/60 to-amber-950/90" },
  { t: "Sertanejo Clássico", g: "from-orange-700/60 to-stone-950/90" },
  { t: "Sertanejo Raiz", g: "from-yellow-800/60 to-zinc-950/90" },
  { t: "Modão Apaixonado", g: "from-rose-900/60 to-stone-950/90" },
  { t: "Ícones do Sertão", g: "from-amber-600/60 to-neutral-950/90" },
];

const artistas = [
  {
    titulo: "🎶 Lendas do Raiz",
    nomes: [
      "Tonico & Tinoco",
      "Tião Carreiro & Pardinho",
      "Milionário & José Rico",
      "Liu & Léu",
      "Zé Carreiro & Carreirinho",
      "Pardinho",
    ],
  },
  {
    titulo: "🎸 Clássicos",
    nomes: [
      "Chitãozinho & Xororó",
      "Zezé Di Camargo & Luciano",
      "Leandro & Leonardo",
      "João Mineiro & Marciano",
      "Chrystian & Ralf",
      "Bruno & Marrone",
    ],
  },
  {
    titulo: "🎤 Vozes Marcantes",
    nomes: [
      "Sérgio Reis",
      "Almir Sater",
      "Renato Teixeira",
      "Trio Parada Dura",
      "Duduca & Dalvan",
      "Belmonte & Amaraí",
    ],
  },
  {
    titulo: "🎶 Outros Nomes",
    nomes: [
      "Cascatinha & Inhana",
      "Irmãs Galvão",
      "Pedro Bento & Zé da Estrada",
      "Teixeirinha",
      "Gino & Geno",
      "Cezar & Paulinho",
    ],
  },
];

const comentarios = [
  {
    nome: "Antônio Batista",
    txt: "Moro no sítio e todo fim de tarde coloco a caixinha pra tocar esses modões. A qualidade é limpinha, parece que o Tião Carreiro tá cantando aqui na varanda. Bão demais! 👏",
    t: "3h",
  },
  {
    nome: "João Paulo Silveira",
    txt: "Comprei pro churrasco de domingo com a família e a turma toda cantou junto. O bônus dos clipes na TV foi o sucesso da festa 🤩",
    t: "1d",
  },
  {
    nome: "Sérgio Ferreira",
    txt: "Sou caminhoneiro e levo no pendrive cruzando esse Brasilzão. Som limpo no rádio do caminhão, me faz companhia. Não tem preço! 🎧",
    t: "4h",
  },
  {
    nome: "Sebastião Alves",
    txt: "Achei que era mentira por dez reais. Mas chegou certinho no e-mail na hora. Empresa séria, pode confiar. 🎶",
    t: "12h",
  },
];

function Index() {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Montserrat:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <UrgencyBar />

      <main className="relative overflow-x-hidden">
        {/* HERO */}
        <section className="relative bg-gradient-hero pb-16 pt-12 sm:pt-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.85_0.18_88_/_0.15),transparent_60%)]" />
          <div className="container relative mx-auto max-w-5xl px-5 text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-primary shadow-glow-primary sm:text-xs"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              Acesso Imediato Vitalício
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-[1.1] sm:text-5xl md:text-6xl"
            >
              <span className="block text-base font-semibold tracking-[0.18em] text-muted-foreground sm:text-lg">
                +5 MIL MÚSICAS DO
              </span>
              <span className="mt-2 block text-gradient-gold drop-shadow-[0_0_30px_oklch(0.85_0.18_88/0.4)]">
                Modão Sertanejo Raiz
              </span>
              <span className="mt-3 block text-sm font-medium text-muted-foreground sm:text-base">
                — os clássicos que marcaram gerações —
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative mx-auto my-8 w-full max-w-xl"
            >
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-secondary/20 blur-3xl" />
              <img
                src={heroImg}
                alt="Coleção Modão Sertanejo Raiz"
                width={1280}
                height={1280}
                className="animate-float-slow block h-auto w-full"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Viaje no tempo com os maiores clássicos caipiras em alta definição (320kbps).
              Sem anúncios, sem chiados. Só a pura nostalgia do sertão pra tocar no rádio
              do carro, na roça ou no churrasco de domingo.
            </motion.p>

            <CTAButton>BAIXAR AGORA — APENAS R$ 10,00</CTAButton>

            <p className="mx-auto mt-5 max-w-md text-xs text-muted-foreground sm:text-sm">
              ⭐ Recomendado por +15.200 clientes · Satisfação 100%
            </p>
          </div>
        </section>

        {/* CATEGORIAS */}
        <section className="relative py-20">
          <div className="container mx-auto max-w-6xl px-5 text-center">
            <Reveal>
              <h2 className="text-3xl font-black italic sm:text-4xl md:text-5xl">
                Uma viagem nostálgica
                <span className="block text-secondary">às raízes</span>
              </h2>
              <div className="mx-auto my-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
              <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
                Biblioteca organizada com carinho pra você encontrar o clima perfeito em
                segundos.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {categorias.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.03 }}
                    className={`group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${c.g}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.15),transparent_70%)] opacity-60 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center p-3">
                      <h3 className="text-center text-base font-black tracking-wide text-white drop-shadow-lg sm:text-lg">
                        {c.t}
                      </h3>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ARTISTAS */}
        <section className="border-y border-primary/5 bg-card/30 py-20">
          <div className="container mx-auto max-w-6xl px-5">
            <Reveal>
              <h2 className="text-center text-3xl font-black sm:text-4xl">
                Os maiores nomes do sertanejo raiz
                <span className="block text-gradient-gold">em um só lugar</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
                Uma seleção com os artistas que marcaram gerações e fizeram história no
                Brasil.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {artistas.map((cat, i) => (
                <Reveal key={cat.titulo} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-glow-primary"
                  >
                    <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
                    <h3 className="mb-4 border-b border-border pb-3 text-lg font-bold text-primary">
                      {cat.titulo}
                    </h3>
                    <ul className="space-y-2.5">
                      {cat.nomes.map((n) => (
                        <li
                          key={n}
                          className="flex items-center gap-2 text-sm font-semibold text-foreground/85"
                        >
                          <span className="text-secondary">✓</span>
                          {n}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BÔNUS */}
        <section className="py-20">
          <div className="container mx-auto max-w-3xl px-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-secondary bg-secondary/5 p-8 text-center sm:p-12">
                <div className="pointer-events-none absolute -top-20 left-1/2 size-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
                <span className="relative inline-block rounded-full bg-secondary px-5 py-2 text-xs font-black uppercase text-secondary-foreground">
                  ★ Presente Exclusivo
                </span>
                <h2 className="relative mt-6 text-2xl font-black leading-tight sm:text-4xl">
                  +100 Videoclipes
                  <span className="block text-secondary">Sertanejo Raiz</span>
                </h2>
                <div className="relative mx-auto my-6 max-w-md overflow-hidden rounded-2xl border border-secondary/30 shadow-glow-secondary">
                  <img
                    src={bonusImg}
                    alt="Bônus videoclipes sertanejo raiz"
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
                <p className="relative mx-auto max-w-md text-sm text-muted-foreground sm:text-base">
                  Compre hoje e leve uma coletânea épica de clipes originais e históricos
                  pra passar na sua TV e relembrar a época de ouro da música caipira.
                </p>
                <ul className="relative mx-auto mt-6 max-w-sm space-y-2 text-left text-sm sm:text-base">
                  {[
                    "🎬 Vídeos em alta qualidade (MP4)",
                    "🌍 Sucessos de Tonico & Tinoco, Tião Carreiro e mais",
                    "⚡ Download imediato junto com as músicas",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="relative mt-6 text-sm text-muted-foreground">
                  Valor normal: <span className="line-through">R$ 47,00</span>
                  <strong className="ml-2 block text-lg text-success sm:inline">
                    Hoje: INCLUSO DE GRAÇA
                  </strong>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="bg-card/30 py-20">
          <div className="container mx-auto max-w-2xl px-5">
            <Reveal>
              <h2 className="mb-8 text-center text-2xl font-black sm:text-3xl">
                Feedback dos compradores
              </h2>
              <div className="overflow-hidden rounded-2xl bg-white p-5 text-zinc-900 shadow-2xl">
                <div className="mb-4 border-b border-zinc-200 pb-3 text-sm font-bold">
                  💬 +12 mil avaliações
                </div>
                <div className="space-y-5">
                  {comentarios.map((c) => (
                    <div key={c.nome} className="flex gap-3">
                      <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 font-bold text-white">
                        {c.nome[0]}
                      </div>
                      <div className="flex-1">
                        <div className="rounded-2xl bg-zinc-100 px-4 py-2.5">
                          <div className="text-sm font-bold text-blue-700">{c.nome}</div>
                          <p className="mt-1 text-sm leading-relaxed text-zinc-800">
                            {c.txt}
                          </p>
                        </div>
                        <div className="ml-3 mt-1 text-xs text-zinc-500">
                          Curtir · Responder · {c.t}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" className="bg-black py-20">
          <div className="container mx-auto max-w-xl px-5 text-center">
            <Reveal>
              <div className="relative rounded-3xl border-2 border-primary bg-gradient-to-b from-card to-background p-8 shadow-glow-primary sm:p-10">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-1.5 text-xs font-black uppercase text-primary-foreground">
                  ⚡ Oferta exclusiva
                </span>
                <h2 className="mt-3 text-xl font-black sm:text-2xl">
                  Coleção Modão Sertanejo + Bônus
                </h2>
                <p className="mt-4 text-base text-muted-foreground line-through sm:text-lg">
                  De R$ 47,00 por apenas
                </p>
                <div className="my-2 text-6xl font-black leading-none text-gradient-gold sm:text-7xl">
                  R$ 10
                </div>
                <p className="mb-6 text-sm font-bold text-success">
                  Pagamento único · Acesso imediato
                </p>
                <ul className="mx-auto mb-8 max-w-sm space-y-3 text-left text-sm sm:text-base">
                  {[
                    "Acesso vitalício a +5.000 modões raiz",
                    "Qualidade máxima de estúdio (320kbps)",
                    "BÔNUS: +100 videoclipes em MP4",
                    "Sem anúncios, sem locutores chatos",
                    "Baixe e ouça offline em qualquer lugar",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success text-[0.7rem] font-black text-white">
                        ✓
                      </span>
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton>QUERO BAIXAR AGORA!</CTAButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="py-20">
          <div className="container mx-auto max-w-3xl px-5">
            <Reveal>
              <div className="relative rounded-3xl border-2 border-primary bg-card p-8 pt-16 text-center shadow-glow-primary sm:p-10 sm:pt-16">
                <div className="absolute -top-10 left-1/2 grid size-20 -translate-x-1/2 place-items-center rounded-full border-4 border-background bg-primary shadow-glow-primary">
                  <svg viewBox="0 0 24 24" className="size-10 fill-primary-foreground">
                    <path d="M12 2 4 5v6c0 5 3.4 9.6 8 11 4.6-1.4 8-6 8-11V5l-8-3zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black sm:text-3xl">
                  Risco Zero
                  <span className="block text-primary">7 dias de garantia</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Você tem <strong className="text-foreground">7 dias inteiros</strong>{" "}
                  pra acessar a plataforma, baixar as músicas e os clipes, e testar tudo
                  no rádio do carro, na TV ou no radinho moderno.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Se não ficar impressionado, manda um e-mail e devolvemos{" "}
                  <strong className="text-foreground">100% do seu dinheiro</strong> na
                  hora. Sem perguntas e sem burocracia.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto max-w-3xl px-5">
            <Reveal>
              <h2 className="mb-10 text-center text-3xl font-black sm:text-4xl">
                Dúvidas frequentes
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <FAQ />
            </Reveal>
            <div className="mt-10 text-center">
              <CTAButton>SIM, QUERO GARANTIR MEU ACESSO!</CTAButton>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border bg-black/60 py-10 text-center">
          <div className="container mx-auto max-w-3xl px-5">
            <p className="text-sm font-bold text-foreground">
              Coleção Modão Sertanejo Raiz © 2026
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              As músicas e imagens são para fins de entretenimento e nostalgia. Ao
              adquirir você concorda com nossos termos.
            </p>
          </div>
        </footer>
      </main>

      <PurchasePopup />
      <WhatsAppFloat />
    </>
  );
}

