import { motion } from "motion/react";
import { Mail, MapPin, Phone, Download, TerminalSquare } from "lucide-react";
import { PortfolioData } from "../types";

interface HeroProps {
  data: PortfolioData;
}

export function Hero({ data }: HeroProps) {
  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = `Резюме - ${data.name} - ${data.title}`;
    window.print();
    // restore title after print dialog closes
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16 md:pt-32 md:pb-24 print:pt-0 print:pb-4 print:bg-white"
    >
      <div className="flex items-center gap-3 mb-6 print:mb-2">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 text-primary print:w-7 print:h-7 print:bg-[#EFF6FF] print:border-[#BFDBFE] print:text-[#1D4ED8]">
          <TerminalSquare className="w-5 h-5 print:w-4 print:h-4" />
        </div>
        <div className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 uppercase tracking-wider print:text-[10px] print:px-2 print:py-0.5 print:bg-[#EFF6FF] print:text-[#1D4ED8] print:border-[#BFDBFE]">
          Инженерное резюме
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight print:text-2xl print:mb-1 text-text-primary print:text-[#0F172A]">
        {data.name}
      </h1>
      
      <h2 className="text-xl md:text-2xl text-text-secondary font-medium mb-6 print:text-base print:mb-2 print:text-[#1D4ED8] print:font-semibold">
        {data.title}
      </h2>

      <p className="text-text-secondary max-w-2xl text-lg leading-relaxed mb-10 print:text-xs print:max-w-none print:mb-3 print:text-[#334155] print:leading-normal">
        {data.subtitle}
      </p>

      <div className="flex flex-wrap gap-6 mb-12 text-sm text-text-secondary print:gap-4 print:mb-3 print:text-[11px] print:text-[#334155]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary print:w-3.5 print:h-3.5 print:text-[#1D4ED8]" />
          <span className="print:text-[#334155]">{data.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary print:w-3.5 print:h-3.5 print:text-[#1D4ED8]" />
          <span className="print:text-[#334155]">{data.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary print:w-3.5 print:h-3.5 print:text-[#1D4ED8]" />
          <a href={`mailto:${data.email}`} className="hover:text-primary transition-colors print:text-[#334155]">
            {data.email}
          </a>
        </div>
      </div>

      {/* Buttons hidden on print */}
      <div className="flex flex-wrap gap-4 print:hidden">
        <button 
          onClick={handlePrint}
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border print:mt-3 print:pt-3 print:gap-2.5">
        <div className="print:bg-[#F8FAFC] print:p-2.5 print:rounded-lg print:border print:border-[#CBD5E1]">
          <div className="text-3xl font-bold text-text-primary mb-1 print:text-lg print:text-[#1D4ED8]">{data.experienceYears}+</div>
          <div className="text-sm text-text-muted print:text-[10.5px] print:text-[#475569]">Лет опыта в нефтедобыче</div>
        </div>
        <div className="print:bg-[#F8FAFC] print:p-2.5 print:rounded-lg print:border print:border-[#CBD5E1]">
          <div className="text-3xl font-bold text-text-primary mb-1 print:text-lg print:text-[#1D4ED8]">{data.productsCount}</div>
          <div className="text-sm text-text-muted print:text-[10.5px] print:text-[#475569]">Инженерных продукта</div>
        </div>
        <div className="print:bg-[#F8FAFC] print:p-2.5 print:rounded-lg print:border print:border-[#CBD5E1]">
          <div className="text-3xl font-bold text-text-primary mb-1 print:text-lg print:text-[#1D4ED8]">12</div>
          <div className="text-sm text-text-muted print:text-[10.5px] print:text-[#475569]">Расчётных модулей</div>
        </div>
        <div className="print:bg-[#F8FAFC] print:p-2.5 print:rounded-lg print:border print:border-[#CBD5E1]">
          <div className="text-3xl font-bold text-text-primary mb-1 print:text-lg print:text-[#1D4ED8]">60+</div>
          <div className="text-sm text-text-muted print:text-[10.5px] print:text-[#475569]">Моделей насосов в каталоге</div>
        </div>
      </div>
    </motion.section>
  );
}
