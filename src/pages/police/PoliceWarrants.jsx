import SectionHeader from "../../components/ui/SectionHeader";

export default function PoliceWarrants() {
  const summonsRules = [
    {
      detail:
        "ในระหว่างที่โดนหมายเรียก-หมายจับ จะไม่ได้รับความคุ้มครองจากกฎหมาย เช่น ฉ้อโกง ปล้น หรือทำร้ายร่างกายเจ้าหน้าที่ และสามารถใช้มาตรการสูงสุดได้ทันที",
      note: "-",
    },
    {
      detail:
        "เจ้าหน้าที่จะประกาศเรียกตัวผู้ต้องหาในประเทศและทาง Discord จำนวน 3 ครั้ง ทุก ๆ 15 นาที นับจากเวลาที่ประกาศ",
      note: "-",
    },
    {
      detail:
        "หากประกาศหมายเรียกครบ 3 ครั้งแล้ว จะเปลี่ยนเป็นประกาศหมายจับทันที โดยหมายจับมีระยะเวลา 3 วัน (OC)",
      note: "-",
    },
    {
      detail:
        "หากผู้ต้องหามาตามหมายเรียก เจ้าหน้าที่จะพิจารณาและพูดคุย หากไม่มีเหตุจะปล่อยตัวทันที",
      note: "-",
    },
    {
      detail:
        "ผู้ต้องหาคดีฉ้อโกงที่ยอมรับผิดหรือคืนเงินแก่ผู้เสียหาย จะไม่ถูกดำเนินคดีและปล่อยตัวทันที",
      note: "-",
    },
    {
      detail:
        "ผู้ต้องหาคดีฉ้อโกงที่ไม่ยอมรับผิด และเจ้าหน้าที่มีหลักฐาน จะถูกจับกุมและดำเนินคดีทันที",
      note: "-",
    },
  ];

  const warrantRules = [
    {
      detail:
        "ในระหว่างที่โดนหมายเรียก-หมายจับ จะไม่ได้รับความคุ้มครองจากกฎหมาย และเจ้าหน้าที่สามารถใช้มาตรการพิเศษได้ทันที",
      note: "-",
    },
    {
      detail:
        "กรณีทำร้ายร่างกายเจ้าหน้าที่นอกเขตเรเบล จะมีประกาศหมายจับบุคคลที่ระบุได้ในข้อหา “ทำร้ายร่างกายเจ้าหน้าที่” โดยอายุคดี 30 นาที",
      note: "-",
    },
    {
      detail:
        "การประกาศหมายจับ หรือ Blacklist จะเกิดขึ้นได้ก็ต่อเมื่อเจ้าหน้าที่ตำรวจยังเหลืออยู่ในสตอรี่นั้น ๆ โดยอ้างอิงจากหลักฐานที่มี",
      note: "-",
    },
    {
      detail:
        "จะต้องออกหมายเรียกก่อน 3 ครั้ง แต่ละครั้งห่างกัน 15 นาที หากไม่มาตามหมายเรียก จึงจะอนุมัติหมายจับ โดยอายุความขึ้นอยู่กับความหนักของคดี (เวลา OC)",
      note:
        "ห้ามประกาศเรียกโดยพลการ ต้องขออนุมัติจากผู้ที่มียศสูงกว่า ณ เวลานั้น",
    },
    {
      detail:
        "การออกหมายจับจะเกิดขึ้นก็ต่อเมื่อมีการประกาศจากตำรวจ ทั้งใน IC และ OC",
      note: "-",
    },
    {
      detail:
        "ในระหว่างที่โดนหมายจับ ผู้ต้องหาจะไม่ได้รับความคุ้มครองจากกฎหมาย",
      note: "-",
    },
    {
      detail:
        "หากมีหมายจับ ตำรวจสามารถยิง Taser หรือ Pump Shotgun ใส่ผู้ต้องหาและเข้าจับกุมได้ทันทีโดยไม่ต้องแสดงตัว",
      note: "หากเปลี่ยนเสื้อผ้าจะถือว่าเป็นการ Breaking Story",
    },
    {
      detail:
        "หากโดนจับได้จากการกระทำผิดกฎหมาย เช่น งานดำหรือสตอรี่ ระหว่างติดคดีหมายจับ จะโดนดำเนินคดีข้อหาฝ่าฝืนหมายจับร่วมด้วย",
      note: "ยกเว้นกรณีโดนดำเนินคดีนั้นไปแล้ว",
    },
    {
      detail:
        "เมื่อติดคดีหมายจับ ผู้ต้องหาต้องรายงานตัวทุก ๆ 30 นาที ที่แชทตำรวจ IC และห้องหมายจับใน Discord (OC)",
      note: "-",
    },
    {
      detail:
        "หากรายงานตัวไม่ครบตามจำนวนที่กำหนดก่อนประเทศรี ต้องเริ่มนับเวลาหมายจับและส่งหลักฐานใหม่ทั้งหมด",
      note: "-",
    },
    {
      detail:
        "กรณีติดคดี 1 ชั่วโมง และรายงานตัวไปแล้ว 5 รอบ แต่ครั้งสุดท้ายประเทศรีก่อนครบ 30 นาที เจ้าหน้าที่จะปิดคดีให้เลย",
      note: "-",
    },
    {
      detail: "การติดคดีหมายจับสูงสุด 72 ชั่วโมง",
      note: "-",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="หมายเรียก / หมายจับ"
        subtitle="หลักเกณฑ์ในการออกและใช้หมายเรียกหรือหมายจับอย่างเหมาะสม"
      />

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
        แนวทางนี้ใช้สำหรับการประกาศหมายเรียกและหมายจับ เพื่อให้การดำเนินคดีของเจ้าหน้าที่ตำรวจมีมาตรฐาน ชัดเจน และตรวจสอบได้
      </div>

      <div className="mt-6 space-y-8">
        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
          <h2 className="mb-4 text-xl font-bold text-cyan-300">หมายเรียก</h2>

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
                  <th className="w-80 border-b border-cyan-400/20 px-4 py-3 text-left">
                    หมายเหตุ
                  </th>
                </tr>
              </thead>

              <tbody>
                {summonsRules.map((rule, index) => (
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

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
          <h2 className="mb-4 text-xl font-bold text-cyan-300">หมายจับ</h2>

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
                  <th className="w-80 border-b border-cyan-400/20 px-4 py-3 text-left">
                    หมายเหตุ
                  </th>
                </tr>
              </thead>

              <tbody>
                {warrantRules.map((rule, index) => (
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

        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-100">
          หมายเหตุ: กรณีที่ไม่อยู่ในกฎ หรือเป็นช่องโหว่ของกฎ จะขึ้นอยู่กับการพิจารณาและดุลยพินิจของ ผบ.ตร. และรอง ผบ.ตร.
        </div>
      </div>
    </section>
  );
}