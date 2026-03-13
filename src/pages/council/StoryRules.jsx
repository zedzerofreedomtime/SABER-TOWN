import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function StoryRules() {
  const rules = [
    "การสร้าง Storyline ต้องมีความสมเหตุสมผลและสอดคล้องกับบริบทของเมือง",
    "ห้ามสร้างเรื่องราวที่กระทบผู้เล่นอื่นอย่างรุนแรงโดยไม่ได้ตกลงหรือไม่มีช่องทางให้ตอบโต้",
    "ห้ามใช้ Story เป็นข้ออ้างในการละเมิดกฎพื้นฐานของเมือง",
    "หากเป็นสตอรี่ขนาดใหญ่ควรแจ้งทีมงานหรือผู้เกี่ยวข้องล่วงหน้า",
    "ทุกฝ่ายควรให้ความร่วมมือในการเล่นบทเพื่อให้เรื่องราวสมบูรณ์และสนุกสำหรับทุกคน",
    "Story ที่จบแล้วควรสรุปผลให้ชัด เพื่อไม่ให้เกิดการอ้างสิทธิ์ค้างคาแบบละครตอนต่อไปไม่มา",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="สตอรี่" subtitle="แนวทางในการสร้างและดำเนินเนื้อเรื่องภายในเมืองอย่างมีคุณภาพ" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}