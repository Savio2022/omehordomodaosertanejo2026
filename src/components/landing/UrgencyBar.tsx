export function UrgencyBar() {
  const items = [
    "OFERTA RELÂMPAGO — O PREÇO SOBE EM BREVE",
    "ACESSO IMEDIATO + BÔNUS EXCLUSIVO",
    "GARANTIA DE 7 DIAS — RISCO ZERO",
    "+15.200 CLIENTES SATISFEITOS",
  ];
  return (
    <div className="sticky top-0 z-50 overflow-hidden bg-gradient-urgency py-2.5 text-[0.72rem] font-extrabold tracking-wider text-white shadow-lg sm:text-sm">
      <div className="flex w-max animate-ticker gap-12 whitespace-nowrap px-6">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-white/80" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
