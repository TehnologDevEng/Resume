import { motion } from "motion/react";
import { ArrowUpRight, Activity } from "lucide-react";
import { PortfolioData } from "../types";

interface ProjectsProps {
  data: PortfolioData;
}

export function Projects({ data }: ProjectsProps) {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 border-t border-border print:py-4 print:border-t print:break-before-page"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 print:mb-3">
        <div>
          <h3 className="text-3xl font-bold mb-3 print:text-xl print:mb-1 text-text-primary print:text-[#0F172A]">Инженерные продукты</h3>
          <p className="text-text-secondary print:text-xs print:text-[#475569]">Инструменты, которые закрывают ежедневные задачи технолога УЭЦН.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-1 print:gap-3">
        {data.projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card flex flex-col overflow-hidden group print:break-inside-avoid print:rounded-lg print:border print:border-[#CBD5E1] print:bg-[#F8FAFC]"
          >
            <div className="p-8 flex-1 print:p-3.5 print:grid print:grid-cols-[1.1fr_1fr] print:gap-4">
              <div>
                <div className="flex justify-between items-start mb-4 print:mb-1">
                  <div className="flex gap-2 mb-2 print:mb-0">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 print:text-[10px] print:px-2 print:py-0 print:bg-[#EFF6FF] print:text-primary print:border-[#BFDBFE]">
                      {proj.status}
                    </span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-text-muted group-hover:text-primary group-hover:bg-primary/10 transition-colors print:hidden">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
                
                <h4 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors print:text-base print:mb-0.5 print:text-[#0F172A]">
                  {proj.title}
                </h4>
                <p className="text-sm text-primary mb-4 font-medium print:text-xs print:mb-1.5 print:text-primary">{proj.subtitle}</p>
                
                <p className="text-text-secondary text-sm mb-6 leading-relaxed print:text-[11px] print:mb-2.5 print:leading-snug print:text-[#334155]">
                  {proj.description}
                </p>

                <div className="hidden print:flex flex-wrap gap-1">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-mono text-[#475569] bg-[#FFFFFF] px-1.5 py-0.5 rounded border border-[#CBD5E1]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-6 print:space-y-1 print:mb-0 print:border-l print:border-[#E2E8F0] print:pl-3">
                <div className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider hidden print:block mb-1">Функционал и возможности:</div>
                {proj.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-text-secondary print:text-[10.5px] print:gap-1.5 print:text-[#334155]">
                    <Activity className="w-4 h-4 text-primary shrink-0 mt-0.5 print:w-3 print:h-3 print:text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="px-8 py-5 bg-surface-hover/50 border-t border-border mt-auto print:hidden">
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-text-muted bg-background/50 px-2.5 py-1 rounded-md border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
