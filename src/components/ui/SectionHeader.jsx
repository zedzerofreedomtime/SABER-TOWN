export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
        FiveM Roleplay Rules
      </p>
      <h2 className="text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-green-100/70">{subtitle}</p>}
    </div>
  );
}