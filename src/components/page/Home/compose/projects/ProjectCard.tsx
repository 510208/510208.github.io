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
import { twMerge } from "tailwind-merge";

interface DisplaySectionProps {
  showStatus?: boolean;
  showLanguage?: boolean;
  showTopics?: boolean;
  showLicense?: boolean;
  showImage?: boolean;
  showName?: boolean;
  showDescription?: boolean;
}

export function DevelopmentStatusBadge({
  status,
}: {
  status: Project["status"];
}) {
  const STATUS_PROCESSED = status ?? "on-going";
  switch (STATUS_PROCESSED) {
    case "on-going":
      return (
        <Badge className="bg-green-200/20 border-green-300 text-green-100">
          維護中
        </Badge>
      );
    case "paused":
      return (
        <Badge className="bg-orange-200/20 border-orange-300 text-orange-100">
          暫停開發
        </Badge>
      );
    case "eol":
      return (
        <Badge className="bg-gray-200/20 border-gray-300 text-gray-100">
          已終止維護 (EOL)
        </Badge>
      );
    case "archived":
      return (
        <Badge className="bg-yellow-200/20 border-yellow-300 text-yellow-100">
          已封存
        </Badge>
      );
    case "completed":
      return (
        <Badge className="bg-green-200/20 border-green-800 text-green-600">
          已完成
        </Badge>
      );
  }
}

export function ProjectCard({
  project,
  className,
  displaySection,
}: {
  project: Project;
  className?: string;
  displaySection?: DisplaySectionProps;
}) {
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        "block text-inherit no-underline w-full group",
        className,
      )}
    >
      <Card
        key={project.name}
        className="relative group bg-neutral-800 min-h-[400px] transition-all duration-300 hover:bg-neutral-900 px-0 py-0 overflow-hidden pb-6"
        style={{
          opacity:
            project.status === "eol" || project.status === "archived" ? 0.6 : 1,
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-800 pointer-events-none">
          <img
            src={project.opengraphImageUrl}
            alt={project.name}
            className="h-full w-full object-cover blur-lg group-hover:blur-xs transition-all duration-300 opacity-10 scale-125"
          />
        </div>
        {/* 裝飾用圖片 */}
        <div
          className="pointer-events-none absolute -right-5 -bottom-0 transition-all duration-300 z-0 shadow-lg bg-gray-300 rounded-xl ease-in-out -rotate-6 group-hover:-rotate-2 origin-top-right overflow-hidden"
          style={{
            display: displaySection?.showImage === false ? "none" : "block",
          }}
        >
          <img
            src={project.opengraphImageUrl}
            alt={`${project.name} 的縮圖`}
            className="block h-40 max-w-none aspect-2/1 object-cover brightness-70 scale-110"
          />
        </div>
        <div className="p-2">
          <CardHeader className="pt-4 pb-2 px-4 bg-transparent relative z-10">
            {/* 開發狀態標籤 */}
            <div
              style={{
                display:
                  displaySection?.showStatus === false ? "none" : "block",
              }}
            >
              <DevelopmentStatusBadge status={project.status} />
            </div>
            {/* 標題 */}
            <CardTitle
              className="text-xl font-bold items-center space-x-2"
              style={{
                display: displaySection?.showName === false ? "none" : "flex",
              }}
            >
              <span>{project.name}</span>
              <SquareArrowOutUpRight
                className="opacity-0 group-hover:opacity-100 transition-all duration-200"
                size={14}
              />
            </CardTitle>
            <CardDescription className="text-sm text-gray-400">
              <div className="my-2 flex flex-col gap-2 min-h-20">
                {/* 所使用的程式語言 */}
                <div
                  className="flex gap-1 items-center align-middle"
                  style={{
                    display:
                      displaySection?.showLanguage === false ? "none" : "flex",
                  }}
                >
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
                <div
                  className="flex gap-1 items-center"
                  style={{
                    display:
                      displaySection?.showTopics === false ? "none" : "flex",
                  }}
                >
                  {project.topics && project.topics.length > 0 && (
                    <>
                      <Tag size={18} />
                      <div className="flex flex-wrap gap-2">
                        {project.topics.slice(0, 2).map((topic) => (
                          <Badge
                            key={topic}
                            className="bg-blue-800 text-blue-100"
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
                                  className="bg-blue-100 text-blue-800"
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
                  <div
                    className="flex gap-1 items-center"
                    style={{
                      display:
                        displaySection?.showLicense === false ? "none" : "flex",
                    }}
                  >
                    <Scale size={18} />
                    <Badge variant="secondary">{project.license}</Badge>
                  </div>
                )) || (
                  <div
                    className="flex gap-1 items-center"
                    style={{
                      display:
                        displaySection?.showLicense === false ? "none" : "flex",
                    }}
                  >
                    <Scale size={18} />
                    <Badge variant="outline">無授權資訊</Badge>
                  </div>
                )}
              </div>

              {/* 描述 */}
              <span
                style={{
                  display:
                    displaySection?.showDescription === false
                      ? "none"
                      : "block",
                }}
              >
                {project.description}
              </span>
            </CardDescription>
          </CardHeader>
        </div>
      </Card>
    </a>
  );
}
