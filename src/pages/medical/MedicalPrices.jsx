import SectionHeader from "../../components/ui/SectionHeader";

export default function MedicalPrices() {
  const prices = [
    { item: "ปฐมพยาบาลเบื้องต้น", price: "500$" },
    { item: "รักษาอาการบาดเจ็บทั่วไป", price: "1,000$" },
    { item: "เคลื่อนย้ายผู้ป่วยฉุกเฉิน", price: "1,500$" },
    { item: "ชุบชีวิต / รักษาหนัก", price: "2,500$" },
    { item: "ค่าบริการนอกพื้นที่เสี่ยง", price: "3,000$" },
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="ค่ารักษาพยาบาล" subtitle="อัตราค่าบริการรักษาพยาบาลเบื้องต้นภายในเมือง สามารถปรับได้ภายหลัง" />

      <div className="space-y-4">
        {prices.map((row, i) => (
          <div key={i} className="glow-box flex items-center justify-between rounded-2xl p-4">
            <span className="font-semibold text-white">{row.item}</span>
            <span className="text-cyan-300">{row.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}