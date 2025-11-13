"use client";
import React, { useState } from "react";

interface Experience {
  id: number;
  year: string;
  position: string;
  company: string;
  location: string;
  country: string;
  flag: string;
  description: string;
  achievements: string[];
  statistics?: {
    label: string;
    percentage: number;
    color: string;
  }[];
}

const experiences: Experience[] = [
  {
    id: 1,
    year: "2019-2019",
    position: "UI/UX Designer at Onpoint Studio",
    company: "Onpoint Studio",
    location: "Indonesia, Cilacap",
    country: "Indonesia",
    flag: "🇮🇩",
    description: "Whether it's designing a sleek user interface or writing code that brings it to life.",
    achievements: [
      "Designed user interfaces for 10+ web applications",
      "Collaborated with development team on implementation",
      "Created design systems and style guides"
    ],
    statistics: [
      { label: "Design Skills", percentage: 95, color: "green" },
      { label: "Team Collaboration", percentage: 88, color: "yellow" }
    ]
  },
  {
    id: 2,
    year: "2019-2019",
    position: "UI/UX Designer at Onpoint Studio",
    company: "Onpoint Studio",
    location: "Germany, Akja",
    country: "Germany",
    flag: "🇩🇪",
    description: "Whether it's designing a sleek user interface or writing code that brings it to life.",
    achievements: [
      "Led UX research and user testing initiatives",
      "Improved user satisfaction by 40%",
      "Worked with international clients"
    ],
    statistics: [
      { label: "UX Research", percentage: 92, color: "green" },
      { label: "Client Management", percentage: 85, color: "yellow" }
    ]
  },
  {
    id: 3,
    year: "2019-2019",
    position: "UI/UX Designer at Onpoint Studio",
    company: "Onpoint Studio",
    location: "Japanese",
    country: "Japan",
    flag: "🇯🇵",
    description: "Whether it's designing a sleek user interface or writing code that brings it to life.",
    achievements: [
      "Employee recognition for top-performance across global systems, user experience, and travel and timesheets. I focus on crafting",
      "Delivered exceptional user experiences",
      "Recognized for outstanding performance"
    ],
    statistics: [
      { label: "Speaking", percentage: 82, color: "green" },
      { label: "Leadership", percentage: 67, color: "yellow" }
    ]
  },
  {
    id: 4,
    year: "2019-2019",
    position: "UI/UX Designer at Onpoint Studio",
    company: "Onpoint Studio",
    location: "Germany, Akja",
    country: "Germany",
    flag: "🇩🇪",
    description: "Whether it's designing a sleek user interface or writing code that brings it to life.",
    achievements: [
      "Managed design projects from concept to launch",
      "Mentored junior designers",
      "Streamlined design workflow processes"
    ],
    statistics: [
      { label: "Project Management", percentage: 90, color: "green" },
      { label: "Mentoring", percentage: 78, color: "yellow" }
    ]
  },
  {
    id: 5,
    year: "2019-2019",
    position: "UI/UX Designer at Onpoint Studio",
    company: "Onpoint Studio",
    location: "Germany, Akja",
    country: "Germany",
    flag: "🇩🇪",
    description: "Whether it's designing a sleek user interface or writing code that brings it to life.",
    achievements: [
      "Developed innovative design solutions",
      "Increased conversion rates by 35%",
      "Established best practices for the team"
    ],
    statistics: [
      { label: "Innovation", percentage: 88, color: "green" },
      { label: "Process Improvement", percentage: 93, color: "yellow" }
    ]
  }
];

const WorkExperience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-7xl flex justify-between items-center mb-16">
          <div className="flex-1 max-w-xs">
            <p className="text-sm text-gray-400 leading-relaxed">
              Whether it&apos;s designing a sleek user interface or writing code that brings it to life.
            </p>
          </div>
          <div className="flex-1 text-right">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl leading-tight">
              A Yearly Snapshot Of My Creative Growth
            </h2>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Main Row */}
              <div className="grid grid-cols-12 gap-4 items-center py-6 border-b border-white/10">
                {/* Number */}
                <div className="col-span-1">
                  <span className="text-3xl font-bold text-white">
                    {String(exp.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Year & Position */}
                <div className="col-span-12 sm:col-span-3">
                  <p className="text-xs text-gray-500 mb-1">{exp.year}</p>
                  <h3 className="text-base font-semibold text-white">
                    {exp.position}
                  </h3>
                </div>

                {/* Location */}
                <div className="col-span-12 sm:col-span-3">
                  <p className="text-xs text-gray-500 mb-1">Location Work</p>
                  <div className="flex items-center gap-2">
                    <span className="text-base">{exp.flag}</span>
                    <span className="text-sm text-white">{exp.location}</span>
                  </div>
                </div>

                {/* Position Role */}
                <div className="col-span-12 sm:col-span-3">
                  <p className="text-xs text-gray-500 mb-1">Position</p>
                  <p className="text-sm text-white">Internship UI/UX Design</p>
                </div>

                {/* Show/Hide Button */}
                <div className="col-span-12 sm:col-span-2 flex justify-end">
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold text-sm transition-colors duration-200"
                  >
                    {expandedId === exp.id ? 'Hide' : 'Show'}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedId === exp.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedId === exp.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="grid grid-cols-12 gap-4 py-6 pl-16">
                  <div className="col-span-12 sm:col-span-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">
                      Explain more
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.achievements}
                    </p>
                    
                    {exp.statistics && (
                      <div className="bg-gray-900/30 rounded-lg p-4 border border-white/10 mt-4">
                        <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="text-yellow-500">★</span>
                          Statistics
                        </h5>
                        <div className="space-y-3">
                          {exp.statistics.map((stat, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="flex-1 bg-gray-800 rounded-full h-2">
                                <div 
                                  className={`bg-linear-to-r ${
                                    stat.color === 'green' 
                                      ? 'from-green-500 to-green-400' 
                                      : 'from-yellow-500 to-yellow-400'
                                  } h-2 rounded-full`} 
                                  style={{ width: `${stat.percentage}%` }} 
                                />
                              </div>
                              <span className={`text-xs font-medium min-w-[120px] ${
                                stat.color === 'green' ? 'text-green-400' : 'text-yellow-400'
                              }`}>
                                {stat.percentage}% {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
