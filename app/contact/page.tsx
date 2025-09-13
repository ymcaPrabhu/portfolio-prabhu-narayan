import { getProfile } from "@/lib/content";

export default async function ContactPage() {
  const profile = await getProfile();
  return (
    <div className="container section">
      <h1 className="h1 mb-6">Contact</h1>
      <div className="card p-6 space-y-2">
        <div><span className="font-medium">Email:</span> <a href={`mailto:${profile.links.email}`}>{profile.links.email}</a></div>
        <div><span className="font-medium">LinkedIn:</span> <a href={profile.links.linkedin} target="_blank" rel="noopener">Profile</a></div>
        {profile.links.github && <div><span className="font-medium">GitHub:</span> <a href={profile.links.github} target="_blank" rel="noopener">Repos</a></div>}
      </div>
      <p className="muted mt-4">Please share only public, non-sensitive details on this website.</p>
    </div>
  );
}
