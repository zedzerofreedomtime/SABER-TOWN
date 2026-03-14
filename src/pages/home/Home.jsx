import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDiscord, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Home() {
  const socials = [
    {
      name: "DISCORD",
      label: "Follow",
      href: "https://discord.gg/mMPvqhmSPe",
      icon: <FaDiscord />,
      glow: "from-cyan-400/20 via-emerald-400/10 to-transparent",
      iconGlow: "shadow-[0_0_20px_rgba(34,211,238,0.35)]",
    },
    {
      name: "TIKTOK",
      label: "Follow",
      href: "https://www.tiktok.com/@yamizaza008?lang=th-TH",
      icon: <FaTiktok />,
      glow: "from-emerald-400/20 via-green-400/10 to-transparent",
      iconGlow: "shadow-[0_0_20px_rgba(16,185,129,0.35)]",
    },
    {
      name: "FACEBOOK",
      label: "Follow",
      href: "https://www.facebook.com/profile.php?id=61574685917639&locale=th_TH",
      icon: <FaFacebookF />,
      glow: "from-lime-400/20 via-emerald-400/10 to-transparent",
      iconGlow: "shadow-[0_0_20px_rgba(132,204,22,0.35)]",
    },
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div
        className="cyber-panel p-6 md:p-8"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="mb-2 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
          FiveM Roleplay Rules
        </p>

        <h2 className="text-3xl font-black text-white md:text-5xl">
          SABER TOWN RULES SYSTEM
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-green-100/75">
          
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
              รวมธุรกรรมสภา กฎแก๊ง สตอรี่ และสัญญา
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-emerald-400/20 pt-4 text-sm text-green-100/55">
          © Saber Town RP 2026 – Created by Pegasus Team
        </div>
      </motion.div>

      <motion.aside
        className="space-y-6"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <section className="relative overflow-hidden rounded-[30px] border border-emerald-400/30 bg-black/70 p-5 backdrop-blur-md shadow-[0_0_35px_rgba(16,185,129,0.14)]">
          <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(132,204,22,0.12),transparent_30%)]" />

          <div className="pointer-events-none absolute inset-[1px] rounded-[29px] border border-cyan-400/10" />

          <div className="relative grid grid-cols-1 gap-4">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[22px] border border-emerald-400/35 bg-[linear-gradient(180deg,rgba(3,18,15,0.95),rgba(0,8,7,0.95))] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative flex items-center gap-4">
                  <div
                    className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-black/40 text-[1.8rem] text-emerald-400 ${item.iconGlow} transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-emerald-400/10 blur-md" />
                    <span className="relative z-10">{item.icon}</span>
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium tracking-wide text-emerald-200/75 transition-colors duration-300 group-hover:text-cyan-200">
                      {item.label}
                    </p>
                    <h3 className="truncate text-2xl font-extrabold uppercase tracking-[0.12em] text-emerald-400 transition-all duration-300 group-hover:text-cyan-300">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="absolute bottom-0 left-5 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-400 transition-all duration-300 group-hover:w-[55%]" />
              </a>
            ))}
          </div>
        </section>

        <div className="cyber-panel p-6">
          <h3 className="text-xl font-bold text-white">คำแนะนำ</h3>
          <ul className="mt-4 space-y-3 text-green-100/75">
            <li>• ผู้เล่นใหม่ควรอ่านกฎพื้นฐานก่อนเสมอ</li>
            <li>• ห้ามอ้างว่าไม่รู้กฎหลังเกิดเหตุการณ์</li>
            <li>• คำตัดสินของทีมงานถือเป็นที่สุด</li>
          </ul>
        </div>
      </motion.aside>
    </section>
  );
}