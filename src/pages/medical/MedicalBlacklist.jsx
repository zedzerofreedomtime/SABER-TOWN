import SectionHeader from "../../components/ui/SectionHeader";

export default function MedicalBlacklist() {
  const rules = [
    {
      detail:
        "BLACKLIST ก่อเหตุทะเลาะวิวาท หรือทำร้ายร่างกายในช่วงติดคูลดาวน์ตามประกาศโรงพยาบาล",
      punishment: "ปรับ 400,000 (ประชาชน) / 800,000 (แก๊ง)",
      note: "-",
    },
    {
      detail:
        "BLACKLIST กดเคสเรียกแพทย์แล้วเคลื่อนย้ายศพ หรือชุบกันเอง และไม่มาพบแพทย์ภายใน 15 นาที",
      punishment: "ปรับ 100,000 (ประชาชน) / 500,000 (แก๊ง)",
      note: "-",
    },
    {
      detail:
        "BLACKLIST ก่อกวนการปฏิบัติหน้าที่ของแพทย์ (ขออุ้ม, ใช้ Emote ก่อกวน, อุ้มผู้สลบหนีโดยไม่มี Story)",
      punishment: "ปรับ 400,000 (ประชาชน) / 800,000 (แก๊ง)",
      note: "-",
    },
    {
      detail:
        "BLACKLIST ปลอมแปลงเป็นเจ้าหน้าที่ สวมเครื่องแต่งกายหรืออุปกรณ์แพทย์",
      punishment: "ปรับ 500,000 (ประชาชน) / 1,000,000 (แก๊ง)",
      note: "-",
    },
    {
      detail:
        "BLACKLIST [ห้าม] ประชาชน ครอบครัว หรือแก๊งที่มีสตอรี่ ยืนอยู่ในพื้นที่โรงพยาบาล",
      punishment: "ปรับ 100,000 (ประชาชน) / 500,000 (แก๊ง)",
      note: "-",
    },
    {
      detail:
        "BLACKLIST ควักอาวุธในเขตโรงพยาบาล หรือทำให้แพทย์รู้สึกถึงอันตราย",
      punishment: "ปรับ 400,000 (ประชาชน) / 800,000 (แก๊ง)",
      note: "-",
    },
    {
      detail: "BLACKLIST พูดจา หรือแสดงพฤติกรรมไม่ให้เกียรติแพทย์",
      punishment: "ปรับ 400,000 (ประชาชน) / 800,000 (แก๊ง)",
      note: "-",
    },
    {
      detail:
        "BLACKLIST ทะเลาะวิวาท ทำร้ายร่างกาย บลัฟ หรือปล้นต่อหน้าแพทย์",
      punishment: "ปรับ 500,000 (ประชาชน) / 1,000,000 (แก๊ง)",
      note: "-",
    },
    {
      detail: "BLACKLIST จอดรถกีดขวางทางเข้า–ออก หรือจุดเบิกรถแพทย์",
      punishment: "ปรับ 100,000 (ประชาชน) / 500,000 (แก๊ง)",
      note: "-",
    },
    {
      detail: "BLACKLIST ใส่อุปกรณ์ปิดบังใบหน้าในพื้นที่โรงพยาบาล",
      punishment: "ปรับ 100,000 (ประชาชน) / 500,000 (แก๊ง)",
      note: "-",
    },
    {
      detail:
        "BLACKLIST [ห้าม] ออกจาก รพ. แล้วกลับเข้ามาใหม่ภายใน 15 นาที (ผู้มีสตอรี่)",
      punishment: "ปรับ 500,000 (ประชาชน) / 1,000,000 (แก๊ง)",
      note: "-",
    },
    {
      detail:
        "ผู้ที่โดน BLACKLIST ห้ามเข้าพื้นที่โรงพยาบาลนอกเหนือจากการรักษา นับเป็น Breaking",
      punishment: "-",
      note: "-",
    },
    {
      detail:
        "ห้ามใช้พื้นที่โรงพยาบาลเป็นที่หลบซ่อน หลังรักษาเสร็จต้องออกจากพื้นที่ทันที",
      punishment: "ปรับ 100,000 (ประชาชน) / 500,000 (แก๊ง)",
      note: "ประชาชน / แก๊ง / ครอบครัวที่มีสตอรี่",
    },
    {
      detail:
        "หากแพทย์ชุบเพื่อจ่ายปลด BLACKLIST แล้วมีการปั่น ไม่จ่าย หรือพยายามหลบหนี",
      punishment: "ปรับสูงสุด 1,000,000 (ประชาชน) / 5,000,000 (แก๊ง)",
      note: "แก๊งและครอบครัว BL เดียวกัน",
    },
  ];

  const notes = [
    "วิธีปลด BLACKLIST: ติดต่อแพทย์ที่โรงพยาบาล และชำระค่าปลด BLACKLIST",
    "เมื่อประกาศ BLACKLIST แล้ว แพทย์จะไม่ทำการรักษาทุกกรณี",
    "พฤติกรรมซ้ำซ้อน โทษขึ้นอยู่กับดุลยพินิจของ ผอ.",
    "การตัดสินใจของผู้อำนวยการ หรือแพทย์รักษาการ ถือเป็นที่สิ้นสุด",
    "สายตาแพทย์เป็นที่สิ้นสุด โปรดอ่านกฎและรักษาสิทธิ์ของตนเอง",
  ];

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="กฎการปรับ / Blacklist"
        subtitle="แนวทางการลงโทษและข้อห้ามในพื้นที่โรงพยาบาล"
      />

      <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-200">
        กฎการ BLACKLIST จัดทำขึ้นเพื่อควบคุมความเรียบร้อยในพื้นที่โรงพยาบาล
        ผู้ที่ฝ่าฝืนจะถูกลงโทษตามที่กำหนด และเมื่อถูก BLACKLIST แล้ว
        แพทย์จะไม่ทำการรักษาในทุกกรณี
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-cyan-400/20">
        <table className="min-w-full border-collapse text-sm text-white">
          <thead className="bg-cyan-400/10 text-cyan-300">
            <tr>
              <th className="w-16 border-b border-cyan-400/20 px-4 py-3 text-left">
                ข้อ
              </th>
              <th className="border-b border-cyan-400/20 px-4 py-3 text-left">
                รายละเอียด
              </th>
              <th className="w-72 border-b border-cyan-400/20 px-4 py-3 text-left">
                โทษ
              </th>
              <th className="w-72 border-b border-cyan-400/20 px-4 py-3 text-left">
                หมายเหตุ
              </th>
            </tr>
          </thead>

          <tbody>
            {rules.map((rule, index) => (
              <tr
                key={index}
                className="align-top odd:bg-white/[0.03] even:bg-white/[0.01] hover:bg-cyan-400/[0.06]"
              >
                <td className="border-b border-cyan-400/10 px-4 py-3 font-semibold text-cyan-300">
                  {index + 1}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-white/85">
                  {rule.detail}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-rose-300">
                  {rule.punishment}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-amber-200">
                  {rule.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-5">
        <h2 className="mb-3 text-lg font-bold text-sky-300">หมายเหตุเพิ่มเติม</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-sky-100">
          {notes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 text-sm text-white/50">
        อัปเดตล่าสุด 17/5/2025
      </div>
    </section>
  );
}