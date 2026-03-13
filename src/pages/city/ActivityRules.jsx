import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function ActivityRules() {
  const rules = [
    "ผู้เล่นที่เข้าร่วมกิจกรรมของเมืองต้องปฏิบัติตามเงื่อนไขของกิจกรรมนั้นอย่างเคร่งครัด",
    "ห้ามใช้บัคหรือช่องโหว่ในกิจกรรมเพื่อชิงความได้เปรียบ เช่น วาร์ป หลบโซน หรือยิงทะลุสิ่งกีดขวาง",
    "ห้ามก่อกวนกิจกรรมของผู้อื่นโดยไม่มีส่วนเกี่ยวข้องกับกิจกรรมนั้น",
    "การเข้าร่วมกิจกรรมต้องคงคุณภาพ RP และไม่เปลี่ยนกิจกรรมให้กลายเป็นสนามเด็กเล่นยิงมั่ว",
    "หากกิจกรรมกำหนดจำนวนคน อาวุธ หรือยานพาหนะ ผู้เล่นต้องทำตามเงื่อนไขนั้น",
    "ทีมงานสามารถตัดสิทธิ์ผู้เล่นที่ไม่ปฏิบัติตามกติกากิจกรรมได้ทันที",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="กฎกิจกรรม" subtitle="ข้อกำหนดสำหรับกิจกรรมพิเศษ อีเวนต์ และการแข่งขันในเมือง" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}