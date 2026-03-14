import SectionHeader from "../../components/ui/SectionHeader";

export default function GangRules() {
  const categories = [
    {
      title: "การขึ้นทะเบียนแก๊ง",
      rules: [
        {
          detail: "ชื่อในบัตรประชาชน / ในประเทศ / Discord ต้องตรงกัน และต้องใส่ Tag หน้าชื่อภายใน 1 รี",
          note: "ไม่ตรง ปรับ 50,000 / คน",
        },
        {
          detail: "Leader ต้องคราฟเหรียญสร้างแก๊ง และสมาชิกต้องมีเหรียญเข้าแก๊ง",
          note: "ขั้นต่ำ 10 คน / สูงสุด 20 คน",
        },
        {
          detail: "ห้ามใช้ชื่อแบรนด์ OC, คำเหยียด หรือคำ 18+ ในชื่อแก๊ง",
          note: "ปรับ 5,000,000 / แก๊ง",
        },
        {
          detail: "การเข้าแก๊งต้องใช้เหรียญเข้า 1 เหรียญ โดย Leader หรือ Sub-L",
          note: "-",
        },
        {
          detail: "การออกแก๊งใช้เหรียญออก 1 เหรียญ",
          note: "คูลดาวน์ 3 วัน / ออกจากหน่วยงาน 7 วัน",
        },
        {
          detail: "การเปลี่ยนชื่อ / โลโก้ / สีแก๊ง",
          note: "ชื่อ 500,000 / โลโก้ 250,000 / สีคูลดาวน์ 30 วัน",
        },
        {
          detail: "หากเปลี่ยนสีแก๊ง ต้องแจ้งภายใน 7 วัน",
          note: "ไม่แจ้ง ปรับ 1,000,000 / วัน",
        },
        {
          detail: "เปลี่ยน Leader / Sub-L ต้องแจ้งต่อหน้าสภา",
          note: "ฝ่าฝืน ปรับ 2,000,000",
        },
        {
          detail: "ห้ามนำสมาชิกออกเกิน 5 คน ภายใน 14 วันแรก",
          note: "ปรับ 1,000,000 / แก๊ง",
        },
        {
          detail: "Safezone สี Mint (#46C1C0) / Peach (#FF775E) ห้ามไล่สี",
          note: "ปรับ 3,000,000",
        },
        {
          detail: "ห้ามทำธุรกรรมหรือแก้ไขใด ๆ เอง ทุกอย่างต้องผ่านสภา",
          note: "ปรับ 2,000,000 / ครั้ง",
        },
        {
          detail: "หลังขึ้นแก๊งต้องแจ้งลงชุดภายใน 7 วัน",
          note: "ไม่แจ้ง ปรับ 500,000",
        },
      ],
    },
    {
      title: "ออกลอย",
      rules: [
        {
          detail: "กรณี Leader / Sub-L ติดต่อสมาชิกไม่ได้ สามารถออกลอยได้ที่สภา",
          note: "ค่าดำเนินการ 300,000 IC",
        },
        {
          detail: "สมาชิกที่ถือรถสวัสดิการ หากออกลอย ต้องคืนรถภายใน 3 วัน",
          note: "ไม่คืน = ปลดไวริส + ยึดรถ",
        },
      ],
    },
    {
      title: "การยุบแก๊ง",
      rules: [
        {
          detail: "ยุบแก๊งต้องนำสมาชิกมาคืนสวัสดิการทั้งหมด",
          note: "ไม่ครบ = ปลดไวริส",
        },
        {
          detail: "สมาชิกต่ำกว่า 10 คน ต้องเติมภายใน 3 วัน",
          note: "ไม่ทำ = พักสถานะ / ยุบแก๊ง",
        },
        {
          detail: "ไม่มีความเคลื่อนไหวเกิน 14 วัน",
          note: "ยุบแก๊งทันที",
        },
        {
          detail: "ยุบได้เมื่อเปิดแก๊งครบ 14 วัน",
          note: "ค่าปรับ 3,000,000",
        },
        {
          detail: "หากสภามีมติยุบแก๊ง ต้องคืนของภายใน 3 วัน",
          note: "-",
        },
      ],
    },
    {
      title: "กฎพื้นฐานของแก๊ง",
      rules: [
        {
          detail: "ห้ามแก๊งเป็นพันธมิตรหรือท่อน้ำเลี้ยงกัน",
          note: "ปรับ 10,000,000 ทั้ง 2 ฝ่าย",
        },
        {
          detail: "ห้ามแลกเปลี่ยนสวัสดิการจากสภาโดยไม่มีเหตุ",
          note: "ปรับ 3,000,000",
        },
        {
          detail: "ห้าม Toxic / เหยียด / บัพ ใส่ประชาชน",
          note: "ครั้งที่ 3 = พักสถานะแก๊ง",
        },
        {
          detail: "ส่งหลักฐานผิดกฎกิจกรรมภายใน 24 ชั่วโมง",
          note: "เกินเวลา = โมฆะ",
        },
        {
          detail: "ห้ามใส่ชุดหรือสัญลักษณ์แก๊งให้คนนอก Slot",
          note: "ปรับ 2,000,000",
        },
      ],
    },
    {
      title: "สิทธิของแก๊ง",
      rules: [
        {
          detail: "ซื้อ Painkiller ได้เฉพาะผ่านสภาเท่านั้น",
          note: "ฝ่าฝืน ปรับ 3,000,000",
        },
        {
          detail: "หากพบผู้อื่นใส่ชุดแก๊ง สามารถจับส่งสภาได้",
          note: "ไม่ฟัง ปรับ 1,000,000",
        },
      ],
    },
    {
      title: "การลงชุดแก๊ง",
      rules: [
        {
          detail: "ลงชุดได้ 3 ชุด และ Accessory 2 ชิ้น",
          note: "-",
        },
        {
          detail: "ลงชุดฟรีครั้งแรกภายใน 7 วัน",
          note: "เกินคิด 300,000 / ชิ้น",
        },
        {
          detail: "ต้องแจ้งผ่านสภา และกรอกฟอร์มให้ครบ",
          note: "-",
        },
        {
          detail: "ห้ามเปิด Ticket เอง",
          note: "-",
        },
        {
          detail: "ห้ามลงชุดเกิน Slot",
          note: "ปรับ 1,000,000",
        },
        {
          detail: "Model Mod มีค่าธรรมเนียมเพิ่มเติม",
          note: "600,000",
        },
      ],
    },
    {
      title: "รายละเอียดไฟล์ชุด",
      rules: [
        {
          detail: "ต้องแยกโฟลเดอร์ male / female",
          note: "-",
        },
        {
          detail: "ต้องส่งไฟล์แยกชาย / หญิง",
          note: "-",
        },
        {
          detail: "ขนาดไฟล์ภาพต้องเป็น 1024x1024 px",
          note: "-",
        },
        {
          detail: "รองรับไฟล์ .ytd / .png และต้องบีบอัดเป็น .zip หรือ .rar",
          note: "-",
        },
        {
          detail: "ห้ามใช้ชุดเรืองแสง และต้องส่ง Model ให้สภาตรวจก่อน",
          note: "ฝ่าฝืน ปรับ 1,000,000",
        },
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="กฎแก๊ง"
        subtitle="ข้อบังคับของ Olympian สำหรับการขึ้นทะเบียน การดำเนินงาน และการจัดการแก๊ง"
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
                      <td className="border-b border-cyan-400/10 px-4 py-3 text-white/85">
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