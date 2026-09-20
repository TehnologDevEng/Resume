/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from "./data";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { PrintResume } from "./components/PrintResume";

export default function App() {
  return (
    <>
      {/* Interactive Web Dashboard (Visible on screen, hidden on print) */}
      <div className="min-h-screen bg-background relative overflow-hidden text-text-primary selection:bg-primary/30 print:hidden">
        {/* Background glowing effects */}
        <div className="ambient-glow fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="ambient-glow fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <Hero data={portfolioData} />
          <About data={portfolioData} />
          <Projects data={portfolioData} />
          <Experience data={portfolioData} />
          
          <footer className="py-8 border-t border-border mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
            <p>© {new Date().getFullYear()} {portfolioData.name}. Резюме и портфолио инженера УЭЦН.</p>
            <div className="flex gap-6">
              <span className="text-text-secondary">{portfolioData.email}</span>
              <span className="text-text-secondary">{portfolioData.phone}</span>
            </div>
          </footer>
        </div>
      </div>

      {/* Dedicated Print Resume (Hidden on screen, active on print) */}
      <div className="hidden print:block bg-white text-[#0F172A] w-full">
        <PrintResume data={portfolioData} />
      </div>
    </>
  );
}
