import SectionHeader from "../../components/ui/SectionHeader";

export default function MedicalDuty() {
  const categories = [
    {
      title: "เคส Rebel / เคสกักศพ",
      rules: [
        {
          title: "แพทย์ยศสูงพิจารณาให้แพทย์ไปขอคืนผู้สลบ",
          text: "หากไม่ใช่เคสตีกันให้ประกาศขอศพและชุบได้ตามปกติ",
          note: "-",
          punishment: "-",
        },
        {
          title: "หากตำรวจไม่เพียงพอ แพทย์สามารถขอคืนศพได้ทันที",
          text: "อ้างอิงกฎประเทศหมวดกฎสตอรี่",
          note: "-",
          punishment: "-",
        },
        {
          title: "หากเป็นเคสตีกัน แพทย์ต้องแจ้งตำรวจให้เข้าคุมสถานการณ์",
          text: "",
          note: "-",
          punishment: "-",
        },
        {
          title: "กรณีมีการตีกัน แพทย์ต้องรอให้ไฟต์จบก่อนจึงนำศพออกมาได้",
          text: "ยกเว้นสตอรี่ที่ขึ้นกับสภา",
          note: "-",
          punishment: "-",
        },
        {
          title: "สตอรี่ทำร้ายหน่วยงาน ต้องมีแพทย์ + ตำรวจเข้าเวรอย่างน้อย 15 คน",
          text: "ยกเว้นสตอรี่ที่ขึ้นกับสภา",
          note: "-",
          punishment: "-",
        },
        {
          title: "[ห้าม] ทำร้ายเจ้าหน้าที่ที่เข้าไปเอาศพ และห้ามเคลื่อนย้ายศพหลังประกาศขอคืน",
          text: "ยกเว้นอุ้มศพคืนให้หน่วยงาน",
          note: "-",
          punishment: "-",
        },
        {
          title: "ห้ามประชาชนหรือแก๊งชุบศพหน่วยงานในสตอรี่ทุกกรณี",
          text: "อ้างอิงกฎประเทศ",
          note: "-",
          punishment: "-",
        },
        {
          title: "แพทย์จะชุบผู้สลบหน้างานทันที",
          text: "ยกเว้นสตอรี่ไม่ขึ้นกับสภา / ใส่บิลพื้นที่เสี่ยง",
          note: "-",
          punishment: "-",
        },
        {
          title: "กรณีสลบปกติในเรเบล แพทย์เข้าเคสได้โดยไม่ต้องมีตำรวจ",
          text: "ต้องไม่ใช่เคสทะเลาะวิวาท",
          note: "-",
          punishment: "-",
        },
      ],
    },
    {
      title: "เคสสตอรี่แก๊ง / ประชาชน",
      rules: [
        {
          title: "เข้าพื้นที่สตอรี่ผ่านสภา แพทย์ต้องประกาศก่อนเข้าพื้นที่",
          text: "ให้ฝ่ายชนะออกจากพื้นที่ทันที",
          note: "-",
          punishment: "-",
        },
        {
          title: "[ห้าม] แก๊ง/ประชาชนอยู่ในเขตโรงพยาบาลเกิน 10 นาที",
          text: "ออกแล้วห้ามกลับภายใน 10 นาที",
          note: "",
          punishment: "Blacklist ทั้งแก๊ง",
        },
        {
          title: "สตอรี่ที่ขึ้นกับสภา ไม่สามารถฉีดยาได้ทุกกรณี",
          text: "ห้ามฉีดยาก่อนเริ่มสตอรี่ 30 นาที",
          note: "-",
          punishment: "-",
        },
        {
          title: "แพทย์สามารถขอให้ตำรวจเปิดเคอร์ฟิวได้",
          text: "กรณีอุ้มเอ๋อ กักศพ หรือทะเลาะวิวาท",
          note: "-",
          punishment: "-",
        },
        {
          title: "หากมีหน่วยงานสลบ ให้ชุบหน่วยงานก่อนทันที",
          text: "",
          note: "-",
          punishment: "-",
        },
        {
          title: "สตอรี่ขึ้นกับสภา ชุบหน้างาน",
          text: "ถ้าไม่ขึ้นสภา ให้นำไปชุบที่โรงพยาบาลใกล้ที่สุด",
          note: "-",
          punishment: "-",
        },
        {
          title: "[ห้าม] หมออุ้มบุคคลที่มีสตอรี่ หรือช่วยเหลือ",
          text: "",
          note: "-",
          punishment: "-",
        },
        {
          title: "กรณีประชาชนผิดกฎ Blacklist แพทย์สามารถเช็คบัตรได้ทันที",
          text: "",
          note: "-",
          punishment: "-",
        },
        {
          title: "หากยังบลัฟหรือก่อกวนแพทย์ในพื้นที่สตอรี่",
          text: "",
          note: "-",
          punishment: "Blacklist ทันที",
        },
      ],
    },
    {
      title: "พื้นที่งานดำ / พื้นที่สุ่มเสี่ยง",
      rules: [
        {
          title: "พื้นที่งานดำ ได้แก่ จุดขโมยปูน / แคปซูล / จุดขายยา",
          text: "",
          note: "-",
          punishment: "-",
        },
        {
          title: "แพทย์ต้องนำผู้สลบไปชุบที่ สน. ทุกกรณี",
          text: "",
          note: "-",
          punishment: "-",
        },
        {
          title: "หากไม่มีตำรวจเข้าเวร ให้นำไปชุบที่โรงพยาบาล",
          text: "",
          note: "-",
          punishment: "-",
        },
        {
          title: "การชุบในพื้นที่งานดำ เป็นบิลพื้นที่สุ่มเสี่ยง",
          text: "",
          note: "-",
          punishment: "-",
        },
        {
          title: "กรณีผู้สลบในคุกใหญ่ สามารถใช้ฮอได้",
          text: "ต้องมีตำรวจไปด้วย 1 นาย",
          note: "-",
          punishment: "-",
        },
      ],
    },
  ];

  const reportRules = [
    "มี Overlay พร้อมเสียงผู้แจ้งและเสียงในเหตุการณ์",
    "ภาพหรือวิดีโอที่ระบุตัวตนได้ชัดเจน",
  ];

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="กฎการปฏิบัติหน้าที่แพทย์"
        subtitle="แนวทางการช่วยเหลือผู้บาดเจ็บ การประเมินสถานการณ์ และขั้นตอนการปฏิบัติงานของหน่วยแพทย์"
      />

      <div className="space-y-8">
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
                      รายการ
                    </th>
                    <th className="w-72 border-b border-cyan-400/20 px-4 py-3 text-left">
                      หมายเหตุ
                    </th>
                    <th className="w-56 border-b border-cyan-400/20 px-4 py-3 text-left">
                      โทษ
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
                      <td className="border-b border-cyan-400/10 px-4 py-3 text-white">
                        <div className="font-medium">{rule.title}</div>
                        {rule.text && (
                          <div className="mt-1 text-white/75">{rule.text}</div>
                        )}
                      </td>
                      <td className="border-b border-cyan-400/10 px-4 py-3 text-amber-200">
                        {rule.note || "-"}
                      </td>
                      <td className="border-b border-cyan-400/10 px-4 py-3 text-rose-300">
                        {rule.punishment || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
          <h2 className="mb-4 text-xl font-bold text-cyan-300">
            เงื่อนไขการแจ้งการทำผิดกฎ
          </h2>

          <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-200">
            การแจ้งการทำผิดกฎต้องมีหลักฐานที่ชัดเจน ได้แก่
          </div>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/85">
            {reportRules.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="mt-4 rounded-xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-200">
            ไม่รับแจ้งปากเปล่า / ไม่มีพยาน / หลักฐานไม่ชัดเจน
          </div>

          <div className="mt-4 rounded-xl border border-sky-400/20 bg-sky-400/10 p-4 text-sm text-sky-200">
            สามารถแจ้งได้ภายใน 12 ชั่วโมงเท่านั้น และฝ่ายโต้แย้งต้องมีหลักฐานของตนเอง
          </div>
        </div>
      </div>
    </section>
  );
}