import SectionHeader from "../../components/ui/SectionHeader";

export default function ContractRules() {
  const categories = [
    {
      title: "กฎพื้นฐานเจ้าหน้าที่สภา",
      rules: [
        { detail: "การตัดสินของเจ้าหน้าที่สภาถือเป็นที่สิ้นสุด", note: "-" },
        { detail: "เจ้าหน้าที่สภามีหน้าที่ไกล่เกลี่ย เจรจา และหาจุดลงตัวสำหรับแก๊ง", note: "-" },
        { detail: "เจ้าหน้าที่สภาไม่ขึ้นตรงกับหน่วยงานใด หากเกิดเหตุจะใช้กฎของสภาเท่านั้น", note: "-" },
        { detail: "ผู้ติดต่อสภาต้องใส่ชุดแสดงสัญลักษณ์แก๊ง/ครอบครัวให้ชัดเจน", note: "ครั้งแรกเตือน / ครั้งที่ 2 ปรับ 300,000" },
        { detail: "ห้ามดูหมิ่นหรือโกหกเจ้าหน้าที่สภา", note: "ปรับ 3,000,000 / คน" },
        { detail: "ห้ามทำร้าย ปล้น หรือขโมยรถของเจ้าหน้าที่สภา", note: "ปรับ 5,000,000" },
        { detail: "ห้ามแอบอ้างเป็นเจ้าหน้าที่สภา หรืออ้างอิงโดยไม่ได้รับอนุญาต", note: "ปรับ 5,000,000 / คน" },
        { detail: "สามารถติดต่อสภาได้เฉพาะในพื้นที่สภาเท่านั้น", note: "-" },
        { detail: "ห้ามเหินรถหรือใช้บัคเข้าสู่พื้นที่สภา", note: "ครั้งแรกเตือน / ครั้งที่ 2 ปรับ 500,000" },
        { detail: "ประชาชนห้ามใส่ชุดแก๊งหรือชุดของแก๊งอื่น", note: "ปรับ 2,000,000 / คน" },
        { detail: "ในเวลาทำการสามารถทำธุรกรรมผ่านสภาได้ทุกรูปแบบ", note: "นอกเวลา: ซื้อ Painkiller / รับเรื่องสตอรี่รอพีคไทม์" },
        { detail: "หากมีประกาศเรียกจากสภา ห้ามเพิกเฉยเกิน 30 นาที", note: "ปรับ 1,000,000" },
        { detail: "ห้ามฝ่าฝืนคำสั่งหรือประกาศของสภาทุกรูปแบบ", note: "ปรับ 500,000 / ครั้ง" },
      ],
    },
    {
      title: "สินค้าและสวัสดิการจากสภา",
      rules: [
        { detail: "สมาชิกภายใต้สภาสามารถซื้อ Painkiller ได้", note: "ขวดละ 1,200 IC" },
        {
          detail:
            "สิทธิ์สวัสดิการขึ้นแก๊ง / ครอบครัว รับได้ 1 ครั้งเท่านั้น\n\nแก๊ง 15 คน = รถโล 300KG 3 / เกราะ 100 / Painkiller 300 / AED 200 / กาชา 300 / รถงานดำ 3 / อาวุธ 5\nแก๊ง 20 คน = รถโล 300KG 4 / เกราะ 200 / Painkiller 400 / AED 300 / กาชา 400 / รถงานดำ 4 / อาวุธ 10\nครอบครัว 5 คน = รถโล 300KG 1 / เกราะ 50 / Painkiller 200 / AED 100 / กาชา 100 / รถงานดำ 1 / อาวุธ 3\nครอบครัว 10 คน = รถโล 300KG 1 / เกราะ 100 / Painkiller 400 / AED 200 / กาชา 200 / รถงานดำ 2 / อาวุธ 6",
          note: "ฝ่าฝืน: ปรับ + คืนของทั้งหมด",
        },
        { detail: "พบสวัสดิการอยู่กับประชาชน", note: "ยึดคืน + ปรับ 200,000 / ชิ้น" },
        { detail: "รถสวัสดิการแก๊งอยู่กับแก๊งอื่น", note: "ยึดคืนไม่คืนต้นทาง" },
        { detail: "การเปลี่ยนผู้ถือรถสวัสดิการ ต้องทำผ่านสภาเท่านั้น", note: "ปรับ 1,000,000 / คน" },
        { detail: "โดนรีตัวแต่ถือรถสวัสดิการ สามารถคืนให้แก๊งได้", note: "ยกเว้น Bottle" },
        { detail: "ห้ามซื้อขายสวัสดิการระหว่างแก๊ง/ประชาชน", note: "ปรับ 1,000,000 / คน (ยกเว้นในแก๊ง)" },
        { detail: "ประชาชนห้ามถือ Painkiller หรือสวัสดิการแก๊ง", note: "ปรับ 1,000,000 / คน" },
        { detail: "สภารับ Gopro เป็นหลักฐานได้", note: "-" },
      ],
    },
    {
      title: "สถานะ Protect จากสภา",
      rules: [
        { detail: "Protect สำหรับแก๊งขึ้นใหม่ 14 วัน ห้ามซื้อเรื่องหรือโดนซื้อเรื่อง", note: "-" },
        { detail: "แก๊งที่มี Protect ห้ามยั่วยุหรือทำร้ายผู้อื่น", note: "ปลด PT + ปรับ 5,000,000" },
        { detail: "ห้ามแก๊งอื่นยั่วยุฝ่ายที่มี Protect", note: "ปรับ 5,000,000" },
        { detail: "Protect จากสตอรี่: ฝ่ายแพ้ 5 วัน / ฝ่ายชนะ 3 วัน", note: "เลือกได้ว่าจะรับหรือไม่" },
        { detail: "Protect สี สำหรับแก๊งใหม่ 7 วัน", note: "ไม่รวมกับ Protect สตอรี่" },
        { detail: "ห้ามฝ่าฝืน Protect ในกิจกรรมประเทศ", note: "ปลด PT + ปรับ 5,000,000" },
        { detail: "หากต้องการปลด Protect เอง", note: "ค่าธรรมเนียม 1,000,000 / ครั้ง" },
      ],
    },
    {
      title: "หมวด BOYCOTT",
      rules: [
        {
          detail:
            "พักสถานะแก๊ง (Boycott) เมื่อทำผิดกฎร้ายแรงของสภา และห้ามใช้สิทธิ์หรือบริการจากสภาทั้งหมด",
          note: "-",
        },
        {
          detail:
            "หากไม่ติดต่อสภาภายใน 24 ชั่วโมงหลังโดน Boycott จะถูกสั่งยุบแก๊งอัตโนมัติ",
          note: "-",
        },
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="กฎสภา"
        subtitle="ข้อบังคับของ Olympian และรูปแบบการดำเนินงาน"
      />

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
        เวลาทำการ: 18.00 – 00.00 น.
      </div>

      <div className="mt-6 space-y-8">
        {categories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5"
          >
            <h2 className="mb-4 text-xl font-bold text-cyan-300">
              {category.title}
            </h2>

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
                  {category.rules.map((rule, index) => (
                    <tr
                      key={index}
                      className="align-top odd:bg-white/[0.03] even:bg-white/[0.01] hover:bg-cyan-400/[0.06]"
                    >
                      <td className="border-b border-cyan-400/10 px-4 py-3 font-semibold text-cyan-300">
                        {index + 1}
                      </td>
                      <td className="border-b border-cyan-400/10 px-4 py-3 text-white/85 whitespace-pre-line">
                        {rule.detail}
                      </td>
                      <td className="border-b border-cyan-400/10 px-4 py-3 text-amber-200">
                        {rule.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}