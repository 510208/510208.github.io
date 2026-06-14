export interface LanguageProps {
  name: string;
  icon: React.ReactNode;
}

export type Project = {
  opengraphImageUrl: string;
  name: string;
  description: string | null;
  html_url: string;
  logo?: string | null;
  language: LanguageProps[];
  topics?: string[];
  license?: string | null;
  status?: "on-going" | "completed" | "paused" | "eol" | "archived";
};
