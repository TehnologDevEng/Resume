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
      className="py-16 border-t border-border"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h3 className="text-3xl font-bold mb-3">Инженерные продукты</h3>
          <p className="text-text-secondary">Инструменты, которые закрывают ежедневные задачи технолога УЭЦН.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card flex flex-col overflow-hidden group"
          >
            <div className="p-8 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    {proj.status}
                  </span>
                </div>
                <button className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center text-text-muted group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              
              <h4 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                {proj.title}
              </h4>
              <p className="text-sm text-primary mb-4 font-medium">{proj.subtitle}</p>
              
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {proj.description}
              </p>

              <div className="space-y-3 mb-6">
                {proj.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Activity className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="px-8 py-5 bg-surface-hover/50 border-t border-border mt-auto">
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
