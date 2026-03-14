import { motion } from "framer-motion";

export default function RuleDetailCard({ number, text }) {
  return (
    <motion.div
      className="glow-box rounded-2xl p-4"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <p className="leading-7 text-green-50/90">
        <span className="mr-2 font-bold text-cyan-300">{number}.</span>
        {text}
      </p>
    </motion.div>
  );
}