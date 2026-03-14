import SectionHeader from "../../components/ui/SectionHeader";

export default function ContractRules() {
  const rules = [
    {
      detail: "แก๊งสามารถติดต่อทำสัญญากับทางสภาได้",
      note: "ค่าธุรกรรม 20,000 $ / ฉบับ",
    },
    {
      detail: "หากแก๊งต้องการฉีกสัญญา ต้องชำระค่าฉีกสัญญา",
      note: "1,000,000 $ / ฉบับ",
    },
    {
      detail: `ประเภทสัญญาที่สภารับทำ ได้แก่
- สัญญากู้ยืมทั่วไป
- สัญญาระหว่างแก๊งกับแก๊ง
- สัญญาการขึ้นอาวุธหรือสวัสดิการแก๊ง
- สัญญาภายในแก๊ง
- สัญญาแก๊งกับประชาชน`,
      note: "-",
    },
    {
      detail: "สัญญาจะมีผลบังคับใช้จนกว่าทั้ง 2 ฝ่ายจะมาขอฉีกสัญญากับทางสภาโดยตรง",
      note: "-",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl cyber-panel p-6">
      <SectionHeader
        title="การทำสัญญา"
        subtitle="ข้อบังคับของ Olympian สำหรับการจัดทำสัญญาผ่านสภา"
      />

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
        เวลาทำการ: 18.00 – 00.00 น.
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-white/5 p-5">
        <h2 className="mb-4 text-xl font-bold text-cyan-300">การทำสัญญา</h2>

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
              {rules.map((rule, index) => (
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
    </section>
  );
}