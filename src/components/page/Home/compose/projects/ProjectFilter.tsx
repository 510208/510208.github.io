"use client";

import * as React from "react";
import { Input } from "@components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Search, ChartPie } from "lucide-react";
import { PROJECTS } from "@shProjects";

interface ProjectFilterProps {
  uniqueStatuses: string[];
  totalCount: number;
}

export function ProjectFilter({
  uniqueStatuses,
  totalCount,
}: ProjectFilterProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("all");

  // 監聽並即時操作 DOM 節點以達到過濾效果
  React.useEffect(() => {
    const projectCards = document.querySelectorAll("#projects-grid > a");
    const filteredCountEl = document.getElementById("filtered-count");
    const noResultsEl = document.getElementById("no-results");

    let visibleCount = 0;

    projectCards.forEach((card) => {
      const element = card as HTMLElement;
      const name = element.dataset.name || "";
      const description = element.dataset.description || "";
      const status = element.dataset.status || "";

      const matchesSearch =
        name.includes(searchTerm.toLowerCase()) ||
        description.includes(searchTerm.toLowerCase());
      const matchesStatus =
        selectedStatus === "all" || status === selectedStatus;

      if (matchesSearch && matchesStatus) {
        element.classList.remove("hidden");
        visibleCount++;
      } else {
        element.classList.add("hidden");
      }
    });

    if (filteredCountEl) {
      filteredCountEl.textContent = visibleCount.toString();
    }

    if (visibleCount === 0) {
      noResultsEl?.classList.remove("hidden");
    } else {
      noResultsEl?.classList.add("hidden");
    }
  }, [searchTerm, selectedStatus]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {/* 搜尋輸入框 */}
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="搜尋專案名稱或描述..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            className="pl-10"
          />
        </div>

        {/* 狀態過濾下拉選單 */}
        <div className="w-32 flex-none sm:w-40">
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-full">
              <ChartPie className="mr-2 h-4 w-4" />
              <SelectValue placeholder="選擇狀態" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">所有狀態</SelectItem>
              {uniqueStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status === "on-going" && "維護中"}
                  {status === "paused" && "暫停開發"}
                  {status === "eol" && "已終止維護 (EOL)"}
                  {status === "archived" && "已封存"}
                  {status === "completed" && "已完成"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 結果統計 */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        顯示 <span id="filtered-count">{totalCount}</span> 個專案，共{" "}
        {totalCount} 個
      </div>
    </div>
  );
}
