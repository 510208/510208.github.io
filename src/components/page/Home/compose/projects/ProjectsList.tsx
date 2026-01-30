"use client";

import { useState, useEffect, useMemo } from "react";
import { Input } from "@components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Languages, Search, Filter, ChartPie } from "lucide-react";
import { DevelopmentStatusBadge, ProjectCard } from "./ProjectCard";
import type { Project } from "@/types/shsite.projects";

export const ProjectsList = ({
  showFilter,
  maxCards,
}: {
  showFilter?: boolean;
  maxCards?: number;
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // 使用Projects.ts中的靜態專案資料
  useEffect(() => {
    import("@shProjects").then((module) => {
      setProjects(module.PROJECTS);
      setLoading(false);
    });
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
        selectedLanguage === "all" ||
        (Array.isArray(project.language)
          ? project.language.includes(selectedLanguage)
          : project.language === selectedLanguage);

      const matchesTopic =
        selectedTopic === "all" ||
        (project.topics?.includes(selectedTopic) ?? false);

      const matchesStatus =
        selectedStatus === "all" ||
        (project.status?.toLowerCase() ?? "") === selectedStatus;

      return matchesSearch && matchesLanguage && matchesTopic && matchesStatus;
    });
  }, [projects, searchTerm, selectedLanguage, selectedTopic, selectedStatus]);

  // 獲取所有唯一的語言
  const uniqueLanguages = useMemo(() => {
    const languages = projects.flatMap((project) => {
      if (Array.isArray(project.language)) {
        return project.language;
      } else if (typeof project.language === "string") {
        return [project.language];
      } else {
        return [];
      }
    });
    return Array.from(new Set(languages)).sort();
  }, [projects]);

  // 獲取所有唯一的主題
  const uniqueTopics = useMemo(() => {
    const topics = projects.flatMap((project) => project.topics || []);
    return Array.from(new Set(topics)).sort();
  }, [projects]);

  const uniqueStatuses = useMemo(() => {
    const statuses = projects
      .map((project) => project.status?.toLowerCase() ?? null)
      .filter((status): status is string => status !== null);
    return Array.from(new Set(statuses)).sort();
  }, [projects]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-lg">載入專案中...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 搜尋和過濾區域 */}
      {showFilter && (
        <div className="space-y-4">
          <div className="flex gap-2">
            {/* 搜尋輸入框 */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="搜尋專案名稱或描述..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(e.target.value)
                }
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

            {/* 狀態過濾器 */}
            <div className="flex-none w-12 sm:w-34">
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full">
                  <ChartPie className="h-4 w-4" />
                  <span className="hidden sm:inline sm:ml-2">
                    <SelectValue placeholder="選擇狀態" />
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有狀態</SelectItem>
                  {uniqueStatuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      <DevelopmentStatusBadge
                        status={status as Project["status"]}
                      />
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
      )}
      {/* 專案網格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(maxCards
          ? filteredProjects.slice(0, maxCards)
          : filteredProjects
        ).map((project) => (
          <ProjectCard key={project.html_url} project={project} />
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
