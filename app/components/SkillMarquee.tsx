"use client";
import React from "react";
import {
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiCodeigniter,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiNestjs,
  SiRedis,
  SiDocker,
  SiSpringboot,
  SiInertia,
  SiFilament,
  SiAlpinedotjs,
  SiAmazon,
} from "react-icons/si";

const skillsRow1 = [
  { Icon: SiGit, name: "Git" },
  { Icon: SiHtml5, name: "HTML5" },
  { Icon: SiCss3, name: "CSS3" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiJquery, name: "jQuery" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiBootstrap, name: "Bootstrap" },
  { Icon: SiPhp, name: "PHP" },
  { Icon: SiCodeigniter, name: "CodeIgniter" },
  { Icon: SiLaravel, name: "Laravel" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiMongodb, name: "MongoDB" },
];

const skillsRow2 = [
  { Icon: SiExpress, name: "Express" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiVuedotjs, name: "Vue" },
  { Icon: SiNuxtdotjs, name: "Nuxt" },
  { Icon: SiNestjs, name: "NestJS" },
  { Icon: SiRedis, name: "Redis" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiAmazon, name: "AWS" },
  { Icon: SiSpringboot, name: "Spring Boot" },
  { Icon: SiAlpinedotjs, name: "Alpine.js" },
  { Icon: SiInertia, name: "Inertia" },
  { Icon: SiFilament, name: "Filament" },
];

const SkillMarquee = () => {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Technologies and tools I work with
        </p>

        <div className="space-y-8">
          {/* Baris Pertama - Gerak ke Kanan */}
          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-marquee-right">
              {[...skillsRow1, ...skillsRow1].map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 min-w-20"
                >
                  <skill.Icon className="text-white text-6xl opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300" />
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Baris Kedua - Gerak ke Kiri */}
          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-marquee-left">
              {[...skillsRow2, ...skillsRow2].map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 min-w-20"
                >
                  <skill.Icon className="text-white text-6xl opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300" />
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillMarquee;
