import HomeHero from "@/components/HomeHero";
import StorySection from "@/components/StorySection";
import RoomsPreview from "@/components/RoomsPreview";
import LoungeBreak from "@/components/LoungeBreak";
import PackagesTeaser from "@/components/PackagesTeaser";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <StorySection />
      <RoomsPreview />
      <LoungeBreak />
      <PackagesTeaser />
      <CtaBanner />
    </main>
  );
}
