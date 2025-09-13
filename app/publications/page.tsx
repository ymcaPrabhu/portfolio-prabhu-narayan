import { getPublications } from "@/lib/content";

export default async function PublicationsPage() {
  const pubs = await getPublications();
  return (
    <div className="container section">
      <h1 className="h1 mb-6">Publications & Talks</h1>
      <ul className="space-y-3">
        {pubs.map((p) => (
          <li key={p.title} className="card p-4">
            <div className="font-medium">{p.title}</div>
            <div className="muted">{p.venue} · {p.date}</div>
            {p.link && <a href={p.link} className="mt-2 inline-block">View</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}
