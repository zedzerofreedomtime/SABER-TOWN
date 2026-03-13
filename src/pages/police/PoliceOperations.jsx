import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function PoliceOperations() {
  const rules = [
    "ก่อนเข้าปฏิบัติงานทุกครั้ง ต้องเตรียมอุปกรณ์และยานพาหนะให้พร้อม",
    "เมื่อได้รับแจ้งเหตุ ให้ประเมินสถานการณ์ก่อนเข้าปะทะหรือเข้าควบคุมพื้นที่",
    "การไล่ล่าต้องเริ่มตามลำดับ ไม่เปิดความรุนแรงสูงเกินเหตุทันที",
    "ในการควบคุมตัวผู้ต้องหา ควรแจ้งเหตุผลและสิทธิ์เบื้องต้นตามความเหมาะสม",
    "หากมีการปะทะรุนแรง ต้องประสานหน่วยแพทย์หรือกำลังเสริมอย่างเป็นระบบ",
    "ทุกเหตุการณ์สำคัญควรมีการรายงานหรือบันทึกข้อมูลหลังจบภารกิจ",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="การปฏิบัติงาน" subtitle="แนวทางการเข้าระงับเหตุ ไล่ล่า ควบคุมพื้นที่ และรายงานภารกิจ" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}