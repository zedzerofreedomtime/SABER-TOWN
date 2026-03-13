import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function PoliceRanks() {
  const rules = [
    "ตำรวจที่ฝ่าฝืนคำสั่งผู้บังคับบัญชาโดยไม่มีเหตุผลอาจถูกลงโทษทางวินัย",
    "การใช้คำพูดไม่เหมาะสม ดูหมิ่นเพื่อนร่วมงาน หรือทำลายภาพลักษณ์หน่วยงานถือเป็นความผิด",
    "การละทิ้งหน้าที่ระหว่างปฏิบัติงานมีโทษตามระดับความเสียหาย",
    "การใช้กำลังเกินกว่าเหตุหรือปฏิบัติผิดขั้นตอนอาจถูกพักงานหรือปลด",
    "การปลอมรายงานหรือบิดเบือนข้อเท็จจริงเป็นความผิดร้ายแรง",
    "การเลื่อนขั้นหรือลงโทษขึ้นอยู่กับผลงาน ระเบียบ และการตัดสินของผู้บังคับบัญชา",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="โทษวินัยตำรวจ" subtitle="แนวทางด้านวินัยและบทลงโทษภายในหน่วยตำรวจ" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}