import SectionHeader from "../../components/ui/SectionHeader";

export default function PoliceFines() {
  const fines = [
    { item: "ขับรถประมาท", price: "2,000$" },
    { item: "ฝ่าฝืนคำสั่งเจ้าหน้าที่", price: "3,000$" },
    { item: "พกอาวุธในพื้นที่หวงห้าม", price: "5,000$" },
    { item: "หลบหนีการจับกุม", price: "7,500$" },
    { item: "ทำร้ายเจ้าหน้าที่", price: "10,000$" },
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="ค่าปรับ" subtitle="ตัวอย่างอัตราค่าปรับเบื้องต้น สามารถแก้ไขให้ตรงกับกฎหมายเมืองจริงได้" />
      <div className="space-y-4">
        {fines.map((row, i) => (
          <div key={i} className="glow-box flex items-center justify-between rounded-2xl p-4">
            <span className="font-semibold text-white">{row.item}</span>
            <span className="text-cyan-300">{row.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}