import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";
import formatDiscordStats from "../lib/get-discord-stats";
import { useState, useEffect } from "react";

const statusColors: Record<string, string> = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
};

const CircleBadge: React.FC<{ status: string; size: number }> = ({
  status,
  size,
}) => {
  return (
    <span
      className={`inline-block w-${size} h-${size} rounded-full ${statusColors[status]}`}
    />
  );
};

export const StatusBadge: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [label, setLabel] =
    useState<string>("怪了，這傢伙在幹嘛連我都不知道...");
  const [discordKey, setDiscordKey] = useState<string>("offline");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const stats = await formatDiscordStats();
        const key = stats?.discord_status ?? "offline";
        if (!mounted) return;
        setDiscordKey(key);

        let text = "怪了，這傢伙在幹嘛連我都不知道...";
        switch (key) {
          case "online":
            text = "上線了，不過不知道在網路上幹什麼";
            break;
          case "idle":
            text = "在掛機，八成在追番或偷懶之類的";
            break;
          case "dnd":
            text = "不要來打擾我，在專心啦！";
            break;
          case "offline":
            text = "應該是下線了，可能在睡覺或忙別的事吧";
            break;
        }
        setLabel(text);
      } catch {
        if (mounted) setLabel("怪了，這傢伙在幹嘛連我都不知道...");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <Badge variant={"secondary"} className="min-h-8 px-4">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-28" />
      </Badge>
    );
  } else {
    return (
      <Badge variant={"secondary"} className="min-h-8 px-4">
        <CircleBadge status={discordKey} size={4} />
        <span className="ml-2 capitalize">{label}</span>
      </Badge>
    );
  }
};
