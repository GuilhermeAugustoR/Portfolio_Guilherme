"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Smartphone,
  Server,
  Globe,
  ArrowRight,
  Download,
  Moon,
  Sun,
  Zap,
  Rocket,
  Coffee,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = [
        "inicio",
        "sobre",
        "skills",
        "servicos",
        "projetos",
        "experiencia",
        "contato",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "React",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Next.js",
      icon: <Globe className="w-6 h-6" />,
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "TypeScript",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Node.js",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-400 to-purple-500",
    },
    {
      name: "Mobile Dev",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-orange-400 to-red-500",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com Next.js, Stripe e dashboard administrativo",
      image: "/images/spot-commerce.png",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      github: "https://github.com/GuilhermeAugustoR/spot-commerce",
      live: "https://portfolio-guilhermer.vercel.app/",
      featured: true,
    },
    {
      title: "MedSearch",
      description: "Assistente de Pesquisa Acadêmica",
      image: "/images/search-med.png",
      tech: ["React", "Typescript", "Tailwind"],
      github: "https://github.com/GuilhermeAugustoR/searchMed",
      live: "https://search-med.vercel.app/",
      featured: true,
    },
    {
      title: "Backend - Pizzaria",
      description: "Sistema para gerenciar pedidos.",
      image: "/placeholder.svg?height=400&width=600&text=Banking+App",
      tech: ["Node", "TypeScript", "Express", "Prisma"],
      github: "https://github.com/GuilhermeAugustoR/backend-pizzaria",
      live: "#",
      featured: true,
    },
    {
      title: "E-commerce fruits",
      description:
        "Plataforma de e-commerce apenas com front-end com dados local",
      image: "/images/ecommerce-fruit.png",
      tech: ["React", "Typescript", "Tailwind", "Shadcn-ui"],
      github: "https://github.com/GuilhermeAugustoR/ecommerce-fruits",
      live: "https://ecommerce-fruits-vert.vercel.app/",
      featured: true,
    },
  ];

  const experience = [
    {
      company: "Base2 Tecnologia",
      position: "Frontend Developer",
      period: "2023 - Presente",
      description: "Desenvolvimento de aplicações React complexas.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      company: "Qesh",
      position: "Frontend Developer",
      period: "2021 - 2023",
      description:
        "Desenvolvimento de aplicações web e app responsivas, integração com APIs, otimização de performance.",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      company: "SPS Consultoria ERP",
      position: "Suporte técnico",
      period: "2019 - 2021",
      description: "Analista de Suporte Técnico SAP",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isDarkMode
          ? "dark bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-xl ${
          isDarkMode
            ? "bg-black/20 border-white/10"
            : "bg-white/20 border-gray-200/20"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Guilherme Campos
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "inicio",
                "sobre",
                "skills",
                "servicos",
                "projetos",
                "experiencia",
                "contato",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-green-400 hover:scale-110 ${
                    activeSection === section
                      ? "text-green-400 scale-110"
                      : isDarkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {section === "inicio"
                    ? "Início"
                    : section === "sobre"
                    ? "Sobre"
                    : section === "skills"
                    ? "Skills"
                    : section === "servicos"
                    ? "Serviços"
                    : section === "projetos"
                    ? "Projetos"
                    : section === "experiencia"
                    ? "Experiência"
                    : section === "contato"
                    ? "Contato"
                    : section}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`${
                isDarkMode ? "hover:bg-white/10" : "hover:bg-gray-200/50"
              } hover:scale-110 transition-all duration-300`}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Simplified Background */}
          <div className="absolute inset-0">
            {/* Static gradient background */}
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-br from-green-900/20 via-gray-900/30 to-emerald-900/20"
                  : "bg-gradient-to-br from-green-100/30 via-gray-100/20 to-emerald-100/30"
              }`}
            />

            {/* Subtle geometric pattern */}
            <div
              className={`absolute inset-0 ${
                isDarkMode ? "opacity-10" : "opacity-5"
              }`}
              style={{
                backgroundImage: `
        linear-gradient(30deg, rgba(34, 197, 94, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(34, 197, 94, 0.1) 87.5%, rgba(34, 197, 94, 0.1)),
        linear-gradient(150deg, rgba(34, 197, 94, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(34, 197, 94, 0.1) 87.5%, rgba(34, 197, 94, 0.1)),
        linear-gradient(30deg, rgba(34, 197, 94, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(34, 197, 94, 0.1) 87.5%, rgba(34, 197, 94, 0.1)),
        linear-gradient(150deg, rgba(34, 197, 94, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(34, 197, 94, 0.1) 87.5%, rgba(34, 197, 94, 0.1))
      `,
                backgroundSize: "80px 140px",
                backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
              }}
            />

            {/* Simple accent elements */}
            <div className="absolute top-20 right-20 w-2 h-2 bg-green-400/30 rounded-full animate-pulse" />
            <div
              className="absolute bottom-32 left-32 w-1 h-1 bg-emerald-400/40 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-teal-400/30 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>

        <div className="text-center z-10 max-w-5xl mx-auto px-6">
          <div className="mb-12 space-y-8">
            <div className="animate-fade-in-up">
              <h1
                className={`text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r ${
                  isDarkMode
                    ? "from-white via-green-200 to-emerald-300"
                    : "from-gray-800 via-green-600 to-emerald-700"
                } bg-clip-text text-transparent leading-tight`}
              >
                Guilherme Campos
              </h1>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <p
                className={`text-2xl md:text-3xl mb-6 font-light ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Frontend Developer & Creative Coder
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-600">
              <p
                className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Transformo ideias em experiências digitais extraordinárias.
                Especialista em React, Next.js e interfaces que encantam
                usuários.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-900">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25 text-lg font-semibold"
              onClick={() => scrollToSection("projetos")}
            >
              <Rocket className="mr-3 w-5 h-5" />
              Ver Projetos
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className={`border-2 ${
                isDarkMode
                  ? "border-white/30 text-white hover:bg-white/10 hover:border-green-400/50"
                  : "border-gray-400/50 text-gray-700 hover:bg-gray-100/50 hover:border-green-500/50"
              } px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg font-semibold backdrop-blur-sm`}
            >
              <Download className="mr-3 w-5 h-5" />
              Download CV
            </Button> */}
          </div>

          <div className="flex justify-center space-x-8 mt-16 animate-fade-in-up animation-delay-1200">
            {[
              {
                icon: <Github className="w-7 h-7" />,
                href: "https://github.com/GuilhermeAugustoR",
                color: isDarkMode
                  ? "hover:text-gray-300"
                  : "hover:text-gray-700",
              },
              {
                icon: <Linkedin className="w-7 h-7" />,
                href: "https://www.linkedin.com/in/guilherme-augusto-campos/",
                color: "hover:text-blue-400",
              },
              // {
              //   icon: <Mail className="w-7 h-7" />,
              //   href: "#",
              //   color: "hover:text-green-400",
              // },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? "text-gray-500" : "text-gray-400"} ${
                  social.color
                } transition-all duration-300 hover:scale-125 transform hover:-translate-y-1`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className={`w-6 h-10 border-2 ${
              isDarkMode ? "border-white/30" : "border-gray-400/50"
            } rounded-full flex justify-center`}
          >
            <div
              className={`w-1 h-3 ${
                isDarkMode ? "bg-white/50" : "bg-gray-500/70"
              } rounded-full mt-2 animate-pulse`}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-6 relative">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-transparent via-green-900/5 to-transparent"
              : "bg-gradient-to-b from-transparent via-green-100/20 to-transparent"
          }`}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Main content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card
                  className={`group bg-gradient-to-br ${
                    isDarkMode
                      ? "from-white/5 to-white/10 border-white/10"
                      : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                  } backdrop-blur-sm hover:border-green-400/30 transition-all duration-500 hover:scale-105 overflow-hidden`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className={`text-xl font-bold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        Desenvolvedor Frontend
                      </h3>
                    </div>
                    <p
                      className={`leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Especializado em criar experiências digitais modernas e
                      performáticas com React, Next.js e TypeScript.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className={`group bg-gradient-to-br ${
                    isDarkMode
                      ? "from-white/5 to-white/10 border-white/10"
                      : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                  } backdrop-blur-sm hover:border-green-400/30 transition-all duration-500 hover:scale-105 overflow-hidden`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                        <Palette className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className={`text-xl font-bold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        UI/UX Enthusiast
                      </h3>
                    </div>
                    <p
                      className={`leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Paixão por design intuitivo e interfaces que proporcionam
                      experiências excepcionais aos usuários.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card
                className={`bg-gradient-to-br ${
                  isDarkMode
                    ? "from-white/5 to-white/10 border-white/10"
                    : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                } backdrop-blur-sm`}
              >
                <CardContent className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-6 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Minha Jornada
                  </h3>
                  <div className="space-y-6">
                    <p
                      className={`text-lg leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Sou um desenvolvedor frontend apaixonado por transformar
                      ideias complexas em interfaces elegantes e funcionais. Com
                      experiência sólida em tecnologias modernas, foco em criar
                      soluções que não apenas funcionam perfeitamente, mas
                      também encantam os usuários.
                    </p>
                    <p
                      className={`text-lg leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Minha abordagem combina conhecimento técnico profundo com
                      sensibilidade para design, sempre buscando o equilíbrio
                      perfeito entre performance, acessibilidade e experiência
                      do usuário.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                {[
                  {
                    number: "4+",
                    label: "Anos de Experiência",
                    icon: <Award className="w-6 h-6" />,
                    color: "from-blue-400 to-cyan-500",
                  },
                  {
                    number: "∞",
                    label: "Xícaras de Café",
                    icon: <Coffee className="w-6 h-6" />,
                    color: "from-yellow-400 to-orange-500",
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className={`group bg-gradient-to-br ${
                      isDarkMode
                        ? "from-white/5 to-white/10 border-white/10"
                        : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                    } backdrop-blur-sm hover:border-green-400/30 transition-all duration-500 hover:scale-105 overflow-hidden`}
                  >
                    <CardContent className="p-6 text-center relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div className="relative z-10">
                        <div
                          className={`text-green-400 mb-3 flex justify-center group-hover:scale-110 transition-all duration-500 bg-gradient-to-r ${stat.color} bg-clip-text group-hover:text-transparent`}
                        >
                          {stat.icon}
                        </div>
                        <div
                          className={`text-3xl font-bold mb-2 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {stat.number}
                        </div>
                        <div
                          className={`text-sm leading-tight ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {stat.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Skills preview */}
              <Card
                className={`bg-gradient-to-br ${
                  isDarkMode
                    ? "from-white/5 to-white/10 border-white/10"
                    : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                } backdrop-blur-sm`}
              >
                <CardContent className="p-6">
                  <h4
                    className={`text-lg font-bold mb-4 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Principais Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind",
                      "Node.js",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        className={`bg-gradient-to-r ${
                          isDarkMode
                            ? "bg-primary from-green-500/20 to-green-500/20"
                            : "from-green-500/20 to-green-500/20"
                        } text-black border-green-500/30 hover:bg-green-500/30 transition-colors duration-300`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card
                className={`bg-gradient-to-br ${
                  isDarkMode
                    ? "from-green-500/10 to-emerald-500/10 border-green-500/20"
                    : "from-green-100/80 to-emerald-100/80 border-green-300/30"
                } backdrop-blur-sm`}
              >
                <CardContent className="p-6 text-center">
                  <h4
                    className={`text-lg font-bold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Vamos conversar?
                  </h4>
                  <p
                    className={`text-sm mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Sempre aberto para discutir novos projetos e oportunidades.
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-105"
                    onClick={() => scrollToSection("contato")}
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    Entrar em Contato
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-green-900/10 via-transparent to-green-900/10"
              : "bg-gradient-to-b from-green-100/20 via-transparent to-green-100/20"
          }`}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Habilidades
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card
                  className={`bg-gradient-to-br ${
                    isDarkMode
                      ? "from-white/5 to-white/10 border-white/10"
                      : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                  } backdrop-blur-sm hover:border-green-400/30 transition-all duration-500 hover:scale-105 overflow-hidden group-hover:shadow-2xl group-hover:shadow-green-500/10`}
                >
                  <CardContent className="p-8 text-center relative">
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <div
                        className={`text-green-400 mb-6 flex justify-center group-hover:scale-125 transition-all duration-500 bg-gradient-to-r ${skill.color} bg-clip-text group-hover:text-transparent`}
                      >
                        {skill.icon}
                      </div>
                      <h3
                        className={`text-xl font-bold mb-4 group-hover:text-green-300 transition-colors duration-300 ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {skill.name}
                      </h3>

                      {/* Animated skill indicator */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              isDarkMode ? "bg-gray-600" : "bg-gray-400"
                            } group-hover:bg-green-400 transition-all duration-300`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 px-6 relative">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"
              : "bg-gradient-to-b from-transparent via-emerald-100/20 to-transparent"
          }`}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Desenvolvimento Frontend",
                description:
                  "Aplicações React/Next.js modernas, performáticas e escaláveis",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "UI/UX Design",
                description:
                  "Interfaces intuitivas que proporcionam experiências excepcionais",
                color: "from-pink-500 to-purple-500",
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Arquitetura Frontend",
                description:
                  "Estruturas sólidas e organizadas para projetos de grande escala",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Desenvolvimento Mobile",
                description: "Apps responsivos e nativos com React Native",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Otimização de Performance",
                description:
                  "Aplicações rápidas e otimizadas para melhor experiência",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Consultoria Técnica",
                description:
                  "Orientação estratégica para decisões tecnológicas",
                color: "from-teal-500 to-green-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group bg-gradient-to-br ${
                  isDarkMode
                    ? "from-white/5 to-white/10 border-white/10"
                    : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                } backdrop-blur-sm hover:border-green-400/30 transition-all duration-500 hover:scale-105 overflow-hidden hover:shadow-2xl hover:shadow-green-500/10`}
              >
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`text-green-400 mb-6 flex justify-center group-hover:scale-125 transition-all duration-500 bg-gradient-to-r ${service.color} bg-clip-text group-hover:text-transparent`}
                    >
                      {service.icon}
                    </div>
                    <h3
                      className={`text-xl font-bold mb-4 group-hover:text-green-300 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-32 px-6 relative">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"
              : "bg-gradient-to-b from-transparent via-emerald-100/20 to-transparent"
          }`}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Projetos em Destaque
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group bg-gradient-to-br ${
                  isDarkMode
                    ? "from-white/5 to-white/10 border-white/10"
                    : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                } backdrop-blur-sm overflow-hidden hover:border-green-400/30 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={project.featured ? 1200 : 600}
                    height={project.featured ? 600 : 400}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex space-x-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </Link>
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-green-500/20 backdrop-blur-sm rounded-full hover:bg-green-500/30 transition-colors duration-300"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-4 group-hover:text-green-300 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-6 leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className={`bg-gradient-to-r ${
                          isDarkMode
                            ? "bg-primary from-green-500/20 to-green-500/20"
                            : "from-green-500/20 to-green-500/20"
                        } text-black border-green-500/30 hover:bg-green-500/30 transition-colors duration-300 px-3 py-1`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-32 px-6 relative">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-green-900/10 via-transparent to-green-900/10"
              : "bg-gradient-to-b from-green-100/20 via-transparent to-green-100/20"
          }`}
        />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Experiência
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <Card
                key={exp.company}
                className={`group bg-gradient-to-br ${
                  isDarkMode
                    ? "from-white/5 to-white/10 border-white/10"
                    : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                } backdrop-blur-sm hover:border-green-400/30 transition-all duration-500 hover:scale-105 overflow-hidden hover:shadow-2xl hover:shadow-green-500/10`}
              >
                <CardContent className="p-8 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      isDarkMode
                        ? "from-green-500/5 to-emerald-500/5"
                        : "from-green-100/50 to-emerald-100/50"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {exp.icon}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3
                            className={`text-2xl font-bold group-hover:text-green-300 transition-colors duration-300 ${
                              isDarkMode ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {exp.position}
                          </h3>
                          <h4 className="text-xl text-green-400 font-medium">
                            {exp.company}
                          </h4>
                        </div>
                        <Badge
                          className={`bg-gradient-to-r ${
                            isDarkMode
                              ? "bg-primary from-green-500/20 to-green-500/20"
                              : "from-green-500/20 to-green-500/20"
                          } text-black border-green-500/30 mt-2 md:mt-0 px-4 py-2`}
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      <p
                        className={`leading-relaxed ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-32 px-6 relative">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"
              : "bg-gradient-to-b from-transparent via-emerald-100/20 to-transparent"
          }`}
        />

        <div className="max-w-5xl mx-auto text-center relative">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Vamos Trabalhar Juntos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full mb-8" />
            <p
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Estou sempre aberto a novos desafios e oportunidades incríveis.
              Vamos criar algo extraordinário juntos!
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-12 py-4 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25 text-lg font-semibold"
            >
              <Mail className="mr-3 w-6 h-6" />
              Enviar Email
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`border-2 ${
                isDarkMode
                  ? "border-white/30 text-white hover:bg-white/10 hover:border-green-400/50"
                  : "border-gray-400/50 text-gray-700 hover:bg-gray-100/50 hover:border-green-500/50"
              } px-12 py-4 rounded-full transition-all duration-500 hover:scale-110 text-lg font-semibold backdrop-blur-sm`}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/guilherme-augusto-campos/",
                  "_blank"
                )
              }
            >
              <Linkedin className="mr-3 w-6 h-6" />
              LinkedIn
            </Button>
          </div> */}

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                info: "guilhermereiscampos23@gmail.com",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                title: "LinkedIn",
                info: "/in/guilherme-augusto-campos",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Github className="w-8 h-8" />,
                title: "GitHub",
                info: "@GuilhermeAugustoR",
                color: "from-gray-500 to-gray-700",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className={`group bg-gradient-to-br ${
                  isDarkMode
                    ? "from-white/5 to-white/10 border-white/10"
                    : "from-gray-100/80 to-gray-200/80 border-gray-300/20"
                } backdrop-blur-sm hover:border-green-400/30 transition-all duration-500 hover:scale-105 overflow-hidden hover:shadow-2xl hover:shadow-green-500/10`}
              >
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`text-green-400 mb-4 flex justify-center group-hover:scale-125 transition-all duration-500 bg-gradient-to-r ${contact.color} bg-clip-text group-hover:text-transparent`}
                    >
                      {contact.icon}
                    </div>
                    <h3
                      className={`text-xl font-bold mb-2 group-hover:text-green-300 transition-colors duration-300 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {contact.title}
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {contact.info}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-6 border-t ${
          isDarkMode ? "border-white/10" : "border-gray-200/50"
        } relative`}
      >
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-t from-green-900/10 to-transparent"
              : "bg-gradient-to-t from-green-100/20 to-transparent"
          }`}
        />
        <div className="max-w-6xl mx-auto text-center relative">
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            © 2025 Guilherme Campos.
          </p>
        </div>
      </footer>
    </div>
  );
}
