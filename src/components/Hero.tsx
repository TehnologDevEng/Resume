import { motion } from "motion/react";
import { Mail, MapPin, Phone, Download, TerminalSquare } from "lucide-react";
import { PortfolioData } from "../types";

interface HeroProps {
  data: PortfolioData;
}

export function Hero({ data }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 text-primary">
          <TerminalSquare className="w-5 h-5" />
        </div>
        <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 uppercase tracking-wider">
          Открыт к предложениям
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
        {data.name}
      </h1>
      
      <h2 className="text-xl md:text-2xl text-text-secondary font-medium mb-6">
        {data.title}
      </h2>

      <p className="text-text-secondary max-w-2xl text-lg leading-relaxed mb-10">
        {data.subtitle}
      </p>

      <div className="flex flex-wrap gap-6 mb-12 text-sm text-text-secondary">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{data.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          <span>{data.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" />
          <a href={`mailto:${data.email}`} className="hover:text-primary transition-colors">
            {data.email}
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        >
          <Download className="w-4 h-4" />
          <span>Скачать резюме (PDF)</span>
        </button>
        <a 
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover text-text-primary border border-border hover:border-border-hover font-medium rounded-xl transition-all"
        >
          <span>Инженерные продукты</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border">
        <div>
          <div className="text-3xl font-bold text-text-primary mb-1">{data.experienceYears}+</div>
          <div className="text-sm text-text-muted">Лет опыта в нефтедобыче</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-text-primary mb-1">{data.productsCount}</div>
          <div className="text-sm text-text-muted">Инженерных продукта</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-text-primary mb-1">12</div>
          <div className="text-sm text-text-muted">Расчётных модулей</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-text-primary mb-1">60+</div>
          <div className="text-sm text-text-muted">Моделей насосов в каталоге</div>
        </div>
      </div>
    </motion.section>
  );
}
