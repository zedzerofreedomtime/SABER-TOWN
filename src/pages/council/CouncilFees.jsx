import SectionHeader from "../../components/ui/SectionHeader";

export default function CouncilFees() {
  const fees = [
    {
      item: "เปลี่ยนชื่อแก๊ง",
      price: "500,000",
      note: "ดำเนินการผ่านสภาเท่านั้น",
    },
    {
      item: "เปลี่ยนโลโก้แก๊ง",
      price: "250,000",
      note: "ดำเนินการผ่านสภาเท่านั้น",
    },
    {
      item: "เปลี่ยนสีแก๊ง",
      price: "-",
      note: "มีคูลดาวน์ 30 วัน และต้องแจ้งภายใน 7 วัน",
    },
    {
      item: "ไม่แจ้งเปลี่ยนสีแก๊งภายใน 7 วัน",
      price: "1,000,000 / วัน",
      note: "เป็นค่าปรับ",
    },
    {
      item: "เปลี่ยน Leader / Sub-L โดยไม่แจ้งสภา",
      price: "2,000,000",
      note: "เป็นค่าปรับ",
    },
    {
      item: "นำสมาชิกออกเกิน 5 คน ภายใน 14 วันแรก",
      price: "1,000,000 / แก๊ง",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ไล่สีใน Safezone สี Mint / Peach",
      price: "3,000,000",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ทำธุรกรรมหรือแก้ไขข้อมูลแก๊งเองโดยไม่ผ่านสภา",
      price: "2,000,000 / ครั้ง",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ไม่แจ้งลงชุดภายใน 7 วันหลังขึ้นแก๊ง",
      price: "500,000",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ค่าดำเนินการออกลอย",
      price: "300,000",
      note: "กรณี Leader / Sub-L ติดต่อสมาชิกไม่ได้",
    },
    {
      item: "ยุบแก๊งก่อนหรือมีเงื่อนไขยุบที่ต้องเสียค่าปรับ",
      price: "3,000,000",
      note: "กรณียุบได้เมื่อเปิดแก๊งครบ 14 วัน",
    },
    {
      item: "แลกเปลี่ยนสวัสดิการจากสภาโดยไม่มีเหตุ",
      price: "3,000,000",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ให้คนนอก Slot ใส่ชุดหรือสัญลักษณ์แก๊ง",
      price: "2,000,000",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ซื้อ Painkiller นอกระบบสภา",
      price: "3,000,000",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ผู้อื่นใส่ชุดแก๊งแล้วไม่ยอมส่งสภา",
      price: "1,000,000",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ลงชุดเกินกำหนดหลัง 7 วันแรก",
      price: "300,000 / ชิ้น",
      note: "ครั้งแรกฟรีภายใน 7 วัน",
    },
    {
      item: "ลงชุดเกิน Slot",
      price: "1,000,000",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ค่าธรรมเนียม Model Mod",
      price: "600,000",
      note: "ค่าดำเนินการเพิ่มเติม",
    },
    {
      item: "ใช้ชื่อแบรนด์ OC / คำเหยียด / 18+ ในชื่อแก๊ง",
      price: "5,000,000 / แก๊ง",
      note: "เป็นค่าปรับ",
    },
    {
      item: "เป็นพันธมิตรหรือท่อน้ำเลี้ยงกัน",
      price: "10,000,000 ทั้ง 2 ฝ่าย",
      note: "เป็นค่าปรับ",
    },
    {
      item: "ห้ามชุดเรืองแสง / ไม่ส่ง Model ให้ตรวจ",
      price: "1,000,000",
      note: "เป็นค่าปรับ",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="ค่าใช้จ่ายธุรกรรมสภา"
        subtitle="ค่าธรรมเนียม ค่าดำเนินการ และค่าปรับที่เกี่ยวข้องกับการจัดการแก๊งผ่านสภา"
      />

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
        เวลาทำการ: 18.00 – 00.00 น.
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
              <th className="w-52 border-b border-cyan-400/20 px-4 py-3 text-left">
                ราคา / ค่าปรับ
              </th>
              <th className="w-96 border-b border-cyan-400/20 px-4 py-3 text-left">
                หมายเหตุ
              </th>
            </tr>
          </thead>

          <tbody>
            {fees.map((row, index) => (
              <tr
                key={index}
                className="align-top odd:bg-white/[0.03] even:bg-white/[0.01] hover:bg-cyan-400/[0.06]"
              >
                <td className="border-b border-cyan-400/10 px-4 py-3 font-semibold text-cyan-300">
                  {index + 1}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-white/85">
                  {row.item}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 font-medium text-emerald-300">
                  {row.price}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-amber-200">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}