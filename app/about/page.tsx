import { Briefcase, GraduationCap, Code } from "lucide-react"
import SkillBadge from "@/components/skill-badge"
import ExperienceCard from "@/components/experience-card"
import EducationCard from "@/components/education-card"

export default function AboutPage() {
  return (
    <div className="py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="mb-12">
          <p className="text-lg mb-4">
            I'm Abdullah Salah, a full-stack developer based in Den Haag, Netherlands. Currently pursuing a Bachelor of
            Science in Computer Science at Hogeschool Rotterdam, I'm passionate about creating efficient, user-friendly
            web applications and software solutions.
          </p>
          <p className="text-lg mb-4">
            With a background in Software Development from Grafisch Lyceum Rotterdam and practical experience in various
            roles, I bring a unique perspective to my development work. I'm detail-oriented, adaptable, and committed to
            delivering high-quality code.
          </p>
          <p className="text-lg">
            I'm currently seeking both freelance opportunities and internships where I can apply my skills and continue
            to grow as a developer.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="mr-2" /> Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <SkillBadge label="Python" />
            <SkillBadge label="C#" />
            <SkillBadge label="HTML/CSS" />
            <SkillBadge label="JavaScript" />
            <SkillBadge label="TypeScript" />
            <SkillBadge label="SQL" />
            <SkillBadge label=".NET" />
            <SkillBadge label="PostgreSQL" />
            <SkillBadge label="MSSQL" />
            <SkillBadge label="MySQL" />
            <SkillBadge label="MongoDB" />
            <SkillBadge label="React" />
            <SkillBadge label="AWS (EC2)" />
            <SkillBadge label="Docker" />
            <SkillBadge label="Linux" />
            <SkillBadge label="GitHub" />
            <SkillBadge label="OOP" />
            <SkillBadge label="CI/CD" />
            <SkillBadge label="REST APIs" />
            <SkillBadge label="Testing" />
            <SkillBadge label="Agile" />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <GraduationCap className="mr-2" /> Education
          </h2>
          <div className="space-y-6">
            <EducationCard
              institution="Hogeschool Rotterdam"
              degree="Bachelor of Science in Computer Science"
              period="September 2023 – Present"
              location="Rotterdam, Zuid-Holland"
            />
            <EducationCard
              institution="Grafisch Lyceum Rotterdam"
              degree="MBO 4 Software Developer"
              period="August 2020 – June 2023"
              location="Rotterdam, Zuid-Holland"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside">
              <li>Data Structures</li>
              <li>Networking Analysis</li>
              <li>Algorithms Analysis</li>
              <li>Database Management</li>
              <li>Systems Programming</li>
              <li>Software Quality Analysis</li>
              <li>Object Oriented Design Principles</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="mr-2" /> Work Experience
          </h2>
          <div className="space-y-6">
            <ExperienceCard
              company="Ikea"
              position="Logistics Employee"
              period="December 2024 – Present"
              location="Delft, Zuid-Holland"
              responsibilities={[
                "Collecting and preparing orders according to the pick process.",
                "Working efficiently with scan systems and warehouse software in a team environment.",
              ]}
            />
            <ExperienceCard
              company="Van der Tang Trading"
              position="Logistics Employee"
              period="March 2024 – November 2024"
              location="Benthuizen, Zuid-Holland"
              responsibilities={[
                "Order picking and packaging of cosmetic products for export and sale.",
                "Careful stacking and preparation of shipments in a dynamic environment.",
              ]}
            />
            <ExperienceCard
              company="Mediq"
              position="Logistics Employee"
              period="April 2022 – June 2023"
              location="Bleiswijk, Zuid-Holland"
              responsibilities={[
                "Order picking and shipping of medical products in shift work.",
                "Tasks include both physical and facility work.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
