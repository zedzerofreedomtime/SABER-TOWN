import SectionHeader from "../../components/ui/SectionHeader";

export default function CouncilFees() {
  const fees = [
    { item: "ค่าจดทะเบียนกิจการ", price: "15,000$" },
    { item: "ค่าธรรมเนียมเอกสารสภา", price: "2,500$" },
    { item: "ค่าขออนุมัติธุรกรรมพิเศษ", price: "5,000$" },
    { item: "ค่าตรวจสอบสิทธิ์และหลักฐาน", price: "3,500$" },
    { item: "ค่าปรับกรณียื่นข้อมูลเท็จ", price: "10,000$" },
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="ค่าใช้จ่ายธุรกรรมสภา" subtitle="ตัวอย่างค่าธรรมเนียมและค่าใช้จ่ายที่เกี่ยวข้องกับการดำเนินการผ่านสภา" />
      <div className="space-y-4">
        {fees.map((row, i) => (
          <div key={i} className="glow-box flex items-center justify-between rounded-2xl p-4">
            <span className="font-semibold text-white">{row.item}</span>
            <span className="text-cyan-300">{row.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}