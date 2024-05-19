import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <main className="min-h-[90vh] h-full w-full overflow-hidden">
      <div className="flex flex-col gap-20">
        <HeroContent/>
      </div>
    </main>
  );
}
