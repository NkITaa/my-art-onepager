import { motion } from "framer-motion";

export default function Reveal({ children }: { children: JSX.Element }) {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={{
          hidden: {
            opacity: 0,
            x: 50,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
