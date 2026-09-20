import React from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Cpu, 
  Award 
} from "lucide-react";
import { PortfolioData } from "../types";

interface PrintResumeProps {
  data: PortfolioData;
}

export function PrintResume({ data }: PrintResumeProps) {
  return (
    <div className="w-full bg-white text-[#0F172A] leading-tight text-[11px]">
      {/* ================= PAGE 1 ================= */}
      <div className="min-h-[265mm] flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#1D4ED8] pb-3 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-[#0F172A] uppercase">
                  {data.name}
                </h1>
                <h2 className="text-sm font-semibold text-[#1D4ED8] mt-0.5">
                  {data.title}
                </h2>
                <p className="text-[10px] text-[#475569] mt-1 max-w-xl">
                  {data.subtitle}
                </p>
              </div>
              <div className="text-right text-[10px] text-[#334155] space-y-1 bg-[#F8FAFC] p-2.5 rounded-lg border border-[#CBD5E1]">
                <div className="flex items-center justify-end gap-1.5 font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>{data.phone}</span>
                </div>
                <div className="flex items-center justify-end gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>{data.email}</span>
                </div>
                <div className="flex items-center justify-end gap-1.5 text-[#64748B]">
                  <MapPin className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>{data.location}</span>
                </div>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-4 gap-2.5 mt-3 pt-2.5 border-t border-[#E2E8F0]">
              <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded p-1.5 text-center">
                <div className="text-base font-bold text-[#1D4ED8]">{data.experienceYears}+ лет</div>
                <div className="text-[9px] text-[#64748B]">Стаж в нефтедобыче</div>
              </div>
              <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded p-1.5 text-center">
                <div className="text-base font-bold text-[#1D4ED8]">{data.productsCount} продукта</div>
                <div className="text-[9px] text-[#64748B]">Инженерное ПО</div>
              </div>
              <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded p-1.5 text-center">
                <div className="text-base font-bold text-[#1D4ED8]">12 модулей</div>
                <div className="text-[9px] text-[#64748B]">Расчётов технолога</div>
              </div>
              <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded p-1.5 text-center">
                <div className="text-base font-bold text-[#1D4ED8]">60+ моделей</div>
                <div className="text-[9px] text-[#64748B]">База насосов УЭЦН</div>
              </div>
            </div>
          </div>

          {/* About & Competencies */}
          <div className="grid grid-cols-[1.1fr_1.4fr] gap-3 mb-3.5">
            <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#CBD5E1]">
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#0F172A] mb-1.5">
                <Award className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Обо мне</span>
              </div>
              <p className="text-[10px] text-[#334155] leading-relaxed">
                {data.about}
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#CBD5E1]">
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#0F172A] mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#047857]" />
                <span>Ключевые компетенции</span>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                {data.competencies.map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-1 text-[9.5px] text-[#334155]">
                    <span className="text-[#047857] font-bold">✓</span>
                    <span className="leading-tight">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Work Experience & Education */}
          <div className="grid grid-cols-[1.4fr_1.1fr] gap-3">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#0F172A] pb-1 mb-2 border-b border-[#CBD5E1]">
                <Briefcase className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Опыт работы</span>
              </div>
              <div className="space-y-2.5">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="bg-[#F8FAFC] p-2 rounded-lg border border-[#CBD5E1]">
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-[11px] text-[#0F172A]">{exp.role}</div>
                      <div className="text-[9px] font-medium text-[#1D4ED8] bg-[#EFF6FF] px-1.5 py-0.5 rounded border border-[#BFDBFE]">
                        {exp.period}
                      </div>
                    </div>
                    <div className="text-[10px] text-[#475569] mb-1.5">
                      <span className="font-semibold text-[#334155]">{exp.company}</span> • {exp.location}
                    </div>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-1 text-[9px] text-[#334155] leading-snug">
                          <span className="text-[#1D4ED8] shrink-0 font-bold">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#0F172A] pb-1 mb-2 border-b border-[#CBD5E1]">
                <GraduationCap className="w-3.5 h-3.5 text-[#047857]" />
                <span>Образование</span>
              </div>
              <div className="space-y-2">
                {data.education.map((edu) => (
                  <div key={edu.id} className="bg-[#F8FAFC] p-2 rounded-lg border border-[#CBD5E1]">
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-[10.5px] text-[#0F172A] leading-tight">
                        {edu.degree}
                      </div>
                      <span className="text-[9px] font-bold text-[#047857] bg-[#ECFDF5] px-1.5 py-0.5 rounded border border-[#A7F3D0]">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-[9.5px] text-[#475569] mt-0.5">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page 1 Footer */}
        <div className="pt-2 border-t border-[#CBD5E1] text-[9px] text-[#64748B] flex justify-between items-center mt-2">
          <span>Резюме: {data.name} — {data.title}</span>
          <span>Страница 1 из 2</span>
        </div>
      </div>

      {/* ================= PAGE BREAK ================= */}
      <div className="print-page-break" />

      {/* ================= PAGE 2 ================= */}
      <div className="min-h-[265mm] flex flex-col justify-between pt-2">
        <div>
          {/* Header Page 2 */}
          <div className="border-b-2 border-[#1D4ED8] pb-2 mb-3 flex justify-between items-end">
            <div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#1D4ED8]" />
                <h2 className="text-base font-bold text-[#0F172A] uppercase tracking-wide">
                  Разработанные инженерные продукты и ПО
                </h2>
              </div>
              <p className="text-[10px] text-[#475569] mt-0.5">
                Цифровые решения для моделирования, расчёта и анализа фонда скважин с УЭЦН
              </p>
            </div>
            <div className="text-[9px] text-[#64748B] font-medium">
              {data.name} • {data.phone}
            </div>
          </div>

          {/* 3 Projects */}
          <div className="space-y-3">
            {data.projects.map((proj) => {
              const isDev = proj.status.toLowerCase().includes("разработ");
              return (
                <div 
                  key={proj.id} 
                  className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-3 avoid-break"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-[#0F172A]">{proj.title}</h3>
                      <span className="text-[10px] font-medium text-[#1D4ED8]">({proj.subtitle})</span>
                    </div>
                    <span 
                      className={`text-[9px] font-bold px-2 py-0.5 rounded border ${
                        isDev 
                          ? "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]" 
                          : "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]"
                      }`}
                    >
                      {proj.status}
                    </span>
                  </div>

                  <p className="text-[9.5px] text-[#334155] mb-2 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 bg-white p-2 rounded border border-[#E2E8F0] mb-2">
                    {proj.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[9px] text-[#334155]">
                        <Activity className="w-3 h-3 text-[#1D4ED8] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[8.5px] font-semibold text-[#64748B] uppercase">Стек и технологии:</span>
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.map((tag, i) => (
                        <span key={i} className="text-[8.5px] bg-[#FFFFFF] text-[#475569] px-1.5 py-0.2 rounded border border-[#CBD5E1] font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical summary banner */}
          <div className="mt-3 bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#1D4ED8]" />
              <div>
                <div className="text-[10px] font-bold text-[#0F172A]">Полный цикл разработки инженерного софта</div>
                <div className="text-[9px] text-[#475569]">От физико-математической модели и PVT-адаптации до промышленного веб-интерфейса</div>
              </div>
            </div>
            <div className="text-right text-[9px] font-mono text-[#1D4ED8]">
              React • TypeScript • Tailwind • PVT Models
            </div>
          </div>
        </div>

        {/* Page 2 Footer */}
        <div className="pt-2 border-t border-[#CBD5E1] text-[9px] text-[#64748B] flex justify-between items-center mt-2">
          <span>Резюме: {data.name} — {data.email} — {data.phone}</span>
          <span>Страница 2 из 2</span>
        </div>
      </div>
    </div>
  );
}
