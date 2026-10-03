import type { ImageMetadata } from "astro";

interface FriendCardProps {
  image: ImageMetadata | string;
  name: string;
  slug: string;
  description: string;
  links: {
    icon:
      | "Earth"
      | "Github"
      | "Instagram"
      | "Newspaper"
      | "Twitch"
      | "Youtube"
      | "Discord";
    to: string;
    label: string;
  }[];
}

export type { FriendCardProps };
