import SectionHeader from "../../components/ui/SectionHeader";
import CategoryCard from "../../components/ui/CategoryCard";
import { policeCategories } from "../../data/menuData";

export default function PolicePage() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-6 inline-flex rounded-2xl border border-cyan-400/20 bg-[#0b1220]/90 px-5 py-3 text-xl font-bold text-white">
        กฎตำรวจ
      </div>

      <div className="cyber-panel p-5 md:p-6">
        <SectionHeader
          title="หมวดกฎตำรวจ"
          subtitle="รวมกฎพื้นฐานตำรวจ แนวปฏิบัติงาน หมายจับ วินัย และค่าปรับ"
        />

        <div className="grid gap-4">
          {policeCategories.map((item, i) => (
            <CategoryCard
              key={i}
              title={item.title}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}