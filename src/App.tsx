/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem, Features } from './components/Sections';
import { Solution, LiveDemo, DemoVideoSection, Architecture, TechStack } from './components/Technical';
import { TheStory, Footer } from './components/FooterStory';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-primary selection:bg-brand-primary selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <LiveDemo />
        <DemoVideoSection />
        <Architecture />
        <TechStack />
        <TheStory />
      </main>

      <Footer />
    </div>
  );
}
