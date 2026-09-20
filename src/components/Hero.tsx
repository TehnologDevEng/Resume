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
      className="pt-24 pb-16 md:pt-32 md:pb-24 print:pt-0 print:pb-4"
    >
      <div className="flex items-center gap-3 mb-6 print:mb-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 text-primary print:w-8 print:h-8">
          <TerminalSquare className="w-5 h-5 print:w-4 print:h-4" />
        </div>
        <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 uppercase tracking-wider">
          Инженерное резюме
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight print:text-3xl print:mb-2 text-text-primary">
        {data.name}
      </h1>
      
      <h2 className="text-xl md:text-2xl text-text-secondary font-medium mb-6 print:text-lg print:mb-3">
        {data.title}
      </h2>

      <p className="text-text-secondary max-w-2xl text-lg leading-relaxed mb-10 print:text-sm print:max-w-none print:mb-4">
        {data.subtitle}
      </p>

      <div className="flex flex-wrap gap-6 mb-12 text-sm text-text-secondary print:gap-4 print:mb-4 print:text-xs">
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

      {/* Buttons hidden on print */}
      <div className="flex flex-wrap gap-4 print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] cursor-pointer"
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border print:mt-4 print:pt-4 print:gap-2">
        <div className="print:bg-surface/50 print:p-2 print:rounded-lg print:border print:border-border">
          <div className="text-3xl font-bold text-text-primary mb-1 print:text-xl">{data.experienceYears}+</div>
          <div className="text-sm text-text-muted print:text-[11px]">Лет опыта в нефтедобыче</div>
        </div>
        <div className="print:bg-surface/50 print:p-2 print:rounded-lg print:border print:border-border">
          <div className="text-3xl font-bold text-text-primary mb-1 print:text-xl">{data.productsCount}</div>
          <div className="text-sm text-text-muted print:text-[11px]">Инженерных продукта</div>
        </div>
        <div className="print:bg-surface/50 print:p-2 print:rounded-lg print:border print:border-border">
          <div className="text-3xl font-bold text-text-primary mb-1 print:text-xl">12</div>
          <div className="text-sm text-text-muted print:text-[11px]">Расчётных модулей</div>
        </div>
        <div className="print:bg-surface/50 print:p-2 print:rounded-lg print:border print:border-border">
          <div className="text-3xl font-bold text-text-primary mb-1 print:text-xl">60+</div>
          <div className="text-sm text-text-muted print:text-[11px]">Моделей насосов в каталоге</div>
        </div>
      </div>
    </motion.section>
  );
}
