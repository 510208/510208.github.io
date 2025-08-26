import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { BlogPostGrid } from "@/components/section/BlogPosts/BlogPostGrid";
import { BasePages } from "./base-page";

export const BlogPosts = () => {
  return (
    <BasePages>
      <GeneralHeroSection
        title="Blog Posts"
        subtitle="看一下部落格的最新文章"
        backgroundImage="/assets/page_background/blog_bg.webp"
        backgroundAuthor="Pixabay"
        backgroundAuthorUrl="https://www.pexels.com/zh-tw/@pixabay/"
        backgroundText="部落格文章"
      />
      <div className="container mx-auto px-4 py-8 max-w-[1200px] bg-transparent">
        <BlogPostGrid />
      </div>
    </BasePages>
  );
};
