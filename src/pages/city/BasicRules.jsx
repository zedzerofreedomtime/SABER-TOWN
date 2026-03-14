import SectionHeader from "../../components/ui/SectionHeader";

export default function BasicRules() {
  const punishments = [
    "ใบเหลือง: ตักเตือนเบื้องต้น หากกระทำผิดซ้ำจะเลื่อนเป็นใบส้ม",
    "ใบส้ม: ระงับสิทธิ์หรือพักการใช้งานชั่วคราว",
    "ใบแดง: แบนออกจากระบบ",
    "ใบแดงถาวร: แบนถาวร ไม่สามารถกลับมาเล่นได้อีก",
  ];

  const punishmentNotes = [
    "ใบเหลือง 2 ครั้ง = ใบส้ม",
    "ใบส้ม + ใบเหลือง = ใบแดง",
    "ใบแดง 2 ครั้ง = ใบแดงถาวร",
  ];

  const tradeRules = [
    "ของในตู้หรือเงิน สามารถเทรดให้แก๊งได้",
    "ต้องตัดสินใจทันทีเมื่อได้รับใบลงโทษ",
    "ต้องได้รับการยืนยันจากผู้ที่ถูกลงโทษก่อนทุกครั้ง",
  ];

  const roleplayBasics = [
    {
      title: "In Character (IC)",
      description:
        "การพูด การกระทำ และการรับรู้ข้อมูลภายในบทบาทตัวละครเท่านั้น",
    },
    {
      title: "Out Of Character (OOC)",
      description:
        "เรื่องราวนอกบทบาทที่ไม่เกี่ยวข้องกับเหตุการณ์ภายในเมือง",
    },
  ];

  const rules = [
    {
      title: "Power Gaming (PG)",
      description:
        "การกระทำที่ขัดต่อหลัก RolePlay เช่น ใช้บัค ทะลุกำแพง หรือกระทำสิ่งที่มนุษย์ปกติไม่สามารถทำได้",
      punishment: "โทษ: ใบเหลือง",
    },
    {
      title: "Meta Gaming (MG)",
      description: "การนำข้อมูลหรือเรื่องราวจากภายนอกเกมมาใช้ภายในเมือง",
      punishment: "โทษ: ใบเหลือง → ใบแดง",
      extra:
        "ข้อห้ามเพิ่มเติม: ห้ามนำเรื่อง Social ภายนอกมาเกี่ยวข้องกับเมือง หรือโพสต์ใส่ร้ายผู้อื่น",
      extraPunishment: "โทษเพิ่มเติม: ใบแดง + ตัดจบเหตุการณ์",
    },
    {
      title: "Revenge Kill (RK)",
      description:
        "ห้ามจดจำหรือกลับไปแก้แค้นจากเหตุการณ์ที่ตัวละครเสียชีวิตแล้ว",
      punishment: "โทษ: ใบเหลือง",
    },
    {
      title: "Toxic",
      description:
        "ด่าบุพการี หรือ Bully ผู้อื่น / ใช้คำหยาบคายรุนแรงเกินความเหมาะสม",
      punishment:
        "โทษ: ด่าบุพการีหรือ Bully → ใบแดง, ใช้คำหยาบคายรุนแรง → ใบเหลือง + ปรับ 1,500,000",
    },
    {
      title: "Breaking RolePlay",
      description:
        "การเล่นไม่เป็นไปตามสถานการณ์ เช่น ออกจากเกมเพื่อหลบหนี หรือหลีกเลี่ยงบทบาท",
      punishment: "โทษ: ใบเหลือง → ใบแดง",
    },
    {
      title: "Fail RolePlay",
      description:
        "การสวมบทบาทผิดจากความเป็นจริง เช่น เงินติดลบ หรือกระทำสิ่งที่ไม่สมเหตุสมผล",
      punishment: "โทษ: ใบแดง (ไม่สามารถรีใบได้)",
    },
    {
      title: "Drive By (DB)",
      description: "การเจตนาขับรถชนผู้อื่น",
      punishment: "โทษ: ใบเหลือง",
    },
    {
      title: "Safezone",
      description:
        "พื้นที่ปลอดภัย ห้ามใช้ความรุนแรงหรือกระทำการใด ๆ โดยเด็ดขาด",
      punishment: "หมายเหตุ: อ่านรายละเอียดเพิ่มเติมในหมวด Safezone",
    },
    {
      title: "Deathmatch (DM)",
      description:
        "การฆ่าผู้อื่นโดยไม่มีบทบาทหรือเหตุผลทาง RolePlay",
      punishment: "โทษ: ใบแดง",
    },
    {
      title: "Bad Moment",
      description:
        "การก่อดราม่า หรือแสดงอารมณ์รุนแรงเกินความเหมาะสม",
      punishment: "โทษ: ใบแดง (ไม่รีใบ ไม่ปลดไวริส ไม่รีตัว)",
    },
    {
      title: "ห้ามทำพันธมิตร (Alliance)",
      description: "ห้ามร่วมมือกับแก๊งอื่นทุกรูปแบบ",
      punishment: "โทษ: ใบแดง (ไม่รีใบ)",
    },
    {
      title: "Mic Boosting",
      description: "ห้ามตะโกน หรือบูสต์ไมค์เกินความเหมาะสม",
      punishment: "โทษ: ใบเหลือง + ปรับ 1,500,000",
    },
    {
      title: "Bluffing",
      description:
        "ห้ามข่มขู่ กดดัน หรือบลัฟจนทำให้ผู้อื่นรู้สึกไม่ดี",
      punishment: "โทษ: ใบเหลือง → ใบแดง (หากทำซ้ำ)",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl cyber-panel p-6 md:p-8">
      <SectionHeader
        title="กฎพื้นฐาน"
        subtitle="กฎพื้นฐานของเมือง Saber Town สำหรับผู้เล่นทุกคน"
      />

      <div className="mt-6 space-y-6">
        <div className="glow-box rounded-2xl p-5">
          <h3 className="text-xl font-bold text-white">กฎพื้นฐานของเมือง Saber Town</h3>
          <p className="mt-3 leading-7 text-green-100/75">
            กฎพื้นฐานของ Saber Town ถูกจัดทำขึ้นเพื่อให้ผู้เล่นทุกคนสามารถโรลเพลย์ร่วมกันได้อย่างสนุก
            ยุติธรรม และสมจริง หากฝ่าฝืนจะมีบทลงโทษตามที่กำหนด
          </p>
        </div>

        <div className="glow-box rounded-2xl p-5">
          <h3 className="text-xl font-bold text-white">ประเภทของโทษ</h3>
          <ul className="mt-4 space-y-2 text-green-100/75">
            {punishments.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          <h4 className="mt-5 text-lg font-semibold text-cyan-300">หมายเหตุการนับใบ</h4>
          <ul className="mt-3 space-y-2 text-green-100/75">
            {punishmentNotes.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="glow-box rounded-2xl p-5">
          <h3 className="text-xl font-bold text-white">การเทรดของในกรณีถูกลงโทษ</h3>
          <ul className="mt-4 space-y-2 text-green-100/75">
            {tradeRules.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="glow-box rounded-2xl p-5">
          <h3 className="text-xl font-bold text-white">กฎ RolePlay พื้นฐานของเมือง Saber Town</h3>
          <p className="mt-3 leading-7 text-green-100/75">
            RolePlay (RP) คือ การสวมบทบาทเป็นตัวละครในเกม โดยยึดหลักความสมจริงตามชีวิตจริง
            และต้องปฏิบัติตามกฎของเซิร์ฟเวอร์อย่างเคร่งครัด
          </p>

          <div className="mt-4 space-y-3">
            {roleplayBasics.map((item, i) => (
              <div key={i} className="rounded-xl border border-green-400/20 bg-black/20 p-4">
                <h4 className="font-semibold text-cyan-300">{item.title}</h4>
                <p className="mt-1 text-green-100/75">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-green-100/75">
            หมายเหตุ: การพูด OOC สามารถทำได้เฉพาะกรณีจำเป็น ต้องขออนุญาตก่อน และไม่เกิน 3 คน
          </p>
          <p className="mt-2 font-semibold text-red-300">
            โทษ: ใบเหลือง + ปรับ 1,000,000 → ใบแดง
          </p>
        </div>

        <div className="glow-box rounded-2xl p-5">
          <h3 className="text-xl font-bold text-white">
            การกระทำที่ขัดต่อหลัก RolePlay (ห้ามกระทำ)
          </h3>

          <div className="mt-4 space-y-4">
            {rules.map((rule, i) => (
              <div
                key={i}
                className="rounded-2xl border border-green-400/20 bg-black/20 p-4"
              >
                <h4 className="text-lg font-bold text-cyan-300">
                  {i + 1}. {rule.title}
                </h4>
                <p className="mt-2 leading-7 text-green-100/75">{rule.description}</p>

                {rule.extra && (
                  <p className="mt-2 text-yellow-200/90">{rule.extra}</p>
                )}

                <p className="mt-3 font-semibold text-red-300">{rule.punishment}</p>

                {rule.extraPunishment && (
                  <p className="mt-1 font-semibold text-red-300">{rule.extraPunishment}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}