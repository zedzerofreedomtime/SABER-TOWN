import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function MedicalBlacklist() {
  const rules = [
    "เจ้าหน้าที่แพทย์ที่ละเว้นหน้าที่โดยไม่มีเหตุผล อาจถูกตักเตือน พักงาน หรือปลดออก",
    "การช่วยเหลือผู้เล่นแบบลำเอียงหรือรับผลประโยชน์แอบแฝง มีโทษระดับสูง",
    "การใช้ของหน่วยงานผิดวัตถุประสงค์ เช่น รถ ยา หรืออุปกรณ์ อาจถูกลงโทษทันที",
    "หากมีพฤติกรรมก่อกวน ใช้อำนาจผิด หรือทำลายภาพลักษณ์หน่วยงาน อาจถูก Blacklist",
    "การโกหกบันทึกเหตุการณ์หรือรายงานเท็จเป็นความผิดร้ายแรง",
    "บทลงโทษขึ้นอยู่กับดุลยพินิจของผู้บังคับบัญชาและหลักฐานที่ตรวจสอบได้",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="กฎการปรับ / Blacklist" subtitle="แนวทางการลงโทษเมื่อเจ้าหน้าที่แพทย์ฝ่าฝืนระเบียบของหน่วยงาน" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}