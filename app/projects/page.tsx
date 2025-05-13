import ProjectDetailCard from "@/components/project-detail-card"

export default function ProjectsPage() {
  return (
    <div className="py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <p className="text-lg mb-12">
          Here are some of the key projects I've worked on. Each demonstrates different aspects of my technical skills
          and problem-solving abilities.
        </p>

        <div className="space-y-12">
          <ProjectDetailCard
            title="Cinema Reservation System"
            date="January 2024"
            technologies={["C#", ".NET", "JSON", "GIT", "Unit Testing"]}
            description="Development of a console-based cinema reservation application with C# and .NET 7."
            points={[
              "Used Object-Oriented Design Programming (OODP) principles such as inheritance, interfaces, abstract classes, and polymorphism.",
              "Applied Scrum methodology with sprint planning, retrospectives, burndown charts, and task management via GIT.",
              "Implemented JSON storage (read/write), error handling, and system tasks such as seat reservation, movie display, and customer interactions.",
              "Extensively tested with unit tests and system tests; continuously improved based on Product Owner feedback.",
            ]}
          />

          <ProjectDetailCard
            title="Theatre Reservation System"
            date="September 2024"
            technologies={["C#", "ASP.NET", "React", "REST API", "SQL", "Github"]}
            description="Built as a full-stack project with ASP.NET backend and React frontend, fully according to given requirements."
            points={[
              "Set up with a CRUD system for shows and reservations, including admin login and session management.",
              "Frontend includes filters, sorting, login page, admin panel, and reservation form with offline shopping cart (localStorage).",
              "Integrated validations, error handling, and price calculation within API; taking into account capacity and dates.",
              "Custom feature: Added QR code scanner for ticket usage verification.",
            ]}
          />

          <ProjectDetailCard
            title="Cargohub Refactor Project"
            date="September 2024"
            technologies={["C#", "Bash", "Github Actions", "YAML", "Unit Testing"]}
            description="Analysis and refactoring of existing legacy software for logistics company CargoHub."
            points={[
              "Set up an automated CI/CD pipeline with GitHub Actions, including test, build, and deployment steps.",
              "Implementation of unit tests and integration tests for existing functionalities.",
              "Supplemented with documentation, Swagger API specs, technical report, and monitoring/logging configurations.",
              "Applied security measures such as secure storage of secrets and dependency checks.",
            ]}
          />
        </div>
      </div>
    </div>
  )
}
