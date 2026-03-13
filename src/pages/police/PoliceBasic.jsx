import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function PoliceBasic() {
  const rules = [
    "เจ้าหน้าที่ตำรวจต้องยึดหลักความยุติธรรมและไม่เลือกปฏิบัติ",
    "ห้ามใช้อำนาจเพื่อกลั่นแกล้ง ประโยชน์ส่วนตน หรือเอื้อพวกพ้อง",
    "ตำรวจต้องมีเหตุผลรองรับก่อนการตรวจค้น จับกุม หรือใช้อาวุธ",
    "ห้ามใช้อาวุธหรือกำลังเกินกว่าเหตุเมื่อยังไม่มีภัยคุกคามที่ชัดเจน",
    "การปฏิบัติหน้าที่ทุกครั้งควรอยู่ในกรอบ Roleplay ที่สมเหตุสมผล",
    "ตำรวจต้องรักษาภาพลักษณ์ของหน่วยงานทั้งต่อหน้าและนอกสถานการณ์หลัก",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="กฎพื้นฐานตำรวจ" subtitle="ระเบียบพื้นฐานที่ตำรวจทุกนายต้องปฏิบัติตาม" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}