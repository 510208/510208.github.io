"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Languages, GitFork, Scale, Star, Search, Filter } from "lucide-react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");

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

  // 過濾專案
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ??
          false);

      const matchesLanguage =
        selectedLanguage === "all" || project.language === selectedLanguage;

      const matchesTopic =
        selectedTopic === "all" ||
        (project.topics?.includes(selectedTopic) ?? false);

      return matchesSearch && matchesLanguage && matchesTopic;
    });
  }, [projects, searchTerm, selectedLanguage, selectedTopic]);

  // 獲取所有唯一的語言
  const uniqueLanguages = useMemo(() => {
    const languages = projects
      .map((project) => project.language)
      .filter(
        (language): language is string =>
          language !== null && language !== undefined
      );
    return Array.from(new Set(languages)).sort();
  }, [projects]);

  // 獲取所有唯一的主題
  const uniqueTopics = useMemo(() => {
    const topics = projects.flatMap((project) => project.topics || []);
    return Array.from(new Set(topics)).sort();
  }, [projects]);

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
    <div className="space-y-6">
      {/* 搜尋和過濾區域 */}
      <div className="space-y-4">
        <div className="flex gap-2">
          {/* 搜尋輸入框 */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="搜尋專案名稱或描述..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* 語言過濾器 */}
          <div className="flex-none w-12 sm:w-34">
            <Select
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
            >
              <SelectTrigger className="w-full">
                <Languages className="h-4 w-4" />
                <span className="hidden sm:inline sm:ml-2">
                  <SelectValue placeholder="選擇語言" />
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有語言</SelectItem>
                {uniqueLanguages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* 主題過濾器 */}
          <div className="flex-none w-12 sm:w-34">
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger className="w-full">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline sm:ml-2">
                  <SelectValue placeholder="選擇主題" />
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有主題</SelectItem>
                {uniqueTopics.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 結果統計 */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          顯示 {filteredProjects.length} 個專案，共 {projects.length} 個
        </div>
      </div>
      {/* 專案網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <Card
            key={project.name}
            className="bg-white dark:bg-neutral-800 min-h-[400px] transition-transform transform duration-300 hover:scale-101 px-2 py-2 overflow-hidden pb-6"
          >
            <img
              src={project.opengraphImageUrl}
              alt={`${project.name} 的縮圖`}
              className="w-full rounded-md h-auto object-cover mt-0 transition-all duration-300 ease-in-out dark:brightness-70"
            />
            <CardHeader className="mt-2 min-h-[100px]">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                {project.description || "?"}
              </CardDescription>
            </CardHeader>
            <CardContent className="min-h-[200px]">
              <ul className="space-y-2 list-none">
                {project.language && (
                  <li className="mb-2 flex items-center gap-2">
                    <Languages size={18} />
                    <strong>語言:</strong>
                    <p>
                      <Tooltip>
                        <TooltipTrigger>
                          <i
                            className={`devicon-${project.language.toLowerCase()}-plain colored text-l`}
                          ></i>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          {project.language}
                        </TooltipContent>
                      </Tooltip>
                    </p>
                  </li>
                )}
                {typeof project.stargazers_count === "number" && (
                  <li className="mb-2 flex items-center gap-2">
                    <Star size={18} />
                    <strong>星標:</strong>
                    <p>{project.stargazers_count}</p>
                  </li>
                )}
                {typeof project.forks_count === "number" && (
                  <li className="mb-2 flex items-center gap-2">
                    <GitFork size={18} />
                    <strong>Fork:</strong>
                    <p>{project.forks_count}</p>
                  </li>
                )}
                {project.license && (
                  <li className="mb-2 flex items-center gap-2">
                    <Scale size={18} />
                    <strong>授權:</strong>
                    <p>{project.license}</p>
                  </li>
                )}
                {project.topics && project.topics.length > 0 && (
                  <li className="mb-2 flex items-center gap-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {project.topics.slice(0, 3).map((topic) => (
                          <Link
                            key={topic}
                            to={`https://github.com/topics/${topic}`}
                          >
                            <Badge>{topic}</Badge>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-1">
                        {project.topics.length > 3 && (
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge variant="outline">
                                +{project.topics.length - 3} more
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent
                              side="bottom"
                              align="start"
                              className="max-w-[220px] flex flex-wrap"
                            >
                              {project.topics.slice(3).map((topic) => (
                                <Badge key={topic} className="mr-[10px] mb-1">
                                  {topic}
                                </Badge>
                              ))}
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="outline" size="sm">
                <Link to={project.html_url} target="_blank">
                  查看專案
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* 無結果時的提示 */}
      {filteredProjects.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400">
            沒有找到符合條件的專案
          </div>
        </div>
      )}
    </div>
  );
};
