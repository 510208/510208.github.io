import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@components/ui/tooltip";
import { Badge } from "@components/ui/badge";
import { Languages, Scale, SquareArrowOutUpRight, Tag } from "lucide-react";
import type { Project } from "@/types/shsite.projects";

export function DevelopmentStatusBadge({
  status,
}: {
  status: Project["status"];
}) {
  const STATUS_PROCESSED = status ?? "on-going";
  switch (STATUS_PROCESSED) {
    case "on-going":
      return (
        <Badge className="bg-green-200/20 border-green-800 text-green-600 dark:border-green-300 dark:text-green-100">
          維護中
        </Badge>
      );
    case "paused":
      return (
        <Badge className="bg-orange-200/20 border-orange-800 text-orange-600 dark:border-orange-300 dark:text-orange-100">
          暫停開發
        </Badge>
      );
    case "eol":
      return (
        <Badge className="bg-gray-200/20 border-gray-800 text-gray-600 dark:border-gray-300 dark:text-gray-100">
          已終止維護 (EOL)
        </Badge>
      );
    case "archived":
      return (
        <Badge className="bg-yellow-200/20 border-yellow-800 text-yellow-800 dark:border-yellow-300 dark:text-yellow-100">
          已封存
        </Badge>
      );
    case "completed":
      return (
        <Badge className="bg-green-200/20 dark:border-green-800 dark:text-green-600 border-green-300 text-green-100">
          已完成
        </Badge>
      );
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-inherit no-underline w-full group"
    >
      <Card
        key={project.name}
        id={`projects-${project.name}`}
        className="relative group bg-white dark:bg-neutral-800 min-h-[400px] transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 px-0 py-0 overflow-hidden pb-6"
        style={{
          opacity:
            project.status === "eol" || project.status === "archived" ? 0.6 : 1,
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-neutral-800 pointer-events-none">
          <img
            src={project.opengraphImageUrl}
            alt={project.name}
            className="h-full w-full object-cover blur-lg group-hover:blur-xs transition-all duration-300 opacity-20 dark:opacity-10 scale-125"
          />
        </div>
        {/* 裝飾用圖片 */}
        <div className="pointer-events-none absolute -right-5 -bottom-0 transition-all duration-300 z-0 shadow-lg bg-gray-300 rounded-xl ease-in-out -rotate-6 group-hover:-rotate-2 origin-top-right overflow-hidden">
          <img
            src={project.opengraphImageUrl}
            alt={`${project.name} 的縮圖`}
            className="block h-40 max-w-none aspect-2/1 object-cover dark:brightness-70 scale-110"
          />
        </div>
        <div className="p-2">
          <CardHeader className="pt-4 pb-2 px-4 bg-transparent relative z-10">
            {/* 開發狀態標籤 */}
            <DevelopmentStatusBadge status={project.status} />
            {/* 標題 */}
            <CardTitle className="text-xl font-bold flex items-center space-x-2">
              <span>{project.name}</span>
              <SquareArrowOutUpRight
                className="opacity-0 group-hover:opacity-100 transition-all duration-200"
                size={14}
              />
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
              <div className="my-2 flex flex-col gap-2 min-h-20">
                {/* 所使用的程式語言 */}
                <div className="flex gap-1 items-center align-middle">
                  <Languages size={18} />
                  <span>
                    {project.language ? (
                      <div className="flex gap-2 items-center">
                        {(Array.isArray(project.language)
                          ? project.language
                          : [project.language]
                        ).map((lang) => (
                          <Tooltip key={lang}>
                            <TooltipTrigger>
                              <i
                                className={`devicon-${lang.toLowerCase()}-plain colored text-lg w-6`}
                              />
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                              <span>{lang}</span>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    ) : (
                      <span>未知語言</span>
                    )}
                  </span>
                </div>

                {/* 標籤 */}
                <div className="flex gap-1 items-center">
                  {project.topics && project.topics.length > 0 && (
                    <>
                      <Tag size={18} />
                      <div className="flex flex-wrap gap-2">
                        {project.topics.slice(0, 2).map((topic) => (
                          <Badge
                            key={topic}
                            className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                          >
                            {topic}
                          </Badge>
                        ))}
                        {project.topics.length > 3 && (
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge>另外 {project.topics.length - 2} 項</Badge>
                            </TooltipTrigger>
                            <TooltipContent
                              side="bottom"
                              className="flex gap-2 backdrop-blur-md"
                            >
                              {project.topics.slice(2).map((topic) => (
                                <Badge
                                  className="dark:bg-blue-100 dark:text-blue-800 bg-blue-800 text-blue-100"
                                  key={topic}
                                >
                                  {topic}
                                </Badge>
                              ))}
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* 授權 */}
                {(project.license && (
                  <div className="flex gap-1 items-center">
                    <Scale size={18} />
                    <Badge variant="secondary">{project.license}</Badge>
                  </div>
                )) || (
                  <div className="flex gap-1 items-center">
                    <Scale size={18} />
                    <Badge variant="outline">無授權資訊</Badge>
                  </div>
                )}
              </div>
              <span>{project.description}</span>
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
    </a>
  );
}
