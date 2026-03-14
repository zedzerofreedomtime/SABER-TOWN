import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryCard({ title, path }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Link
        to={path}
        className="group block rounded-2xl border border-green-400/15 bg-[#08110d]/90 px-5 py-5 shadow-[0_0_0_1px_rgba(0,255,136,0.04)] transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(0,255,170,0.15)]"
      >
        <div className="rounded-xl bg-[linear-gradient(180deg,rgba(0,255,128,0.05),transparent)]">
          <p className="text-2xl font-extrabold tracking-wide text-white">
            {title}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}