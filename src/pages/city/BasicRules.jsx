import SectionHeader from "../../components/ui/SectionHeader";
import RuleDetailCard from "../../components/ui/RuleDetailCard";

export default function BasicRules() {
  const rules = [
    "ห้ามใช้โปรแกรมโกง บัค หรือช่องโหว่ทุกชนิดเพื่อเอาเปรียบผู้เล่นคนอื่น",
    "ห้ามทำลายบรรยากาศ Roleplay เช่น ป่วนเมือง ก่อกวน หรือเล่นไม่ตามบทบาท",
    "ห้าม Combat Log หรือออกเกมเพื่อหนีสถานการณ์ RP ทุกกรณี",
    "ห้าม Metagaming คือการใช้ข้อมูลนอกเกมมาใช้ในเกมโดยไม่มีที่มาจาก RP",
    "ห้าม Powergaming คือการบังคับบทหรือทำสิ่งที่เกินความสมจริงของตัวละคร",
    "ห้าม Random Death Match หรือทำร้ายผู้อื่นโดยไม่มีเหตุผลทาง RP",
    "ผู้เล่นทุกคนต้องเคารพทีมงาน เจ้าหน้าที่ และผู้เล่นคนอื่นอย่างเหมาะสม",
    "ห้ามแอบอ้างกฎเมืองแบบมั่ว ๆ ตอนเถียงกัน เพราะกฎไม่ได้เขียนด้วยพลังจิต",
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6">
      <SectionHeader title="กฎพื้นฐาน" subtitle="กฎหลักที่ผู้เล่นทุกคนต้องปฏิบัติตามก่อนเข้าร่วมเมือง" />
      <div className="space-y-4">{rules.map((rule, i) => <RuleDetailCard key={i} number={i + 1} text={rule} />)}</div>
    </section>
  );
}