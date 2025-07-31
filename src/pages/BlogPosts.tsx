import Footer from "@/components/Footer";
import { GeneralHeroSection } from "@/components/GeneralHeroSection";
import { Navbar } from "@/components/Navbar";
import { BlogPostGrid } from "@/components/section/BlogPosts/BlogPostGrid";
import GoTopButton from "@/components/ui/go-top";

export const BlogPosts = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <GeneralHeroSection
        title="部落格文章"
        subtitle="看一下部落格的最新文章"
        backgroundImage="/assets/page_background/blog_bg.webp"
        backgroundAuthor="Pixabay"
        backgroundAuthorUrl="https://www.pexels.com/zh-tw/@pixabay/"
      />
      <div className="container mx-auto px-4 py-8 max-w-[1200px] bg-transparent">
        <BlogPostGrid />
      </div>
      <GoTopButton />
      <Footer />
    </div>
  );
};
