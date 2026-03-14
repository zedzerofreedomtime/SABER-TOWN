import SectionHeader from "../../components/ui/SectionHeader";

export default function PoliceRanks() {
  const rules = [
    {
      item: "เล่นในเวลางาน (ยิงปืนเล่น แทงเล่นหน้าสน. ต่อยกันในชุดตำรวจ ยิงตำรวจด้วยกันเองเล่น)",
      fine: "50,000",
      jail: "-",
      note: "-",
    },
    {
      item: "ทำรถหน่วยงานหลุด",
      fine: "50,000",
      jail: "-",
      note: "-",
    },
    {
      item: "ไม่เข้าวอตอนเข้าเวร",
      fine: "50,000",
      jail: "-",
      note: "-",
    },
    {
      item: "ใช้รถหน่วยงานไม่ตรงตามยศ",
      fine: "200,000",
      jail: "-",
      note: "ยกเว้นเจ้าของรถนั่งหรือได้รับอนุญาตจาก ผบ.ตร.",
    },
    {
      item: "ทำเกินกว่าเหตุกับประชาชนหรือผู้ต้องหา",
      fine: "100,000",
      jail: "-",
      note: "ต้องให้ค่าทำขวัญผู้เสียหายไม่เกิน 30,000 หากร้องขอ",
    },
    {
      item: "พูดจาไม่ให้เกียรติและโพสต์ในทางไม่ดีใส่ประชาชน",
      fine: "100,000",
      jail: "-",
      note: "-",
    },
    {
      item: "ทะเลาะกันภายในกรมตำรวจ",
      fine: "300,000 / คน",
      jail: "30",
      note: "ถ้าซ้ำถือว่าโทษวินัยร้ายแรง",
    },
    {
      item: "ไม่ปฏิบัติหน้าที่หรือขัดคำสั่งผู้บังคับบัญชา",
      fine: "200,000",
      jail: "30",
      note: "-",
    },
    {
      item: "ใส่ชุดหน่วยงานหรือใช้รถหน่วยงานขณะออกเวร",
      fine: "200,000",
      jail: "30",
      note: "-",
    },
    {
      item: "เหม่อในเวลาเวรเกิน 15 นาที",
      fine: "50,000",
      jail: "-",
      note: "ต้องแจ้งผู้บังคับบัญชาก่อนเหม่อ",
    },
    {
      item: "ละเลยหน้าที่หรือเหม่อจนสลบ",
      fine: "150,000",
      jail: "-",
      note: "-",
    },
    {
      item: "ประพฤติตัวไม่เหมาะสม",
      fine: "100,000",
      jail: "-",
      note: "-",
    },
    {
      item: "ใช้เมนูอุ้ม F9 หน่วยงานในทางที่ผิด",
      fine: "200,000",
      jail: "-",
      note: "-",
    },
    {
      item: "ห้ามเผยเรื่องภายในหน่วยงาน",
      fine: "ใบแดง",
      jail: "-",
      note: "เข้าข่ายตำรวจดำ",
    },
    {
      item: "ห้ามใช้เมนูตำรวจยัดหรือโยกไอเท็มให้คนอื่น",
      fine: "300,000",
      jail: "-",
      note: "ถ้ายึดอาวุธผิด ให้แจ้ง ผบ. ก่อน",
    },
    {
      item: "เผยเรื่องภายในหน่วยงานให้นอกหน่วยงานทราบ",
      fine: "ใบแดง",
      jail: "-",
      note: "เข้าข่ายตำรวจดำ",
    },
    {
      item: "ห้ามลดเวลา/ค่าปรับให้ผู้ต้องหาโดยไม่มีเหตุ",
      fine: "ใบแดง",
      jail: "-",
      note: "เข้าข่ายตำรวจดำ",
    },
    {
      item: "พาประชาชนที่ไม่ใช่หน่วยงานมาปฏิบัติหน้าที่",
      fine: "ใบแดง",
      jail: "-",
      note: "เข้าข่ายตำรวจดำ",
    },
    {
      item: "ห้ามบอก GPS หรือเคสตำรวจให้ประชาชนหรือแก๊ง",
      fine: "ใบแดง",
      jail: "-",
      note: "เข้าข่ายตำรวจดำ",
    },
    {
      item: "เอื้อประโยชน์ให้แก๊ง",
      fine: "ใบแดง",
      jail: "-",
      note: "เข้าข่ายตำรวจดำ",
    },
  ];

  const extraNotes = [
    "ถ้าทำผิดซ้ำเกิน 2 ครั้ง ค่าปรับอาจโดน x2 ไปเรื่อยๆ ตามดุลพินิจ ผบ. หรือ รอง ผบ.",
    "ถ้าเจ้าหน้าที่ทำผิดวินัยลำดับ 1–12 ครบ 4 ครั้ง จะโดนสอบสวนว่าเข้าข่ายร้ายแรงหรือไม่",
    "โทษวินัยต้องผ่านการตัดสินจากผู้บังคับบัญชาสูงสุดเท่านั้น",
  ];

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="โทษวินัยตำรวจ"
        subtitle="แนวทางด้านวินัยและบทลงโทษภายในหน่วยตำรวจ"
      />

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
        ตารางนี้ใช้สำหรับกำหนดแนวทางการลงโทษทางวินัยของเจ้าหน้าที่ตำรวจ
        เพื่อควบคุมมาตรฐานการปฏิบัติงานและพฤติกรรมภายในหน่วยงาน
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
              <th className="w-40 border-b border-cyan-400/20 px-4 py-3 text-left">
                ค่าปรับ
              </th>
              <th className="w-40 border-b border-cyan-400/20 px-4 py-3 text-left">
                เวลาจำคุก
              </th>
              <th className="w-80 border-b border-cyan-400/20 px-4 py-3 text-left">
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
                  {rule.item}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 font-medium text-rose-300">
                  {rule.fine}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-amber-200">
                  {rule.jail}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-sky-200">
                  {rule.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5">
        <h2 className="mb-3 text-lg font-bold text-amber-300">
          หมายเหตุเพิ่มเติม
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-amber-100">
          {extraNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}