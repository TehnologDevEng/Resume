/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from "./data";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-text-primary selection:bg-primary/30 print:bg-background print:overflow-visible print:min-h-0">
      
      {/* Background glowing effects - hidden on print */}
      <div className="ambient-glow fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none print:hidden" />
      <div className="ambient-glow fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none print:hidden" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 print:max-w-none print:p-0 print:m-0">
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Projects data={portfolioData} />
        <Experience data={portfolioData} />
        
        <footer className="py-8 border-t border-border mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted print:mt-6 print:py-4 print:text-xs">
          <p>© {new Date().getFullYear()} {portfolioData.name}. Резюме и портфолио инженера.</p>
          <div className="flex gap-6">
            <span className="text-text-secondary">{portfolioData.email}</span>
            <span className="text-text-secondary">{portfolioData.phone}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
