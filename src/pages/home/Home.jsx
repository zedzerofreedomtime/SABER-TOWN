import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="cyber-panel p-6 md:p-8">
        <p className="mb-2 text-sm uppercase tracking-[0.35em] text-green-300/80">
          FiveM Roleplay Rules
        </p>

        <h2 className="text-3xl font-black text-white md:text-5xl">
          SABER TOWN RULES SYSTEM
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-green-100/75">
          ศูนย์รวมกฎระเบียบของเมืองสำหรับผู้เล่นทั่วไป หน่วยแพทย์ หน่วยตำรวจ และสภา
          ในรูปแบบเว็บไซเบอร์พังค์โทนเขียวดำ พร้อมเส้น RGB และแยกหมวดชัดเจน
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="glow-box rounded-2xl p-4">
            <h3 className="text-lg font-bold text-white">เกี่ยวกับเมือง</h3>
            <p className="mt-2 text-green-100/70">
              รวมกฎพื้นฐาน กฎเมือง และกฎกิจกรรม
            </p>
          </div>

          <div className="glow-box rounded-2xl p-4">
            <h3 className="text-lg font-bold text-white">กฎแพทย์</h3>
            <p className="mt-2 text-green-100/70">
              รวมระเบียบแพทย์ การปฏิบัติหน้าที่ และค่ารักษา
            </p>
          </div>

          <div className="glow-box rounded-2xl p-4">
            <h3 className="text-lg font-bold text-white">กฎตำรวจ</h3>
            <p className="mt-2 text-green-100/70">
              รวมกฎพื้นฐาน งานตำรวจ หมายจับ วินัย และค่าปรับ
            </p>
          </div>

          <div className="glow-box rounded-2xl p-4">
            <h3 className="text-lg font-bold text-white">กฎสภา</h3>
            <p className="mt-2 text-green-100/70">
              รวมธุรกรรมสภา กฎแก๊ง สตอรี่ และการทำสัญญา
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/city"
            className="rounded-full bg-green-400 px-5 py-3 font-semibold text-black transition hover:scale-105"
          >
            เริ่มจากกฎเมือง
          </Link>

          <Link
            to="/medical"
            className="rounded-full border border-green-400/30 bg-white/5 px-5 py-3 font-semibold text-green-200 transition hover:bg-green-400/10"
          >
            ดูหมวดแพทย์
          </Link>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="cyber-panel p-6">
          <h3 className="text-xl font-bold text-white">สถานะระบบ</h3>

          <div className="mt-4 space-y-3 text-sm">
            <div className="glow-box flex items-center justify-between rounded-xl px-4 py-3">
              <span>Theme</span>
              <span className="text-green-300">Cyber Green</span>
            </div>

            <div className="glow-box flex items-center justify-between rounded-xl px-4 py-3">
              <span>Mode</span>
              <span className="text-green-300">Roleplay Archive</span>
            </div>

            <div className="glow-box flex items-center justify-between rounded-xl px-4 py-3">
              <span>RGB Border</span>
              <span className="text-green-300">Online</span>
            </div>
          </div>
        </div>

        <div className="cyber-panel p-6">
          <h3 className="text-xl font-bold text-white">คำแนะนำ</h3>

          <ul className="mt-4 space-y-3 text-green-100/75">
            <li>• ผู้เล่นใหม่ควรอ่านกฎพื้นฐานก่อนเสมอ</li>
            <li>• เจ้าหน้าที่ควรอ่านกฎหน่วยงานของตัวเองให้ครบ</li>
            <li>• ห้ามอ้างว่าไม่รู้กฎหลังเกิดเหตุการณ์</li>
            <li>• ทุกการกระทำต้องคงคุณภาพของ Roleplay</li>
          </ul>
        </div>
      </aside>
    </section>
  );
}