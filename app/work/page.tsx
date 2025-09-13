import { getProjects } from "@/lib/content";

export default async function WorkPage() {
  const projects = await getProjects();
  return (
    <div className="container section">
      <h1 className="h1 mb-6">Projects & Initiatives</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card p-5">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="muted">{p.role}</p>
            <p className="mt-2">{p.impact}</p>
            {p.link && <a href={p.link} className="mt-3 inline-block">Learn more</a>}
          </article>
        ))}
      </div>
    </div>
  );
}
