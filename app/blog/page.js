import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Blogs from "./components/homepage/blogs"; // Import the Blogs component

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
      <Blogs /> {/* Add Blogs component here */}
    </div>
  );
}
