"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Mail, Linkedin, Github, ExternalLink, Calendar, Code, Briefcase, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AOS from "aos"

export default function Portfolio() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    })
  }, [])

  // Work experience data
  const workExperience = [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "Jan 2022 - Present",
      description:
        "Lead the frontend development team in creating responsive web applications. Implemented modern React architecture and improved performance by 40%. Mentored junior developers and established coding standards.",
      technologies: ["React", "TypeScript", "Next.js", "Redux"],
    },
    {
      id: 2,
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      period: "Mar 2020 - Dec 2021",
      description:
        "Developed and maintained full-stack applications for enterprise clients. Created RESTful APIs and integrated third-party services. Collaborated with UX/UI designers to implement responsive designs.",
      technologies: ["Node.js", "Express", "MongoDB", "React", "AWS"],
    },
    {
      id: 3,
      company: "Creative Web Agency",
      position: "Web Developer",
      period: "Jun 2018 - Feb 2020",
      description:
        "Built custom websites and e-commerce solutions for clients across various industries. Implemented responsive designs and ensured cross-browser compatibility. Optimized website performance and SEO.",
      technologies: ["JavaScript", "PHP", "MySQL", "WordPress", "jQuery"],
    },
  ]

  // Skills data
  const skills = {
    frontend: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "CSS/SCSS", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "RESTful APIs", level: 90 },
    ],
    other: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Testing (Jest, Cypress)", level: 80 },
    ],
  }

  // Special expertise
  const expertise = [
    {
      title: "UI/UX Design Integration",
      description:
        "Expert in translating design mockups into pixel-perfect, responsive interfaces with attention to detail and smooth animations.",
      icon: <Award className="h-10 w-10" />,
    },
    {
      title: "Performance Optimization",
      description:
        "Specialized in optimizing web application performance, reducing load times and improving user experience through efficient code and asset management.",
      icon: <CheckCircle className="h-10 w-10" />,
    },
    {
      title: "Responsive Web Development",
      description:
        "Mastery in creating fully responsive websites that provide optimal user experience across all devices and screen sizes.",
      icon: <Briefcase className="h-10 w-10" />,
    },
  ]

  // Sample project data - replace with your own
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      date: "Jan 2023 - Mar 2023",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing. The platform includes user authentication, product catalog, shopping cart, checkout process, payment integration, order management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe", "AWS S3", "JWT"],
      link: "#",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 2,
      title: "Task Management App",
      date: "Apr 2023 - Jun 2023",
      description:
        "A collaborative task management application with real-time updates and team collaboration features. Users can create projects, assign tasks, set deadlines, track progress, share files, and communicate through an integrated chat system. The app includes notifications, reminders, and detailed analytics.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux", "Socket.io", "Chart.js", "Framer Motion"],
      link: "#",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      date: "Jul 2023 - Oct 2023",
      description:
        "An analytics dashboard for healthcare providers to monitor patient data and treatment outcomes. The dashboard visualizes key metrics, patient records, treatment plans, medication schedules, and health trends. It includes role-based access control, data export capabilities, and integration with electronic health record systems.",
      technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Prisma", "tRPC", "React Query", "Auth0"],
      link: "#",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      date: "Nov 2023 - Feb 2024",
      description:
        "A cross-platform mobile application for fitness tracking, workout planning, and nutrition monitoring. The app features workout routines, exercise demonstrations, progress tracking, calorie counting, meal planning, and social sharing. It integrates with wearable devices and includes personalized recommendations.",
      technologies: ["React Native", "GraphQL", "AWS", "Expo", "Apollo Client", "Redux Toolkit", "Jest", "Detox"],
      link: "#",
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#334155]">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-xl font-bold text-[#0891B2]">My Portfolio</div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0891B2]"
            >
              <Link href="mailto:your.email@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0891B2]"
            >
              <Link
                href="https://linkedin.com/in/yourprofile"
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
              asChild
              className="text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0891B2]"
            >
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-[#F0F4F8] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-[#0F172A]">
              <span className="text-[#0891B2]">Hello, I'm</span> Your Name
            </h1>
            <p className="mb-8 text-xl text-[#475569]">
              A passionate developer with expertise in building modern web applications
            </p>
            <Button className="bg-[#0891B2] hover:bg-[#0E7490] text-white">View My Work</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0F172A]" data-aos="fade-up">
            About Me
          </h2>
          <div
            className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md border border-[#E2E8F0]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="mb-4 text-lg text-[#475569]">
              I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly applications.
              With expertise in modern web technologies, I focus on building scalable solutions that solve real-world
              problems.
            </p>
            <p className="text-lg text-[#475569]">
              My experience spans across various domains including e-commerce, healthcare, and productivity tools. I'm
              constantly learning and adapting to new technologies to deliver the best possible solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline Section */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0F172A]" data-aos="fade-up">
            Work Experience
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#0891B2]"></div>

            {/* Timeline items */}
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right md:ml-auto md:mr-1/2" : "md:pl-8 md:ml-1/2"
                } md:w-1/2 w-full`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={index * 100}
              >
                {/* Timeline dot */}
                <div className="absolute top-0 md:top-2 left-[-8px] md:left-auto md:right-[-8px] w-4 h-4 rounded-full bg-[#0891B2] border-2 border-[#E0F2FE] z-10"></div>

                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-[#E2E8F0]">
                  <div className="flex flex-col md:items-end items-start mb-2">
                    <h3 className="text-xl font-bold text-[#0891B2]">{job.position}</h3>
                    <h4 className="text-lg font-medium text-[#0F172A]">{job.company}</h4>
                  </div>
                  <div className="flex items-center mb-4 text-[#64748B] text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{job.period}</span>
                  </div>
                  <p className="text-[#475569] mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0891B2] border border-[#0891B2]/30"
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
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0F172A]" data-aos="fade-up">
            Special Expertise
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
                <h3 className="text-xl font-bold mb-2 text-[#0F172A]">{item.title}</h3>
                <p className="text-[#475569]">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <h3 className="text-2xl font-bold text-center mb-8 text-[#0F172A]" data-aos="fade-up">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div
              className="bg-[#F8FAFC] p-6 rounded-lg shadow-md border border-[#E2E8F0]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="text-xl font-bold mb-4 text-[#0F172A]">Frontend</h4>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#475569]">{skill.name}</span>
                      <span className="text-[#0891B2]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                      <div className="bg-[#0891B2] h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
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
              <h4 className="text-xl font-bold mb-4 text-[#0F172A]">Backend</h4>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#475569]">{skill.name}</span>
                      <span className="text-[#0891B2]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                      <div className="bg-[#0891B2] h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
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
              <h4 className="text-xl font-bold mb-4 text-[#0F172A]">Tools & Others</h4>
              <div className="space-y-4">
                {skills.other.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#475569]">{skill.name}</span>
                      <span className="text-[#0891B2]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] rounded-full h-2">
                      <div className="bg-[#0891B2] h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0F172A]" data-aos="fade-up">
            My Projects
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
                  <div className="lg:col-span-4 h-full">
                    <div className="h-full relative">
                      <div className="w-full h-64 lg:h-full bg-[#F1F5F9] overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <CardTitle className="text-2xl text-[#0891B2]">{project.title}</CardTitle>
                        <div className="flex items-center text-[#64748B] text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                      <CardDescription className="text-[#475569] mt-2">{project.description}</CardDescription>
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
                      <Button className="bg-[#0891B2] hover:bg-[#0E7490] text-white" asChild>
                        <Link href={project.link} className="flex items-center gap-1">
                          View Project <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0F172A]" data-aos="fade-up">
            Get In Touch
          </h2>
          <div
            className="mx-auto max-w-md rounded-lg bg-[#F8FAFC] p-6 shadow-md border border-[#E2E8F0]"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <p className="mb-6 text-center text-[#475569]">
              Interested in working together? Feel free to reach out to me through any of the following channels.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-[#0891B2] hover:bg-[#0E7490] text-white" asChild>
                <Link href="mailto:your.email@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" /> Email
                </Link>
              </Button>
              <Button className="bg-[#0891B2] hover:bg-[#0E7490] text-white" asChild>
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
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-8">
        <div className="container mx-auto px-4 text-center text-[#64748B]">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
