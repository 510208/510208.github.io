import { Zoomies } from "ldrs/react";
import "ldrs/react/Zoomies.css";
import { Gravatar } from "../ui/Gravatar";
import { isDarkMode } from "@/lib/check-darkmode";

const Loading = () => (
  <div className="flex items-center justify-center h-screen flex-col">
    <div className="h-16">
      <Gravatar size="70" className="rounded-lg" />
    </div>
    <div className="text-lg mt-2">
      <Zoomies
        size="150"
        stroke="5"
        bgOpacity="0.1"
        speed="1.4"
        color={typeof window !== "undefined" && isDarkMode() ? "#fff" : "#222"}
      />
    </div>
  </div>
);

export default Loading;
