import { personalData } from "@/utils/data/personal-data";
import AboutSection from "@/components/homepage/about";
import ContactSection from "@/components/homepage/contact";
import Education from "@/components/homepage/education";
import HeroSection from "@/components/homepage/HeroSection";
import Projects from "@/components/homepage/Projects";
import Skills from "@/components/homepage/skills";


async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
