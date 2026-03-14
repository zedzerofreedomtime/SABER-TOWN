import SectionHeader from "../../components/ui/SectionHeader";

export default function PoliceFines() {
  const citizenCases = [
    { detail: "ทะเลาะวิวาท", jail: "15", fine: "30,000", note: "ปรับทั้ง 2 ฝ่าย" },
    { detail: "ปั่นป่วนก่อกวนหรือก่อความวุ่นวายให้หน่วยงาน", jail: "20", fine: "100,000", note: "จับทำคดีทันที" },
    { detail: "สร้างความวุ่นวาย (การาจ / จุดงานฟาร์ม)", jail: "10", fine: "10,000", note: "เสียงดัง บีบแตร เปิดเพลง เบิร์นยาง" },
    { detail: "พูดจาหยาบคาย ดูหมิ่น หรือสบประมาทชาวเมือง", jail: "30", fine: "10,000", note: "เรียกค่าเสียหายได้ 10,000" },
    { detail: "ใส่หน้ากากในบริเวณ สน.", jail: "5", fine: "10,000", note: "เห็นซึ่งหน้า ปรับทันที / ไม่ถอด = ปรับซ้ำ" },
    { detail: "แอบอ้างเป็นหน่วย", jail: "30", fine: "100,000", note: "รวมหน่วยที่ไม่มีในประเทศ" },
    { detail: "ทำอนาจารในพื้นที่สาธารณะ", jail: "10", fine: "5,000", note: "เปลือยกายทั้งบน-ล่าง" },
    { detail: "ถืออาวุธในพื้นที่สาธารณะ", jail: "10", fine: "10,000", note: "ยกเว้นเรเบล" },
    { detail: "แสดงอาวุธในสถานที่หน่วยงาน", jail: "20", fine: "30,000", note: "สน. / รพ. / สภา" },
    { detail: "พูดจาชักชวนไปทำสิ่งผิดกฎหมาย", jail: "-", fine: "5,000", note: "ทั้งผู้ชวนและผู้ทำ" },
    { detail: "ก่อความวุ่นวายบริเวณหน่วยงาน", jail: "30", fine: "150,000", note: "เสียงดัง เปิดเพลง เบิร์นยาง" },
    { detail: "ไม่ให้ความร่วมมือเจ้าหน้าที่", jail: "10", fine: "5,000", note: "ไม่ฟังคำสั่ง" },
    { detail: "เหินรถเข้าไปในคุก", jail: "20", fine: "20,000", note: "ทุกกรณี ไม่มีข้ออ้าง" },
    { detail: "ฉ้อโกง / บิดเงิน", jail: "30", fine: "100,000", note: "คืนเงิน + ค่าเสียหาย" },
    { detail: "พยายามปล้น / ข่มขู่ / ทำให้เสียทรัพย์", jail: "60", fine: "100,000", note: "-" },
    { detail: "ทำร้ายทรัพย์สินหน่วยงาน", jail: "10", fine: "10,000", note: "-" },
    { detail: "รถ 2 ล้อทำงานดำ", jail: "30", fine: "30,000", note: "รอบ 2 = ใบดำ" },
    { detail: "ขโมยรถประชาชน (มีสตอรี่)", jail: "10", fine: "10,000", note: "-" },
  ];

  const illegalCases = [
    { detail: "เงินแดง", jail: "10", fine: "x2", note: "ของที่มี / ยึดของกลาง" },
    { detail: "ปูนซีเมนต์", jail: "5 / ถุง", fine: "2,000 / ถุง", note: "ยึดของกลาง" },
    { detail: "สายไฟ", jail: "5 / เส้น", fine: "2,000 / เส้น", note: "ยึดของกลาง" },
    { detail: "พื้นที่สุ่มเสี่ยง", jail: "5", fine: "5,000", note: "ค้นตัวได้ทันที" },
    { detail: "ใส่หน้ากากปิดบังใบหน้า", jail: "5", fine: "2,000", note: "-" },
    { detail: "ผงโคเคน / กัญชา", jail: "5", fine: "2,000 / ชิ้น", note: "ยึดของกลาง" },
    { detail: "ประกันรถ", jail: "-", fine: "5,000", note: "ยึดรถเพิ่ม 10,000" },
    { detail: "สมรู้ร่วมคิด", jail: "½ โทษ", fine: "½ โทษ", note: "นั่งรถ / ช่วยเหลือ" },
    { detail: "ซุกของผิดกฎหมายในรถ", jail: "5", fine: "2,000", note: "ยึดรถไม่มีประกัน" },
    { detail: "วางเพลิง", jail: "15", fine: "30,000", note: "-" },
    { detail: "ทำลายหลักฐาน / ยัดของ", jail: "x2", fine: "x2", note: "-" },
    { detail: "จกสายไฟหน้าสน.", jail: "5", fine: "2,000", note: "จับทันที" },
  ];

  const importantNotes = [
    "หากเจ้าหน้าที่ทำงานดำ ขณะเข้าเวร: โทษ x10",
    "หากเจ้าหน้าที่ทำงานดำ ขณะออกเวร: โทษ x2",
    "มีผลกับทุกคดีโดยไม่ยกเว้น",
  ];

  const FineTable = ({ title, rows }) => (
    <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
      <h2 className="mb-4 text-xl font-bold text-cyan-300">{title}</h2>

      <div className="overflow-x-auto rounded-2xl border border-cyan-400/20">
        <table className="min-w-full border-collapse text-sm text-white">
          <thead className="bg-cyan-400/10 text-cyan-300">
            <tr>
              <th className="w-16 border-b border-cyan-400/20 px-4 py-3 text-left">ข้อ</th>
              <th className="border-b border-cyan-400/20 px-4 py-3 text-left">รายละเอียด</th>
              <th className="w-40 border-b border-cyan-400/20 px-4 py-3 text-left">จำคุก (นาที)</th>
              <th className="w-40 border-b border-cyan-400/20 px-4 py-3 text-left">ปรับ / คน</th>
              <th className="w-80 border-b border-cyan-400/20 px-4 py-3 text-left">หมายเหตุ</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="align-top odd:bg-white/[0.03] even:bg-white/[0.01] hover:bg-cyan-400/[0.06]"
              >
                <td className="border-b border-cyan-400/10 px-4 py-3 font-semibold text-cyan-300">
                  {index + 1}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-white/85">
                  {row.detail}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-amber-200">
                  {row.jail}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 font-medium text-rose-300">
                  {row.fine}
                </td>
                <td className="border-b border-cyan-400/10 px-4 py-3 text-sky-200">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="ค่าปรับ"
        subtitle="อัตราค่าปรับและโทษจำคุกตามกฎหมายของเมือง"
      />

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
        ตารางค่าปรับนี้ใช้เป็นแนวทางสำหรับการดำเนินคดีของเจ้าหน้าที่ตำรวจ
        โดยแบ่งเป็นคดีประชาชนทั่วไป และคดีที่เกี่ยวข้องกับของผิดกฎหมาย
      </div>

      <div className="mt-6 space-y-8">
        <FineTable title="คดีประชาชน / คดีทั่วไป" rows={citizenCases} />
        <FineTable title="ค่าปรับ – คดีของผิดกฎหมาย" rows={illegalCases} />

        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5">
          <h2 className="mb-3 text-lg font-bold text-amber-300">หมายเหตุสำคัญ</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-amber-100">
            {importantNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}