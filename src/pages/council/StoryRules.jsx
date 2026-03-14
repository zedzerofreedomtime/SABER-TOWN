import SectionHeader from "../../components/ui/SectionHeader";

export default function StoryRules() {
  const buyStoryRules = [
    {
      detail: "ห้ามทั้งสองฝ่ายเปิดสตอรี่โดยไม่รู้เรื่องราว หากเปิดต้องแจ้งสภาทันที",
      note: "-",
    },
    {
      detail: "ผู้มีชื่อในทะเบียนแก๊งสามารถนำเรื่องเข้าแก๊งได้ทุกชุด",
      note: "ต้องมีบัตรสมาชิก",
    },
    {
      detail: "การซื้อสตอรี่ไม่ใช้ Overlay หรือ Gopro ใดๆ",
      note: "ใช้พยานและคำให้การเท่านั้น",
    },
    {
      detail: "ด่าแซะฝ่ายเดียวไม่ถือเป็นสตอรี่",
      note: "ต้องปะทะคารมกันทั้งสองฝ่าย และฝ่ายถูกด่าสามารถไม่เอาเรื่องได้",
    },
    {
      detail: "หากทำร้ายร่างกายกันทั้งสองฝ่าย สามารถนำมาเป็นสตอรี่ได้",
      note: "ฝ่ายถูกทำร้ายเลือกได้",
    },
    {
      detail: "ควักอาวุธระหว่างคุยหรือเคลียร์ ถือว่าเป็นสตอรี่ทันที",
      note: "-",
    },
    {
      detail: "ซื้อสตอรี่ได้ภายใน 3 วันนับจากวันที่เกิดเรื่อง",
      note: "ปรับ 1,000,000 / แก๊ง",
    },
    {
      detail: "สภาสามารถตัดสินไม่ให้เกิดสตอรี่ได้หากเห็นว่าไม่มีมูล",
      note: "แต่แก๊งยังเลือกเล่นได้",
    },
    {
      detail: "ระหว่างเรื่องขึ้นสภา ห้ามนำคนออกจากแก๊ง",
      note: "นำเข้าได้ตามปกติ",
    },
    {
      detail: "หากนำเรื่องขึ้นสภาหลัง 23.00 น.",
      note: "ให้เล่นวันถัดไป",
    },
  ];

  const playStoryRules = [
    {
      detail: "ประกาศสตอรี่กลางจอ ห้ามเข้ากิจกรรมทุกชนิด",
      note: "ปรับ 2,000,000",
    },
    {
      detail: "ประกาศสตอรี่ในทวิต ต้องใส่สูทตลอด",
      note: "ปรับ 2,000,000",
    },
    {
      detail: "ห้ามทิ้งศพลงน้ำ",
      note: "ปรับ 1,000,000 / ศพ",
    },
    {
      detail: "ผู้หญิงห้ามใส่ของเพิ่มความสูง",
      note: "ผิดกฎทันที",
    },
    {
      detail: "ห้ามอุ้มศพขึ้นรถระหว่างสตอรี่",
      note: "-",
    },
    {
      detail: "ประชาชนห้ามยุ่งเกี่ยวกับแก๊งที่มีสตอรี่",
      note: "แพ้สตอรี่ + ปรับ 5M",
    },
    {
      detail: "หลังคุยสตอรี่เสร็จ ห้ามเข้า–ออกแก๊ง",
      note: "ยกเว้นสลับสล็อต",
    },
    {
      detail: "ห้ามปลด Toxic 100",
      note: "ยกเว้นที่กำหนด",
    },
    {
      detail: "แจ้ง Admin ได้หลังจบสตอรี่ภายใน 24 ชม.",
      note: "-",
    },
    {
      detail: "ขั้นต่ำสตอรี่ 5 ไฟต์",
      note: "ไฟต์ใหญ่เลือก 3, 5, 7, 9 ไฟต์",
    },
    {
      detail: "1 วันต้องมีไฟต์ใหญ่ขั้นต่ำ 5 ไฟต์",
      note: "ปรับ 2,000,000",
    },
    {
      detail: "ไฟต์ใหญ่ต้องมีผู้เล่น ≥ 60%",
      note: "ปรับ 300,000 / ไฟต์",
    },
    {
      detail: "ไฟต์แรกสภากำหนดสถานที่ ส่วนไฟต์ถัดไปผู้ชนะเลือก",
      note: "-",
    },
    {
      detail: "เล่นสตอรี่ได้เวลา 18:30 – 01:00",
      note: "หากไม่จบให้เล่นต่อวันถัดไป",
    },
    {
      detail: "ต้องเริ่มไฟต์แรกภายใน 15 นาที",
      note: "ปรับ 1,000,000",
    },
    {
      detail: "ตกลงแล้วห้ามเปลี่ยนข้อตกลง",
      note: "-",
    },
    {
      detail: "ประเทศรี มีคูลดาวน์ 30 นาที",
      note: "-",
    },
    {
      detail: "วางเดิมพันได้ 1–3M",
      note: "สภากำหนด",
    },
    {
      detail: "ต้องเกิดสตอรี่ภายใน 3 วัน",
      note: "-",
    },
    {
      detail: "หลังไฟต์ต้องนำศพให้หมอตรวจ",
      note: "ปรับ 50,000 / ศพ",
    },
    {
      detail: "ก่อนเริ่มไฟต์ห้ามบัพหรือทำร้าย",
      note: "ปรับ 2,000,000",
    },
    {
      detail: "แก๊งที่มีสตอรี่ห้ามขึ้นสภา/ซื้อเพน",
      note: "ปรับ 1,000,000",
    },
    {
      detail: "ครบคูลดาวน์หมอ เพิ่มเวลาไฟต์ละ 5 นาที",
      note: "ปรับ 500,000",
    },
    {
      detail: "ถึงพื้นที่ไฟต์แล้วต้องลงรถพร้อมกัน",
      note: "ปรับ 1,000,000",
    },
    {
      detail: "เวลาไฟต์ 30 นาที",
      note: "-",
    },
    {
      detail: "ล้มเกิน 80% = ได้ 1 แต้ม",
      note: "สภาพิจารณา",
    },
    {
      detail: "คนที่ไม่อยู่ก่อนเริ่มไฟต์ ห้ามเติมไฟต์",
      note: "ปรับ 1,000,000 / คน",
    },
  ];

  const StoryTable = ({ title, rows }) => (
    <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
      <h2 className="mb-4 text-xl font-bold text-cyan-300">{title}</h2>

      <div className="overflow-x-auto rounded-2xl border border-cyan-400/20">
        <table className="min-w-full border-collapse text-sm text-white">
          <thead className="bg-cyan-400/10 text-cyan-300">
            <tr>
              <th className="w-16 border-b border-cyan-400/20 px-4 py-3 text-left">
                ข้อ
              </th>
              <th className="border-b border-cyan-400/20 px-4 py-3 text-left">
                รายละเอียด
              </th>
              <th className="w-96 border-b border-cyan-400/20 px-4 py-3 text-left">
                หมายเหตุ
              </th>
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
        title="สตอรี่"
        subtitle="ข้อบังคับของ Olympian สำหรับการซื้อสตอรี่และการเล่นสตอรี่"
      />

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
        เวลาทำการ: 18.00 – 00.00 น.
      </div>

      <div className="mt-6 space-y-8">
        <StoryTable title="กฎการซื้อสตอรี่" rows={buyStoryRules} />
        <StoryTable title="กฎการเล่นสตอรี่" rows={playStoryRules} />
      </div>
    </section>
  );
}