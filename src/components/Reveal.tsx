"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      /* Trigger a little before the element enters the viewport so it has
         settled by the time it is in view. This keeps scrolling continuous
         and avoids any pop that reads like the page jumping to a section. */
      viewport={{ once: true, amount: 0.15, margin: "0px 0px 120px 0px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
