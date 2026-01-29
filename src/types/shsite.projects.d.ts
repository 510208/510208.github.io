export type Project = {
  opengraphImageUrl: string;
  name: string;
  description: string | null;
  html_url: string;
  language?: string[] | string | null;
  topics?: string[];
  license?: string | null;
  status?: "on-going" | "completed" | "paused" | "eol" | "archived";
};
