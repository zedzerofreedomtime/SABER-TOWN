import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function GangRules() {
  const rules = [
    "แก๊งที่จัดตั้งในเมืองต้องได้รับการรับรองหรืออยู่ในเงื่อนไขที่เมืองกำหนด",
    "ห้ามแอบอ้างชื่อกลุ่ม องค์กร หรืออำนาจโดยไม่มีที่มาใน RP",
    "การทำสงครามระหว่างแก๊งต้องมีเหตุผล บทนำ และไม่กระทบผู้เล่นทั่วไปเกินจำเป็น",
    "ห้ามใช้จำนวนคนเกินกว่าที่กิจกรรมหรือเหตุการณ์กำหนด",
    "ห้ามบุกพื้นที่หรือไล่ล่าข้ามเขตปลอดภัยโดยไม่มีเงื่อนไขรองรับ",
    "การฝ่าฝืนกฎแก๊งอาจถูกยุบกลุ่ม ปรับ หรือแบนจากกิจกรรมเฉพาะทาง",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="กฎแก๊ง" subtitle="แนวทางสำหรับกลุ่ม แก๊ง หรือองค์กรภายในเมือง" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}