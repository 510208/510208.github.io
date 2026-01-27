import { Home, Info, Newspaper } from "lucide-react";

const config = {
  navBar: {
    links: [
      { title: "Home", href: "/", icon: Home },
      { title: "About", href: "/about", icon: Info },
      { title: "Blog", href: "/blog", icon: Newspaper },
    ],
  },
};

export default config;
