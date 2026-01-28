import React from "react";

type DashboardFeature = {
  title: string;
  description: string;
  link: string;
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  source: string;
  color: Record<string, string>;
};

export type { DashboardFeature };
