import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function MedicalRegulations() {
  const rules = [
    "เจ้าหน้าที่แพทย์ต้องวางตัวเป็นกลาง ไม่เลือกปฏิบัติต่อฝ่ายใดฝ่ายหนึ่ง",
    "ห้ามใช้สิทธิ์ของหน่วยแพทย์เพื่อช่วยเหลือพรรคพวกแบบผิดกฎ",
    "ต้องแต่งกาย ใช้ชื่อ และใช้อุปกรณ์ให้เหมาะสมกับบทบาทแพทย์",
    "ห้ามนำรถพยาบาลไปใช้เพื่อประโยชน์ส่วนตัวหรือการเดินทางที่ไม่เกี่ยวข้องกับงาน",
    "ห้ามเปิดเผยข้อมูลผู้ป่วยหรือสถานการณ์ลับโดยไม่มีเหตุผลใน RP",
    "แพทย์ทุกคนต้องรักษามารยาทและภาพลักษณ์ของหน่วยงานอย่างเหมาะสม",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="กฎระเบียบแพทย์" subtitle="ข้อกำหนดพื้นฐานสำหรับบุคลากรทางการแพทย์ทุกคนในเมือง" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}