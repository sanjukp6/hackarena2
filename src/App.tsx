import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Themes } from '@/components/Themes';
import { Timeline } from '@/components/Timeline';
import { Prizes } from '@/components/Prizes';
import { Team } from '@/components/Team';
import { Sponsors } from '@/components/Sponsors';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { ParticleCursor } from '@/components/ParticleCursor';
import { FloatingCode } from '@/components/FloatingCode';
import { FAQ } from '@/components/FAQ';

export function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particle cursor effect */}
      <ParticleCursor />

      {/* Floating code background */}
      <FloatingCode />

      {/* Scanlines overlay for retro effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Themes />
        <Timeline />
        <Prizes />
        <Sponsors />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  );
}
