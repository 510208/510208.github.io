import type { ImageMetadata } from "astro";

interface FriendCardProps {
  image: ImageMetadata | string;
  name: string;
  slug: string;
  description: React.ReactNode;
  links: {
    icon: React.ReactNode;
    to: string;
    label: string;
  }[];
}

export type { FriendCardProps };
