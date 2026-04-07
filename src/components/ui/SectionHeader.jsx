export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs uppercase tracking-[0.22em] text-cyan-300/80 sm:text-sm sm:tracking-[0.35em]">
        FiveM Roleplay Rules
      </p>
      <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-sm leading-7 text-green-100/70 sm:text-base">{subtitle}</p>}
    </div>
  );
}
