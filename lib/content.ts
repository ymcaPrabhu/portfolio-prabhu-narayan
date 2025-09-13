import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const contentDir = path.join(process.cwd(), 'content');

function readYaml<T=any>(file: string): T {
  const p = path.join(contentDir, file);
  const raw = fs.readFileSync(p, 'utf-8');
  return yaml.load(raw) as T;
}

export async function getProfile() {
  return readYaml('profile.yaml') as {
    name: string;
    title: string;
    location?: string;
    summary: string;
    badges?: string[];
    links: { email: string; linkedin: string; github?: string };
  };
}

export async function getExperience() {
  return readYaml('experience.yaml') as Array<{
    org: string; role: string; period: string; highlights: string[];
  }>;
}

export async function getProjects() {
  return readYaml('projects.yaml') as Array<{
    title: string; role: string; impact: string; link?: string;
  }>;
}

export async function getPublications() {
  return readYaml('publications.yaml') as Array<{
    title: string; venue: string; date: string; link?: string;
  }>;
}

export async function getStats() {
  return readYaml('stats.yaml') as Array<{ label: string; value: string | number }>;
}
