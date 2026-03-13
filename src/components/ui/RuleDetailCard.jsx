export default function RuleDetailCard({ number, text }) {
  return (
    <div className="glow-box rounded-2xl p-4">
      <p className="leading-7 text-green-50/90">
        <span className="mr-2 font-bold text-cyan-300">{number}.</span>
        {text}
      </p>
    </div>
  );
}