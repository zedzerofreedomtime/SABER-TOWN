import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `rounded-xl px-4 py-2 font-semibold transition ${
      isActive
        ? "bg-green-400 text-black shadow-[0_0_16px_rgba(0,255,128,0.25)]"
        : "bg-white/5 text-white hover:bg-green-400/10"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-green-400/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <div>
          <h1 className="text-xl font-black tracking-[0.2em] text-green-300">SABER TOWN</h1>
          <p className="text-xs text-green-100/55">CYBER RULES ARCHIVE</p>
        </div>

        <nav className="flex flex-wrap gap-2">
          <NavLink to="/" className={navClass}>หน้าแรก</NavLink>
          <NavLink to="/city" className={navClass}>เกี่ยวกับเมือง</NavLink>
          <NavLink to="/medical" className={navClass}>กฎแพทย์</NavLink>
          <NavLink to="/police" className={navClass}>กฎตำรวจ</NavLink>
          <NavLink to="/council" className={navClass}>กฎสภา</NavLink>
        </nav>
      </div>
    </header>
  );
}