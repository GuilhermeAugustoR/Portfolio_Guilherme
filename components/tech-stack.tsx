"use client"

import { Badge } from "@/components/ui/badge"

const technologies = [
  { name: "React", category: "Frontend", level: "Expert" },
  { name: "Next.js", category: "Framework", level: "Expert" },
  { name: "TypeScript", category: "Language", level: "Advanced" },
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "GraphQL", category: "API", level: "Intermediate" },
  { name: "PostgreSQL", category: "Database", level: "Advanced" },
  { name: "Docker", category: "DevOps", level: "Intermediate" },
  { name: "AWS", category: "Cloud", level: "Intermediate" },
  { name: "Figma", category: "Design", level: "Advanced" },
  { name: "Git", category: "Tools", level: "Expert" },
]

const categoryColors = {
  Frontend: "bg-green-500/20 text-green-300 border-green-500/30",
  Framework: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Language: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Backend: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  API: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Database: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  DevOps: "bg-red-500/20 text-red-300 border-red-500/30",
  Cloud: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Design: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  Tools: "bg-gray-500/20 text-gray-300 border-gray-500/30",
}

export default function TechStack() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          Stack Tecnológico
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {technologies.map((tech, index) => (
            <div key={tech.name} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
              <Badge
                className={`${categoryColors[tech.category as keyof typeof categoryColors]} px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 cursor-pointer`}
              >
                {tech.name}
              </Badge>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {tech.category} • {tech.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
