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
    <div className="w-full bg-white text-[#0F172A] leading-normal text-[10px]">
      {/* ================= PAGE 1 ================= */}
      <div className="print-page-1">
        {/* Header */}
        <div className="border-b-2 border-[#1D4ED8] pb-2 mb-2">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-[#0F172A] uppercase leading-none">
                {data.name}
              </h1>
              <h2 className="text-xs font-semibold text-[#1D4ED8] mt-1">
                {data.title}
              </h2>
              <p className="text-[9px] text-[#475569] mt-0.5 max-w-lg leading-tight">
                {data.subtitle}
              </p>
            </div>
            <div className="text-right text-[9px] text-[#334155] space-y-0.5 bg-[#F8FAFC] px-2.5 py-1 rounded border border-[#CBD5E1]">
              <div className="flex items-center justify-end gap-1.5 font-medium">
                <Phone className="w-3 h-3 text-[#1D4ED8]" />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center justify-end gap-1.5 font-medium">
                <Mail className="w-3 h-3 text-[#1D4ED8]" />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center justify-end gap-1.5 text-[#64748B]">
                <MapPin className="w-3 h-3 text-[#1D4ED8]" />
                <span>{data.location}</span>
              </div>
            </div>
          </div>

          {/* Metrics Ribbon */}
          <div className="grid grid-cols-4 gap-2 mt-2 pt-1.5 border-t border-[#E2E8F0]">
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded px-1.5 py-0.5 text-center">
              <div className="text-xs font-bold text-[#1D4ED8]">{data.experienceYears}+ лет</div>
              <div className="text-[8px] text-[#64748B]">Стаж в нефтедобыче</div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded px-1.5 py-0.5 text-center">
              <div className="text-xs font-bold text-[#1D4ED8]">{data.productsCount} продукта</div>
              <div className="text-[8px] text-[#64748B]">Инженерное ПО</div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded px-1.5 py-0.5 text-center">
              <div className="text-xs font-bold text-[#1D4ED8]">12 модулей</div>
              <div className="text-[8px] text-[#64748B]">Расчётов технолога</div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded px-1.5 py-0.5 text-center">
              <div className="text-xs font-bold text-[#1D4ED8]">60+ моделей</div>
              <div className="text-[8px] text-[#64748B]">База насосов УЭЦН</div>
            </div>
          </div>
        </div>

        {/* About & Competencies */}
        <div className="grid grid-cols-[1.1fr_1.3fr] gap-2 mb-2">
          <div className="bg-[#F8FAFC] p-2 rounded-lg border border-[#CBD5E1]">
            <div className="flex items-center gap-1.5 font-bold text-[10.5px] text-[#0F172A] mb-0.5">
              <Award className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>Обо мне</span>
            </div>
            <p className="text-[9px] text-[#334155] leading-snug">
              {data.about}
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-2 rounded-lg border border-[#CBD5E1]">
            <div className="flex items-center gap-1.5 font-bold text-[10.5px] text-[#0F172A] mb-0.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#047857]" />
              <span>Ключевые компетенции</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
              {data.competencies.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-1 text-[8.5px] text-[#334155]">
                  <span className="text-[#047857] font-bold">✓</span>
                  <span className="leading-tight">{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience & Education */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-2">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-1.5 font-bold text-[10.5px] text-[#0F172A] pb-0.5 mb-1 border-b border-[#CBD5E1]">
              <Briefcase className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>Опыт работы</span>
            </div>
            <div className="space-y-1.5">
              {/* Role 1 */}
              <div className="bg-[#F8FAFC] p-1.5 rounded-lg border border-[#CBD5E1]">
                <div className="flex justify-between items-start">
                  <div className="font-bold text-[9.5px] text-[#0F172A]">Ведущий инженер-технолог</div>
                  <div className="text-[8px] font-medium text-[#1D4ED8] bg-[#EFF6FF] px-1 py-0.2 rounded border border-[#BFDBFE]">
                    Янв 2025 — н.в.
                  </div>
                </div>
                <div className="text-[8.5px] text-[#475569] mb-1">
                  <span className="font-semibold text-[#334155]">Новые Технологии</span> • Нефтеюганск
                </div>
                <ul className="space-y-0.5">
                  <li className="flex items-start gap-1 text-[8px] text-[#334155] leading-tight">
                    <span className="text-[#1D4ED8] shrink-0 font-bold">•</span>
                    <span>Сводная суточная отчётность по 5 проектам: монтажи, демонтажи, запуски, отказы УЭЦН, движение резерва оборудования</span>
                  </li>
                  <li className="flex items-start gap-1 text-[8px] text-[#334155] leading-tight">
                    <span className="text-[#1D4ED8] shrink-0 font-bold">•</span>
                    <span>Мониторинг работы погружного оборудования и СУ, анализ отклонений, подбор и оптимизация режимов работы</span>
                  </li>
                  <li className="flex items-start gap-1 text-[8px] text-[#334155] leading-tight">
                    <span className="text-[#1D4ED8] shrink-0 font-bold">•</span>
                    <span>Актуализация накопительной базы данных фонда, сведение суточной информации от технологических служб</span>
                  </li>
                  <li className="flex items-start gap-1 text-[8px] text-[#334155] leading-tight">
                    <span className="text-[#1D4ED8] shrink-0 font-bold">•</span>
                    <span>Ведение технической документации фонда скважин, оперативное взаимодействие с заказчиком</span>
                  </li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="bg-[#F8FAFC] p-1.5 rounded-lg border border-[#CBD5E1]">
                <div className="flex justify-between items-start">
                  <div className="font-bold text-[9.5px] text-[#0F172A]">Различные инженерные и руководящие должности</div>
                  <div className="text-[8px] font-medium text-[#1D4ED8] bg-[#EFF6FF] px-1 py-0.2 rounded border border-[#BFDBFE]">
                    До 2025 (25 лет опыта)
                  </div>
                </div>
                <div className="text-[8.5px] text-[#475569] mb-1">
                  <span className="font-semibold text-[#334155]">Нефтегазовый сектор</span> • Ноябрьск и др.
                </div>
                <ul className="space-y-0.5">
                  <li className="flex items-start gap-1 text-[8px] text-[#334155] leading-tight">
                    <span className="text-[#1D4ED8] shrink-0 font-bold">•</span>
                    <span>От ремонта гидрозащиты до руководства технологической службой и направлением добычи нефти и газа</span>
                  </li>
                  <li className="flex items-start gap-1 text-[8px] text-[#334155] leading-tight">
                    <span className="text-[#1D4ED8] shrink-0 font-bold">•</span>
                    <span>Экспертиза по механизированному фонду скважин с УЭЦН, разработка и внедрение мер по повышению наработки</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-1.5 font-bold text-[10.5px] text-[#0F172A] pb-0.5 mb-1 border-b border-[#CBD5E1]">
              <GraduationCap className="w-3.5 h-3.5 text-[#047857]" />
              <span>Образование</span>
            </div>
            <div className="space-y-1.5">
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-[#F8FAFC] p-1.5 rounded-lg border border-[#CBD5E1]">
                  <div className="flex justify-between items-start">
                    <div className="font-bold text-[9px] text-[#0F172A] leading-tight">
                      {edu.degree}
                    </div>
                    <span className="text-[8px] font-bold text-[#047857] bg-[#ECFDF5] px-1 py-0.2 rounded border border-[#A7F3D0]">
                      {edu.year}
                    </span>
                  </div>
                  <div className="text-[8px] text-[#475569] mt-0.5">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page 1 discreet bottom indicator */}
        <div className="pt-1 mt-2 border-t border-[#CBD5E1] text-[8px] text-[#64748B] flex justify-between items-center">
          <span>Резюме: {data.name} — {data.title}</span>
          <span className="font-semibold text-[#1D4ED8]">Страница 1 из 2</span>
        </div>
      </div>

      {/* ================= PAGE 2 ================= */}
      <div className="print-page-2">
        {/* Header Page 2 */}
        <div className="border-b-2 border-[#1D4ED8] pb-1.5 mb-2 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <h2 className="text-xs font-bold text-[#0F172A] uppercase tracking-wide">
                Разработанные инженерные продукты и ПО
              </h2>
            </div>
            <p className="text-[8.5px] text-[#475569] mt-0.5">
              Цифровые решения для моделирования, расчёта и анализа фонда скважин с УЭЦН
            </p>
          </div>
          <div className="text-[8.5px] text-[#64748B] font-medium bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#CBD5E1]">
            {data.name} • {data.phone}
          </div>
        </div>

        {/* 3 Projects */}
        <div className="space-y-2">
          {data.projects.map((proj) => {
            const isDev = proj.status.toLowerCase().includes("разработ");
            return (
              <div 
                key={proj.id} 
                className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-2 avoid-break"
              >
                <div className="flex justify-between items-start mb-0.5">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[11px] font-bold text-[#0F172A]">{proj.title}</h3>
                    <span className="text-[9px] font-medium text-[#1D4ED8]">({proj.subtitle})</span>
                  </div>
                  <span 
                    className={`text-[8px] font-bold px-1.5 py-0.2 rounded border ${
                      isDev 
                        ? "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]" 
                        : "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]"
                    }`}
                  >
                    {proj.status}
                  </span>
                </div>

                <p className="text-[8.5px] text-[#334155] mb-1 leading-snug">
                  {proj.description}
                </p>

                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 bg-white px-2 py-1 rounded border border-[#E2E8F0] mb-1">
                  {proj.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-1 text-[8px] text-[#334155]">
                      <Activity className="w-2.5 h-2.5 text-[#1D4ED8] shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[7.5px] font-semibold text-[#64748B] uppercase">Стек:</span>
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="text-[7.5px] bg-[#FFFFFF] text-[#475569] px-1 py-0.2 rounded border border-[#CBD5E1] font-mono">
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
        <div className="mt-2 bg-[#F1F5F9] border border-[#CBD5E1] rounded-lg p-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-[#1D4ED8]" />
            <div>
              <div className="text-[8.5px] font-bold text-[#0F172A]">Полный цикл разработки инженерного софта</div>
              <div className="text-[7.5px] text-[#475569]">От физико-математической модели и PVT-адаптации до промышленного веб-интерфейса</div>
            </div>
          </div>
          <div className="text-right text-[7.5px] font-mono text-[#1D4ED8]">
            React • TypeScript • Tailwind • PVT Models
          </div>
        </div>

        {/* Page 2 discreet bottom indicator */}
        <div className="pt-1 mt-2 border-t border-[#CBD5E1] text-[8px] text-[#64748B] flex justify-between items-center">
          <span>Резюме: {data.name} — {data.email} — {data.phone}</span>
          <span className="font-semibold text-[#1D4ED8]">Страница 2 из 2</span>
        </div>
      </div>
    </div>
  );
}
