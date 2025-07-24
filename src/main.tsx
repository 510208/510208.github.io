import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// Supports weights 100-900
import "@fontsource-variable/noto-sans-tc";
// Supports weights 100-900
import "@fontsource-variable/inter";
// Supports weights 300-700
import "@fontsource-variable/fira-code";

import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
