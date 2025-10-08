import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Portfolio from '@/components/sections/Portfolio';
import Companies from '@/components/sections/Companies';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Companies />
      <Contact />
      <Footer />
    </main>
  );
}
