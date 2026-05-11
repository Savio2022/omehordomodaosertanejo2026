import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const buyers = [
  { name: "Fernanda", city: "Goiânia, GO" },
  { name: "Antônio", city: "Uberlândia, MG" },
  { name: "João Paulo", city: "Londrina, PR" },
  { name: "Sérgio", city: "Cuiabá, MT" },
  { name: "Sebastião", city: "Ribeirão Preto, SP" },
  { name: "Maria", city: "Campo Grande, MS" },
];

export function PurchasePopup() {
  const [idx, setIdx] = useState(-1);

  useEffect(() => {
    let i = 0;
    const tick = () => {
      setIdx(i % buyers.length);
      i++;
      setTimeout(() => setIdx(-1), 4500);
    };
    const t1 = setTimeout(tick, 3000);
    const interval = setInterval(tick, 9000);
    return () => {
      clearTimeout(t1);
      clearInterval(interval);
    };
  }, []);

  const b = idx >= 0 ? buyers[idx] : null;

  return (
    <AnimatePresence>
      {b && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
          className="fixed bottom-4 left-3 z-40 flex max-w-[calc(100%-90px)] items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-2xl sm:max-w-xs"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-success font-black text-white">
            {b.name[0]}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-foreground">{b.name}</div>
            <div className="truncate text-xs text-muted-foreground">
              Acabou de comprar — {b.city}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
