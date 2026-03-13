import { Link } from "react-router-dom";

export default function CategoryCard({ title, path }) {
  return (
    <Link
      to={path}
      className="group block rounded-2xl border border-green-400/15 bg-[#08110d]/90 px-5 py-5 shadow-[0_0_0_1px_rgba(0,255,136,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(0,255,170,0.15)]"
    >
      <div className="rounded-xl bg-[linear-gradient(180deg,rgba(0,255,128,0.05),transparent)]">
        <p className="text-2xl font-extrabold tracking-wide text-white">
          {title}
        </p>
      </div>
    </Link>
  );
}