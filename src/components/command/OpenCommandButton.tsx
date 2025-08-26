import { Button } from "../ui/button";
import { Command } from "lucide-react";
import React from "react";
import { CommandBox } from "./CommandBox";
import { Dialog, DialogContent } from "../ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface OpenCommandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function OpenCommandButton({
  className,
  ...props
}: OpenCommandButtonProps) {
  const [cmdIsOpen, setCmdIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (cmdIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cmdIsOpen]);

  // 新增快捷鍵監聽
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
      if (isCmdOrCtrl && e.shiftKey && (e.key === "P" || e.key === "p")) {
        e.preventDefault();
        setCmdIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={className}
            onClick={() => setCmdIsOpen(true)}
            title="打開指令面板"
            {...props}
          >
            <Command />
            <span className="sr-only">Open CommandBox</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>打開指令面板</TooltipContent>
      </Tooltip>
      <Dialog open={cmdIsOpen} onOpenChange={setCmdIsOpen}>
        <DialogContent className="max-w-lg p-0 overflow-visible">
          <CommandBox />
        </DialogContent>
      </Dialog>
    </>
  );
}
