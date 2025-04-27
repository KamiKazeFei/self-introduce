"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import i18n from "@/i18n/i18n";
import AOS from "aos";
import {
  Award,
  Briefcase,
  Calendar,
  CheckCircle,
  Code,
  ExternalLink,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  /**
   * 切換語言
   */
  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
  };

  // Work experience data
  const workExperience = [
    {
      id: 1,
      company: t("workExperience.1.company"),
      position: t("workExperience.1.position"),
      period: t("workExperience.1.period"),
      description: t("workExperience.1.description"),
      technologies: [
        "TypeScript",
        "Angular",
        "PostgreSQL",
        "Java Spring",
        "Ionic",
        "GitLab",
      ],
    },
    {
      id: 2,
      company: t("workExperience.2.company"),
      position: t("workExperience.2.position"),
      period: t("workExperience.2.period"),
      description: t("workExperience.2.description"),
      technologies: [
        "TypeScript",
        "Angular",
        "SQL Server",
        ".NET Core 8.0",
        "GitLab",
        "Playwright",
      ],
    },
  ];

  // Skills data
  const skills = {
    frontend: [
      { name: "Angular", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "CSS/SCSS", level: 50 },
      { name: "Tailwind CSS", level: 30 },
    ],
    backend: [
      { name: ".NET Core", level: 50 },
      { name: "Java Spring", level: 40 },
      { name: "Python", level: 30 },
      { name: "RESTful APIs", level: 60 },
    ],
    other: [
      { name: "Git/GitHub", level: 60 },
      { name: "Testing (PlayWright)", level: 35 },
    ],
  };

  // Special expertise
  const expertise = [
    {
      title: t("expertise.1.title"),
      description: t("expertise.1.description"),
      icon: <Award className="h-10 w-10" />,
    },
    {
      title: t("expertise.2.title"),
      description: t("expertise.2.description"),
      icon: <CheckCircle className="h-10 w-10" />,
    },
    {
      title: t("expertise.3.title"),
      description: t("expertise.3.description"),
      icon: <Briefcase className="h-10 w-10" />,
    },
  ];

  // Sample project data - replace with your own
  const projects = [
    {
      id: 1,
      title: t("projects.1.title"),
      date: t("projects.1.date"),
      description: t("projects.1.description"),
      technologies: ["TypeScript", "CSS", "HTML", "Angular 11"],
      link: "#",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 2,
      title: t("projects.2.title"),
      date: t("projects.2.date"),
      description: t("projects.2.description"),
      technologies: ["TypeScript", "CSS", "HTML", "Angular 11"],
      link: "#",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      date: "Jul 2023 - Oct 2023",
      description:
        "An analytics dashboard for healthcare providers to monitor patient data and treatment outcomes. The dashboard visualizes key metrics, patient records, treatment plans, medication schedules, and health trends. It includes role-based access control, data export capabilities, and integration with electronic health record systems.",
      technologies: [
        "Next.js",
        "TypeScript",
        "D3.js",
        "PostgreSQL",
        "Prisma",
        "tRPC",
        "React Query",
        "Auth0",
      ],
      link: "#",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      date: "Nov 2023 - Feb 2024",
      description:
        "A cross-platform mobile application for fitness tracking, workout planning, and nutrition monitoring. The app features workout routines, exercise demonstrations, progress tracking, calorie counting, meal planning, and social sharing. It integrates with wearable devices and includes personalized recommendations.",
      technologies: [
        "React Native",
        "GraphQL",
        "AWS",
        "Expo",
        "Apollo Client",
        "Redux Toolkit",
        "Jest",
        "Detox",
      ],
      link: "#",
      image: "/placeholder.svg?height=300&width=600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#334155]">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-xl font-bold text-[#0891B2]">
            {t("navbar.title")}
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0891B2]"
            >
              <Link
                href="https://www.linkedin.com/in/yuul-su-1080a7211/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={switchLanguage}
              className="text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0891B2]"
            >
              {i18n.language === "en" ? (
                <span className="text-sm">中文</span>
              ) : (
                <span className="text-sm">EN</span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Introduce Section */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-[#F0F4F8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-[#0F172A]">
              <span className="text-[#0891B2]">{t("selfIntroduce.title")}</span>{" "}
              Yuul
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2
            className="mb-12 text-center text-3xl font-bold text-[#0F172A]"
            data-aos="fade-up"
          >
            {t("about")}
          </h2>
          <div
            className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md border border-[#E2E8F0]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="mb-4 text-lg text-[#475569]">
              {t("selfIntroduce.1")}
            </p>

            <p className="mb-4 text-lg text-[#475569]">
              {t("selfIntroduce.2")}
            </p>

            <p className="mb-4 text-lg text-[#475569]">
              {t("selfIntroduce.3")}
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline Section */}
      <section className="py-16 lg:py-24 bg-[#E0F2FE]">
        <div className="container mx-auto px-4">
          <h2
            className="mb-12 lg:mb-16 text-center text-3xl lg:text-4xl font-bold text-[#0F172A]"
            data-aos="fade-up"
          >
            {t("workExperience.title")}
          </h2>
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#0891B2]"></div>

            {/* Timeline items */}
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                className={`relative mb-16 ${
                  index % 2 === 0
                    ? "md:pr-12 lg:pr-16 md:text-right md:ml-auto md:mr-1/2"
                    : "md:pl-12 lg:pl-16 md:ml-1/2"
                } md:w-1/2 w-full`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={index * 100}
              >
                {/* Timeline dot - centered on the line */}
                <div
                  className={`absolute top-6 w-5 h-5 rounded-full bg-[#0891B2] border-2 border-[#E0F2FE] z-10 ${
                    index % 2 === 0
                      ? "md:right-[-14.5px] left-[-10px] md:left-auto"
                      : "md:left-[-14.5px] left-[-10px]"
                  }`}
                ></div>

                {/* Content */}
                <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md border border-[#E2E8F0] hover:shadow-lg transition-shadow duration-300">
                  <div
                    className={`flex flex-col mb-3 ${
                      index % 2 === 0
                        ? "md:items-end items-start"
                        : "items-start"
                    }`}
                  >
                    <h3 className="text-xl lg:text-2xl font-bold text-[#0891B2]">
                      {job.position}
                    </h3>
                    <h4 className="text-lg lg:text-xl font-medium text-[#0F172A]">
                      {job.company}
                    </h4>
                  </div>
                  <div
                    className={`flex items-center mb-4 text-[#64748B] text-sm ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{job.period}</span>
                  </div>
                  <p className="text-[#475569] lg:text-lg mb-4 lg:mb-6 leading-relaxed whitespace-pre-line">
                    {job.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {job.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0891B2] border border-[#0891B2]/30 lg:text-base lg:px-3 lg:py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="mb-12 text-center text-3xl font-bold text-[#0F172A]"
            data-aos="fade-up"
          >
            {t("expertise.title")}
          </h2>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] p-6 rounded-lg shadow-md border border-[#E2E8F0] flex flex-col items-center text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-[#0891B2] mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-[#475569]">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <h3
            className="text-2xl font-bold text-center mb-8 text-[#0F172A]"
            data-aos="fade-up"
          >
            {t("technical.title")}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div
              className="bg-[#F8FAFC] p-6 rounded-lg shadow-md border border-[#E2E8F0]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="text-xl font-bold mb-4 text-[#0F172A]">
                {t("technical.frontend")}
              </h4>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#475569]">{skill.name}</span>
                      <span className="text-[#0891B2]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                      <div
                        className="bg-[#0891B2] h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div
              className="bg-[#F8FAFC] p-6 rounded-lg shadow-md border border-[#E2E8F0]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="text-xl font-bold mb-4 text-[#0F172A]">
                {t("technical.back")}
              </h4>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#475569]">{skill.name}</span>
                      <span className="text-[#0891B2]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                      <div
                        className="bg-[#0891B2] h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div
              className="bg-[#F8FAFC] p-6 rounded-lg shadow-md border border-[#E2E8F0]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="text-xl font-bold mb-4 text-[#0F172A]">
                {t("technical.other")}
              </h4>
              <div className="space-y-4">
                {skills.other.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#475569]">{skill.name}</span>
                      <span className="text-[#0891B2]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                      <div
                        className="bg-[#0891B2] h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-[#F0F4F8]">
        <div className="container mx-auto px-4">
          <h2
            className="mb-12 text-center text-3xl font-bold text-[#0F172A]"
            data-aos="fade-up"
          >
            {t("projects.title")}
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden bg-white border-[#E2E8F0] text-[#334155] w-full"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="col-span-12">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <CardTitle className="text-3xl text-[#0891B2]">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center text-[#64748B] text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                      <CardDescription
                        className="text-[#475569] mt-2 text-md"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-2 mb-4">
                        <Code className="h-5 w-5 text-[#0891B2] mt-0.5" />
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              className="bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0891B2] border border-[#0891B2]/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      {/* <Button
                        className="bg-[#0891B2] hover:bg-[#0E7490] text-white"
                        asChild
                      >
                        <Link
                          href={project.link}
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button> */}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="mb-12 text-center text-3xl font-bold text-[#0F172A]"
            data-aos="fade-up"
          >
            Get In Touch
          </h2>
          <div
            className="mx-auto max-w-md rounded-lg bg-[#F8FAFC] p-6 shadow-md border border-[#E2E8F0]"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <p className="mb-6 text-center text-[#475569]">
              Interested in working together? Feel free to reach out to me
              through any of the following channels.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                className="bg-[#0891B2] hover:bg-[#0E7490] text-white"
                asChild
              >
                <Link
                  href="mailto:your.email@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" /> Email
                </Link>
              </Button>
              <Button
                className="bg-[#0891B2] hover:bg-[#0E7490] text-white"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-8">
        <div className="container mx-auto px-4 text-center text-[#64748B]">
          <p>© {new Date().getFullYear()} Yuul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
