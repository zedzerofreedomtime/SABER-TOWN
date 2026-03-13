import SectionHeader from "../../components/ui/SectionHeader";
import CategoryCard from "../../components/ui/CategoryCard";
import { medicalCategories } from "../../data/menuData";

export default function MedicalPage() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-6 inline-flex rounded-2xl border border-cyan-400/20 bg-[#0b1220]/90 px-5 py-3 text-xl font-bold text-white">
        กฎแพทย์
      </div>

      <div className="cyber-panel p-5 md:p-6">
        <SectionHeader title="หมวดกฎแพทย์" subtitle="รวมระเบียบแพทย์ การปฏิบัติหน้าที่ การลงโทษ และค่ารักษาพยาบาล" />
        <div className="grid gap-4">{medicalCategories.map((item, i) => <CategoryCard key={i} title={item.title} path={item.path} />)}</div>
      </div>
    </section>
  );
}