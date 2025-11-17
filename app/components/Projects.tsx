"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: "fullstack" | "frontend" | "backend";
  tags: string[];
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CreatiFlow",
    category: "fullstack",
    tags: ["UI Design", "Next.js", "Node.js"],
    description: "I design and development. With experience across design systems, user experience, and front-end technologies. I focus on crafting products that are not just beautiful.",
    image: "/projects/creatiflow.jpg",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Portfolio Website V3",
    category: "frontend",
    tags: ["React.js", "Tailwind", "Framer"],
    description: "Modern portfolio website with smooth animations and responsive design. Built with React and Tailwind CSS.",
    image: "/projects/portfolio.jpg",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "VR Games Website",
    category: "frontend",
    tags: ["Three.js", "WebGL", "React"],
    description: "Interactive VR gaming platform with 3D visualizations and immersive user experience.",
    image: "/projects/vr-games.jpg",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "E-Commerce API",
    category: "backend",
    tags: ["Node.js", "Express", "MongoDB"],
    description: "RESTful API for e-commerce platform with authentication, payment integration, and order management.",
    image: "/projects/api.jpg",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Task Management App",
    category: "fullstack",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    description: "Full-stack task management application with real-time updates and team collaboration features.",
    image: "/projects/task-app.jpg",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    category: "frontend",
    tags: ["Vue.js", "Chart.js", "API"],
    description: "Analytics dashboard for social media metrics with beautiful data visualizations.",
    image: "/projects/dashboard.jpg",
    demoUrl: "#",
    githubUrl: "#"
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Fullstack Dev" },
  { id: "frontend", label: "Front-End Dev" },
  { id: "backend", label: "Back-End Dev" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("fullstack");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-4">
            Explore My Expert Portfolio Of Creative Solutions
          </h2>
          <p className="text-gray-400 text-lg">
            Whether it&apos;s designing a sleek user interface or writing code
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/50"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* White Frame/Container */}
              <div className="relative bg-white rounded-[2.5rem] p-5 transition-all duration-300 hover:scale-105">
                {/* Card Container - hitam di dalam */}
                <div className="relative bg-gray-900 rounded-4xl overflow-hidden">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-900 m-4 rounded-4xl">
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-900/80 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay Buttons - Show on Hover */}
                  {hoveredProject === project.id && (
                    <div className="absolute bottom-4 right-4 z-20 flex gap-2 transition-opacity duration-300">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="px-4 py-1.5 bg-yellow-400 text-black text-xs rounded-full font-medium hover:bg-yellow-300 transition-colors"
                        >
                          UI/UX Design
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="px-4 py-1.5 bg-white text-black text-xs rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-1"
                        >
                          <span>⚡</span> Build Design
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          index === 0
                            ? "bg-green-500 text-white"
                            : index === 1
                            ? "bg-blue-500 text-white"
                            : "bg-orange-400 text-white"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Detail Label */}
                  <p className="text-gray-500 text-xs mb-2">Detail :</p>

                  {/* Description */}
                  <p className="text-gray-400 text-xs mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2.5 bg-yellow-400 text-black rounded-full text-sm font-semibold hover:bg-yellow-300 transition-colors">
                      Learn more
                    </button>
                    <button className="flex-1 px-4 py-2.5 bg-gray-800 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors">
                      Play
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
