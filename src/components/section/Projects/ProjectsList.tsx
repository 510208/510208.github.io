"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Project = {
  opengraphImageUrl: string;
  name: string;
  description: string | null;
  html_url: string;
  language?: string | null;
  updated_at?: string | null;
  stargazers_count?: number;
  forks_count?: number;
  topics?: string[];
  license?: string | null;
};

export const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // 從靜態 JSON 文件讀取數據
        const response = await fetch("/projects-data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects data:", err);
        setError(err instanceof Error ? err.message : "獲取專案數據時發生錯誤");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-lg">載入專案中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-red-500">錯誤: {error}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Card
          key={project.name}
          className="bg-white dark:bg-neutral-800 min-h-[400px] transition-transform transform duration-300 hover:scale-101 overflow-hidden"
        >
          <img
            src={project.opengraphImageUrl}
            alt={`${project.name} 的縮圖`}
            className="w-full h-auto object-cover mt-0 transition-all duration-300 ease-in-out dark:invert"
          />
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Language: {project.language}</p>
            <p>Updated at: {project.updated_at}</p>
            <p>Stars: {project.stargazers_count}</p>
            <p>Forks: {project.forks_count}</p>
            <p>License: {project.license}</p>
            <p>Topics: {project.topics?.join(", ")}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
