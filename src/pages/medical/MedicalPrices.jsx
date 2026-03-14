import SectionHeader from "../../components/ui/SectionHeader";

export default function MedicalPrices() {
  const prices = [
    {
      item: "ฉีดยา – เข็มเล็ก",
      detail: "เพิ่มเลือด 50%",
      price: "500",
    },
    {
      item: "ฉีดยา – เข็มใหญ่",
      detail: "เพิ่มเลือด 100%",
      price: "1,000",
    },
    {
      item: "ปั้มหัวใจ – เขตในเมือง",
      detail: "พื้นที่สีเทา, เขต TAR, พื้นที่ สน.",
      price: "500",
    },
    {
      item: "ปั้มหัวใจ – เขตนอกเมือง",
      detail: "นอกเขตเมืองจนถึงก่อนเขตทะเลทราย",
      price: "1,000",
    },
    {
      item: "ปั้มหัวใจ – เขตเมืองบน",
      detail: "เขตทะเลทรายขึ้นไป",
      price: "1,500",
    },
    {
      item: "ปั้มหัวใจ – พื้นที่เข้าถึงยาก",
      detail: "ภูเขา, ตึกสูง, ในน้ำ",
      price: "2,500",
    },
    {
      item: "ปั้มหัวใจ – พื้นที่สุ่มเสี่ยง / ทะเลาะวิวาทต่อหน้าหมอ",
      detail: "เรเบล, จุดงานดำ, คุก",
      price: "3,500",
    },
    {
      item: "บัตรศัลกรรม",
      detail: "-",
      price: "100,000",
    },
  ];

  const notes = [
    "หากเรียกเคสแพทย์แล้วมีการใช้ AED ปั้มหัวใจกันเอง หรือมีการเคลื่อนย้ายผู้สลบก่อนแพทย์ถึง ค่ารักษาจะถูกคิด x3 จากราคาปกติ (ยกเว้นเคสสตอรี่)",
    "หน่วยงานที่ไม่ได้เข้าเวร, ไม่สวมชุดหน่วยงาน หรือไม่มีอุปกรณ์แสดงสัญลักษณ์ของหน่วยงาน จะถูกคิดค่ารักษาในอัตราประชาชน",
    "แก๊งที่ไม่สวมชุด หรือไม่มีอุปกรณ์แสดงสัญลักษณ์แก๊ง จะถูกคิดค่ารักษาในอัตราประชาชนเช่นเดียวกัน",
  ];

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="ค่ารักษาพยาบาล"
        subtitle="อัตราค่ารักษาพยาบาลมาตรฐานของเมือง Saber Town"
      />

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
        อัตราค่ารักษาพยาบาลของเมือง Saber Town ถูกกำหนดขึ้นเพื่อให้เป็นมาตรฐานเดียวกัน
        แพทย์ทุกนายต้องคิดค่ารักษาตามตารางด้านล่างอย่างเคร่งครัด
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-cyan-400/20">
        <table className="min-w-full border-collapse text-sm text-white">
          <thead className="bg-cyan-400/10 text-cyan-300">
            <tr>
              <th className="w-16 border-b border-cyan-400/20 px-4 py-3 text-left">
                ข้อ
              </th>
              <th className="border-b border-cyan-400/20 px-4 py-3 text-left">
                รายการ
              </th>
              <th className="w-80 border-b border-cyan-400/20 px-4 py-3 text-left">
                รายละเอียด
              </th>
              <th className="w-40 border-b border-cyan-400/20 px-4 py-3 text-left">
                ค่ารักษา
              </th>
            </tr>
          </thead>

          <tbody>
            {prices.map((row, index) => (
              <tr
                key={index}
                className="align-top odd:bg-white/[0.03] even:bg-white/[0.01] hover:bg-cyan-400/[0.06]"
              >
                <td className="border-b border-cyan-400/10 px-4 py-3 font-semibold text-cyan-300">
                  {index + 1}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-white font-medium">
                  {row.item}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-white/80">
                  {row.detail}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-emerald-300 font-semibold">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5">
        <h2 className="mb-3 text-lg font-bold text-amber-300">หมายเหตุ</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-amber-100">
          {notes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-5">
        <h2 className="mb-3 text-lg font-bold text-sky-300">ขอบเขตการรักษา</h2>
        <p className="text-sm text-sky-100">
          แพทย์จะให้การรักษาตามขอบเขตพื้นที่ ความปลอดภัย และกฎการปฏิบัติหน้าที่แพทย์
          หากพื้นที่ไม่ปลอดภัย แพทย์สามารถปฏิเสธการรักษาได้
        </p>
      </div>
    </section>
  );
}