import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { PortfolioData } from "../types";

interface ExperienceProps {
  data: PortfolioData;
}

export function Experience({ data }: ExperienceProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-16 border-t border-border print:py-4 print:border-t print:break-before-page"
    >
      <div className="grid lg:grid-cols-2 gap-16 print:grid-cols-2 print:gap-6">
        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8 print:mb-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary print:p-1 print:bg-[#EFF6FF] print:text-primary">
              <Briefcase className="w-5 h-5 print:w-4 print:h-4" />
            </div>
            <h3 className="text-2xl font-bold print:text-lg text-text-primary print:text-[#0F172A]">Опыт работы</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent print:space-y-3 print:before:hidden">
            {data.experience.map((exp, idx) => (
              <div key={exp.id} className="relative flex items-start pl-8 md:pl-0 print:pl-0 print:break-inside-avoid">
                <div className="hidden md:flex flex-col w-32 shrink-0 items-end pt-1 pr-6 text-sm text-text-muted print:hidden">
                  {exp.period}
                </div>
                
                <div className="absolute left-0 md:left-32 md:-ml-2.5 top-1.5 w-5 h-5 rounded-full border-4 border-background bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 print:hidden" />

                <div className="md:pl-6 flex-1 print:p-0">
                  <div className="glass-card p-6 glass-card-hover group print:p-3 print:rounded-lg print:border print:border-[#CBD5E1] print:bg-[#F8FAFC]">
                    <div className="text-xs text-text-muted mb-1 font-mono print:text-[10px] print:text-[#475569]">{exp.period}</div>
                    <h4 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors print:text-sm print:text-[#0F172A]">
                      {exp.role}
                    </h4>
                    <div className="text-sm text-primary mb-3 print:text-xs print:mb-2 print:text-[#1D4ED8]">{exp.company} • {exp.location}</div>
                    <ul className="space-y-2 print:space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2 print:text-xs print:text-[#334155]">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0 print:w-1 print:h-1 print:bg-[#1D4ED8]" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8 print:mb-3">
            <div className="p-2 bg-success/10 rounded-lg text-success print:p-1 print:bg-[#ECFDF5] print:text-[#047857]">
              <GraduationCap className="w-5 h-5 print:w-4 print:h-4" />
            </div>
            <h3 className="text-2xl font-bold print:text-lg text-text-primary print:text-[#0F172A]">Образование</h3>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent print:space-y-2.5 print:before:hidden">
            {data.education.map((edu, idx) => (
              <div key={edu.id} className="relative flex items-start pl-8 print:pl-0 print:break-inside-avoid">
                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-background bg-success shadow-[0_0_10px_rgba(34,197,94,0.3)] z-10 print:hidden" />

                <div className="glass-card p-6 w-full glass-card-hover print:p-3 print:rounded-lg print:border print:border-[#CBD5E1] print:bg-[#F8FAFC]">
                  <div className="text-xs text-text-muted mb-1 font-mono print:text-[10px] print:text-[#047857] print:font-semibold">{edu.year}</div>
                  <h4 className="text-base font-bold text-text-primary mb-1 print:text-sm print:text-[#0F172A]">
                    {edu.degree}
                  </h4>
                  <div className="text-sm text-text-secondary print:text-xs print:text-[#475569]">{edu.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
