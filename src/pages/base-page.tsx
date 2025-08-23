import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import CursorFollower from "../components/CursorFollower";
import GoTopButton from "@/components/ui/go-top";

interface BasePagesProps {
  children: React.ReactNode;
}

export const BasePages: React.FC<BasePagesProps> = ({ children }) => (
  <div className="bg-white dark:bg-black text-black dark:text-white">
    <Navbar />
    <CursorFollower />
    <main>{children}</main>
    <Footer />
    <GoTopButton />
  </div>
);
