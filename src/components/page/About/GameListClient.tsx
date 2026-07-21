"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { ShsiteConfig } from "@/types/shsite.config";

const GameListClient = ({ game }: { game: ShsiteConfig["game"][0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HoverCard open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className="flex justify-center rounded-lg text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          aria-label={game.name}
        >
          <Card
            className="aspect-2/3 h-auto w-full max-w-60 transition-all duration-300 hover:brightness-90"
            style={{
              backgroundImage: `url(${game.image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        className="flex w-100 gap-0.5"
        onFocusCapture={() => setIsOpen(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false);
          }
        }}
      >
        <div className="flex-shrink-0">
          <img
            src={game.image.src}
            alt={game.name}
            className="aspect-2/3 max-h-48 rounded-md"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{game.name}</h3>
          <p className="text-sm text-muted-foreground">
            {game.platform.join(", ")}
          </p>
          <p className="mt-2 text-sm">{game.description}</p>
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-blue-500 hover:underline focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:outline-none"
          >
            關於這款遊戲
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default GameListClient;
