import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
      animate={{ x: pos.x - 200, y: pos.y - 200, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, mass: 0.5 }}
    >
      <div className="h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
    </motion.div>
  );
}
