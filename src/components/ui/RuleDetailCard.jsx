import { motion } from "framer-motion";

export default function RuleDetailCard({ number, text }) {
  return (
    <motion.div
      className="glow-box rounded-2xl p-4 sm:p-5 md:p-6"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="rule-badge mt-1 shrink-0">{number}</span>
        <p className="text-sm leading-8 text-green-50/90 sm:text-base md:text-[1.02rem] md:leading-9">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
