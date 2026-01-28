import type { SimpleIcon } from "simple-icons-astro";

interface ShsiteConfig {
  navBar: {
    links: { title: string; href: string; icon: LucideIcon }[];
  };

  socialLinks: { title: string; href: string; icon: SimpleIcon }[];
}
