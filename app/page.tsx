import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop } from "lucide-react";
import HeroSection from "@/components/hero-section";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* About Section Preview */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a full-stack developer currently studying Computer Science
                at Hogeschool Rotterdam. With a background in Software
                Development from Grafisch Lyceum Rotterdam, I combine technical
                expertise with practical experience.
              </p>
              <Link href="/about">
                <Button variant="outline" className="mt-4 group">
                  Learn more about me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3">
              <SkillBadge icon={<Code className="h-4 w-4 mr-2" />} label="C#" />
              <SkillBadge
                icon={<Code className="h-4 w-4 mr-2" />}
                label="JavaScript"
              />
              <SkillBadge
                icon={<Code className="h-4 w-4 mr-2" />}
                label="TypeScript"
              />
              <SkillBadge
                icon={<Code className="h-4 w-4 mr-2" />}
                label="Python"
              />
              <SkillBadge
                icon={<Laptop className="h-4 w-4 mr-2" />}
                label="React"
              />
              <SkillBadge
                icon={<Laptop className="h-4 w-4 mr-2" />}
                label=".NET"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section Preview */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Cinema Reservation System"
              description="A console-based cinema reservation application built with C# and .NET 7."
              technologies={["C#", ".NET", "JSON", "GIT", "Unit Testing"]}
              date="January 2024"
            />
            <ProjectCard
              title="Theatre Reservation System"
              description="Full-stack project with ASP.NET backend and React frontend for theatre reservations."
              technologies={["C#", "ASP.NET", "React", "REST API", "SQL"]}
              date="September 2024"
            />
          </div>
          <div className="text-center mt-10">
            <Link href="/projects">
              <Button className="group">
                View all projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a developer for your project?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            I'm available for freelance work and internship opportunities. Let's
            discuss how I can help bring your ideas to life.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="group">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
