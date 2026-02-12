import { Button } from "@components/ui/button";
import { UserPlus } from "lucide-react";
import { SelfAvatar } from "./SelfAvatar";
import { useEffect, useState } from "react";

import { fetchGitHubData, type GitHubData } from "@lib/dashboard/github";
import { Badge } from "@components/ui/badge";

export const GitHubInfo = () => {
  const [githubData, setGitHubData] = useState<GitHubData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGitHubData();
      setGitHubData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <SelfAvatar />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">SamHacker</h2>
          <a
            href="https://github.com/510208"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <UserPlus />
              關注
              <Badge variant={"default"} className="ml-1 bg-gray-100">
                {githubData ? githubData.followers : "–"}
              </Badge>
            </Button>
          </a>
        </div>
        <p className="mt-4 text-sm">
          {githubData ? githubData.bio : "熱愛程式設計與開源的開發者。"}
        </p>
      </div>
    </>
  );
};
