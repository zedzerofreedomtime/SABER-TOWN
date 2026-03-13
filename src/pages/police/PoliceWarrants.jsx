import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function PoliceWarrants() {
  const rules = [
    "หมายเรียกใช้ในกรณีที่ผู้กระทำผิดยังไม่จำเป็นต้องถูกควบคุมตัวทันที",
    "หมายจับใช้เมื่อมีหลักฐานเพียงพอหรือมีการกระทำผิดซึ่งหน้าที่ชัดเจน",
    "การออกหมายต้องมีเหตุผลรองรับ ไม่ใช่หงุดหงิดแล้วออกหมายมั่ว",
    "เจ้าหน้าที่ต้องอ่านรายละเอียดหมายให้ชัดก่อนนำไปใช้กับผู้ต้องหา",
    "ห้ามปลอมแปลง บิดเบือน หรืออ้างหมายโดยไม่มีข้อมูลยืนยัน",
    "เมื่อมีการจับกุมตามหมาย ต้องทำตามขั้นตอนให้ครบถ้วนและโปร่งใส",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="หมายเรียก / หมายจับ" subtitle="หลักเกณฑ์ในการออกและใช้หมายเรียกหรือหมายจับอย่างเหมาะสม" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}