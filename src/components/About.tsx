import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { PortfolioData } from "../types";

interface AboutProps {
  data: PortfolioData;
}

export function About({ data }: AboutProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 border-t border-border print:py-4 print:border-t"
    >
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 print:grid-cols-[1fr_1.8fr] print:gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-4 print:text-lg print:mb-2 text-text-primary">Обо мне</h3>
          <p className="text-text-secondary leading-relaxed print:text-xs print:leading-normal">
            {data.about}
          </p>
        </div>
        
        <div className="glass-card p-8 print:p-4 print:break-inside-avoid">
          <h4 className="text-lg font-bold mb-6 text-text-primary print:text-sm print:mb-3">Ключевые компетенции</h4>
          <div className="grid sm:grid-cols-2 gap-4 print:gap-2">
            {data.competencies.map((comp, idx) => (
              <div key={idx} className="flex items-start gap-3 print:gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 print:w-3.5 print:h-3.5" />
                <span className="text-sm text-text-secondary leading-tight print:text-xs">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
