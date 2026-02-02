import type { ImageMetadata } from "astro";
import type { SimpleIcon } from "simple-icons-astro";

interface ShsiteConfig {
  navBar: {
    links: { title: string; href: string; icon: LucideIcon }[];
  };

  rewards: {
    logo: ImageMetadata;
    title: string;
    aka?: string;
    result: string;
    year: { acquirement: Date; expiration?: Date | undefined };
    organization: string;
    link?: string;
    type: "competition" | "certification" | "other";
  }[];

  socialLinks: { title: string; href: string; icon: SimpleIcon }[];
}
