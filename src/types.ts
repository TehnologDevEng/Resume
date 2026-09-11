export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  features: string[];
  tags: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  experienceYears: number;
  productsCount: number;
  about: string;
  competencies: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}
