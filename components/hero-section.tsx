import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Full-Stack Developer{" "}
            <span className="text-primary">Building Modern Web Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I create responsive, user-friendly applications with clean code and
            modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/slighs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-salah-b8b446223/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:abdullahsalah150@gmail.com"
              className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
