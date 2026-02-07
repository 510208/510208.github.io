interface FriendCardProps {
  image: string;
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
