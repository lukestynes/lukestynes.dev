import Navbar from "@/components/navbar";
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div>
      <Navbar useLight={false} />
      <main className="bg-dot-white/[0.15] min-h-screen bg-neutral-900 py-10">
        <h1 className="pb-10 text-center text-5xl font-extrabold text-white">
          PROJECTS
        </h1>
        <div className="m-20 mt-0 grid grid-cols-5 justify-center gap-5">
          <div className="col-span-3 row-span-2">
            <ProjectCard
              title="FlareSync"
              subtitle="A tool to sync MadCap Flare documentation with Confluence"
              year="2023"
              tags="TypeScript - React - Tauri"
              imageSrc="/img/flaresync.jpg"
              slug="/projects/under-construction"
            />
          </div>
          <div className="col-span-2">
            <ProjectCard
              title="SmartTransit Dasboard"
              subtitle="Advanced NZTA crash data visualiser with table, map, and graph views"
              year="2023"
              tags="Java - JavaFX - Data Analysis"
              imageSrc="/img/smarttransit-dashboard.jpg"
              slug="/projects/under-construction"
            />
          </div>
          <div className="col-span-2">
            <ProjectCard
              title="Wireless Router Testing Automation"
              subtitle="Advanced NZTA crash data visualiser with table, map, and graph views"
              year="2024"
              tags="Python - Wireless Networking - Regression Testing"
              imageSrc="none"
              slug="/projects/under-construction"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
