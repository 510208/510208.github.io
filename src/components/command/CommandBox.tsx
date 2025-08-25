import { Earth, Github } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import menuItems from "@/pages/PageList";
import { Link } from "react-router-dom";

export function CommandBox() {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px] max-h-[60vh] overflow-y-auto">
      <CommandInput placeholder="輸入指令並執行搜尋" />
      <CommandList className="max-h-[400px] overflow-y-auto">
        <CommandEmpty>阿勒，找不到啊...</CommandEmpty>
        <CommandGroup heading="頁面列表">
          {menuItems.map((item) => (
            <Link key={item.label} to={item.to}>
              <CommandItem>
                {item.icon}
                <span>{item.labelZh}</span>
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="常用指令">
          <Link to="https://github.com/510208">
            <CommandItem>
              <Github />
              <span>GitHub</span>
            </CommandItem>
          </Link>
          <Link to="https://samhacker.xyz/">
            <CommandItem>
              <Earth />
              <span>SamHacker Blog</span>
            </CommandItem>
          </Link>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
