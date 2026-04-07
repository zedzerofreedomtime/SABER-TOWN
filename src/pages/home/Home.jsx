import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div
        className="cyber-panel p-5 sm:p-6 md:p-8"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-cyan-300/80 sm:text-sm sm:tracking-[0.35em]">
          FiveM Roleplay Rules
        </p>

        <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl md:text-5xl">
          SABER TOWN RULES SYSTEM
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-green-100/75 sm:text-base">
          ศูนย์รวมกฎระเบียบของเมืองสำหรับผู้เล่นทั่วไป หน่วยแพทย์ หน่วยตำรวจ
          และสภา ในรูปแบบเว็บไซเบอร์พังค์โทนเขียวดำ
          แยกหมวดชัด อ่านง่าย และเปิดใช้งานได้ทั้งคอมและมือถือ
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="glow-box rounded-2xl p-4">
            <h3 className="text-base font-bold text-white sm:text-lg">เกี่ยวกับเมือง</h3>
            <p className="mt-2 text-sm text-green-100/70 sm:text-base">
              รวมกฎพื้นฐาน กฎเมือง และกฎกิจกรรม
            </p>
          </div>

          <div className="glow-box rounded-2xl p-4">
            <h3 className="text-base font-bold text-white sm:text-lg">กฎแพทย์</h3>
            <p className="mt-2 text-sm text-green-100/70 sm:text-base">
              รวมระเบียบแพทย์ การปฏิบัติหน้าที่ และค่ารักษา
            </p>
          </div>

          <div className="glow-box rounded-2xl p-4">
            <h3 className="text-base font-bold text-white sm:text-lg">กฎตำรวจ</h3>
            <p className="mt-2 text-sm text-green-100/70 sm:text-base">
              รวมกฎพื้นฐาน งานตำรวจ หมายจับ วินัย และค่าปรับ
            </p>
          </div>

          <div className="glow-box rounded-2xl p-4">
            <h3 className="text-base font-bold text-white sm:text-lg">กฎสภา</h3>
            <p className="mt-2 text-sm text-green-100/70 sm:text-base">
              รวมธุรกรรมสภา กฎแก๊ง สตอรี่ และสัญญา
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/city" className="rounded-full bg-green-400 px-5 py-3 text-center text-sm font-semibold text-black transition hover:scale-105 sm:text-base">
            เริ่มจากกฎเมือง
          </Link>

          <Link to="/medical" className="rounded-full border border-green-400/30 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-green-200 transition hover:bg-green-400/10 sm:text-base">
            ดูหมวดแพทย์
          </Link>
        </div>
      </motion.div>

      <motion.aside
        className="space-y-6"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="cyber-panel p-5 sm:p-6">
          <h3 className="text-lg font-bold text-white sm:text-xl">สถานะระบบ</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="glow-box flex items-center justify-between gap-3 rounded-xl px-4 py-3">
              <span>Theme</span>
              <span className="text-right text-cyan-300">Cyber Green</span>
            </div>
            <div className="glow-box flex items-center justify-between gap-3 rounded-xl px-4 py-3">
              <span>Mode</span>
              <span className="text-right text-cyan-300">Roleplay Archive</span>
            </div>
            <div className="glow-box flex items-center justify-between gap-3 rounded-xl px-4 py-3">
              <span>Data</span>
              <span className="text-right text-cyan-300">Separated by category</span>
            </div>
          </div>
        </div>

        <div className="cyber-panel p-5 sm:p-6">
          <h3 className="text-lg font-bold text-white sm:text-xl">คำแนะนำ</h3>
          <ul className="mt-4 space-y-3 text-sm text-green-100/75 sm:text-base">
            <li>• ผู้เล่นใหม่ควรอ่านกฎพื้นฐานก่อนเสมอ</li>
            <li>• เจ้าหน้าที่ควรอ่านกฎหน่วยงานของตัวเองให้ครบ</li>
            <li>• ห้ามอ้างว่าไม่รู้กฎหลังเกิดเหตุการณ์</li>
            <li>• ทุกการกระทำต้องคงคุณภาพของ Roleplay</li>
          </ul>
        </div>
      </motion.aside>
    </section>
  );
}
