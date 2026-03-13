import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function ContractRules() {
  const rules = [
    "การทำสัญญาทุกประเภทต้องมีข้อมูลคู่สัญญาและเงื่อนไขที่ชัดเจน",
    "สัญญาที่ขัดต่อกฎเมืองหรือใช้เพื่อเอาเปรียบผู้เล่นอื่นถือเป็นโมฆะ",
    "หากมีข้อพิพาทเกี่ยวกับสัญญา ให้ยื่นเรื่องผ่านระบบหรือหน่วยงานที่เมืองกำหนด",
    "ห้ามปลอมแปลงเอกสาร ลายเซ็น หรือข้อมูลเพื่อทำสัญญา",
    "การละเมิดสัญญาอาจมีผลทั้งทางการเงิน ทางบทบาท และทางกฎหมายของเมือง",
    "สัญญาที่สำคัญควรมีพยานหรือหลักฐานประกอบเพื่อป้องกันปัญหาในภายหลัง",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="การทำสัญญา" subtitle="ข้อกำหนดในการทำสัญญา เอกสาร และการยื่นข้อพิพาทอย่างเป็นทางการ" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}