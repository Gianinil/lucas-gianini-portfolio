import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';
import { SkipToContent } from '@/components/layout/SkipToContent';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';
import { PageLoader } from '@/components/layout/PageLoader';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Certificates } from '@/components/sections/Certificates';
import { Contact } from '@/components/sections/Contact';

const MIN_LOADER_MS = 500;

function App() {
  useLenis();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();
    function finish() {
      const elapsed = performance.now() - start;
      window.setTimeout(() => setIsLoading(false), Math.max(0, MIN_LOADER_MS - elapsed));
    }

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
      return () => window.removeEventListener('load', finish);
    }
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <PageLoader />}</AnimatePresence>

      <SkipToContent />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
