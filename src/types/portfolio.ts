export type PageType = 'home' | 'services' | 'projects' | 'about' | 'contact';

export interface ProjectItem {
  id: string;
  category: 'web' | 'app' | 'ai';
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  scopeBadge: string;
  deliverables?: string[];
  techStack?: string[];
}
