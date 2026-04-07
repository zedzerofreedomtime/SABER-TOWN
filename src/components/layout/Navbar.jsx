import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `rounded-xl px-4 py-2 font-semibold transition ${
      isActive
        ? "bg-green-400 text-black shadow-[0_0_16px_rgba(0,255,128,0.25)]"
        : "bg-white/5 text-white hover:bg-green-400/10"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 font-semibold transition ${
      isActive
        ? "bg-green-400 text-black"
        : "bg-white/5 text-white hover:bg-green-400/10"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-green-400/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-6">
        <div className="min-w-0">
          <h1 className="truncate text-base font-black tracking-[0.18em] text-green-300 sm:text-lg md:text-xl md:tracking-[0.2em]">
            SABER TOWN
          </h1>
          <p className="text-[10px] text-green-100/55 sm:text-xs">CYBER RULES ARCHIVE</p>
        </div>

        <nav className="hidden flex-wrap gap-2 lg:flex">
          <NavLink to="/" className={navClass}>หน้าแรก</NavLink>
          <NavLink to="/city" className={navClass}>เกี่ยวกับเมือง</NavLink>
          <NavLink to="/medical" className={navClass}>กฎแพทย์</NavLink>
          <NavLink to="/police" className={navClass}>กฎตำรวจ</NavLink>
          <NavLink to="/council" className={navClass}>กฎสภา</NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-xl border border-green-400/20 bg-white/5 px-3 py-2 text-sm font-semibold text-green-200 transition hover:bg-green-400/10 lg:hidden"
        >
          {menuOpen ? "ปิดเมนู" : "เมนู"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-green-400/10 px-4 pb-4 lg:hidden"
          >
            <div className="grid gap-2 pt-3">
              <NavLink to="/" className={mobileNavClass} onClick={() => setMenuOpen(false)}>หน้าแรก</NavLink>
              <NavLink to="/city" className={mobileNavClass} onClick={() => setMenuOpen(false)}>เกี่ยวกับเมือง</NavLink>
              <NavLink to="/medical" className={mobileNavClass} onClick={() => setMenuOpen(false)}>กฎแพทย์</NavLink>
              <NavLink to="/police" className={mobileNavClass} onClick={() => setMenuOpen(false)}>กฎตำรวจ</NavLink>
              <NavLink to="/council" className={mobileNavClass} onClick={() => setMenuOpen(false)}>กฎสภา</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
