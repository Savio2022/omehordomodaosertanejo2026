import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function CTAButton({ children, href = "https://ggcheckout.app/checkout/v2/6azEuzKADlMH8dxe2wSH" }: { children: ReactNode; href?: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex w-full max-w-[460px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-gold px-6 py-5 text-base font-black uppercase tracking-wide text-primary-foreground shadow-glow-primary animate-pulse-glow sm:text-lg"
    >
      <span className="absolute inset-0 animate-shimmer" />
      <span className="relative z-10 leading-tight">{children}</span>
    </motion.a>
  );
}
