import { getExperience } from "@/lib/content";

export default async function ExperiencePage() {
  const exp = await getExperience();
  return (
    <div className="container section">
      <h1 className="h1 mb-6">Experience</h1>
      <ol className="relative border-s border-gray-200 pl-6">
        {exp.map((e) => (
          <li key={e.org + e.role} className="mb-8">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
            <h3 className="font-semibold">{e.role}</h3>
            <div className="muted">{e.org} · {e.period}</div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {e.highlights?.map((h: string, i: number) => <li key={i}>{h}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
