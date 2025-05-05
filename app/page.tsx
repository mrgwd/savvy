import CardShowcase from "@/components/layout/card-showcase";
import DownloadSection from "@/components/layout/download-section";
import Footer from "@/components/layout/footer";
import HeroSsction from "@/components/layout/hero-section";
import ProblemAndSolution from "@/components/layout/problem-and-solution";
import CursorEffect from "@/components/ui/cursor-effect";

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-40">
      <CursorEffect />
      <HeroSsction />
      <ProblemAndSolution />
      <CardShowcase />
      <DownloadSection />
      <Footer />
    </main>
  );
}
