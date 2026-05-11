import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    q: "Vou receber um pen drive físico em casa?",
    a: "ATENÇÃO: o produto é 100% DIGITAL. O link de acesso vai direto pro seu e-mail assim que o pagamento aprova. Sem frete, sem espera — você baixa no celular ou copia pra qualquer pen drive que já tenha em casa.",
  },
  {
    q: "Precisa de internet pra ouvir?",
    a: "Não! Você só usa internet na primeira vez, pra baixar. Depois pode ouvir 100% offline no carro, na roça ou na estrada, sem gastar dados.",
  },
  {
    q: "Como eu coloco no meu pen drive? É difícil?",
    a: "É super fácil — copiar e colar. Mandamos um vídeo rápido com o passo a passo, e nossa equipe no WhatsApp tira qualquer dúvida na hora.",
  },
  {
    q: "É assinatura mensal?",
    a: "Não! Pagamento ÚNICO de R$ 10,00. Sem mensalidade, sem taxa extra. O acesso é seu pra sempre (vitalício).",
  },
  {
    q: "As músicas têm vinheta de DJ chata?",
    a: "Não! Esqueça propaganda, berrante ou voz de DJ no meio do som. Você ouve só viola e sanfona, na qualidade original do estúdio.",
  },
  {
    q: "O pagamento com cartão ou Pix é seguro?",
    a: "100% seguro. Usamos uma das maiores plataformas de pagamento do Brasil. Seus dados são totalmente criptografados e nós não temos acesso a eles.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const active = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur"
          >
            <button
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-foreground transition-colors hover:bg-white/5 sm:text-base"
            >
              <span>{it.q}</span>
              <motion.span
                animate={{ rotate: active ? 45 : 0 }}
                className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {it.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
