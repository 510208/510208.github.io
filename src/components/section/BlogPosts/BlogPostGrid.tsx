import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

export const BlogPostGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card className="bg-white dark:bg-gray-800 transition-transform transform duration-300 hover:scale-101">
        <img
          src="/path/to/image.jpg"
          alt="Blog Post Image"
          className="w-full h-60 object-cover rounded-t-lg"
        />
        <CardHeader>
          <CardTitle className="text-xl font-bold">Blog Post Title</CardTitle>
          <CardDescription className="text-gray-500">
            A brief description of the blog post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Some content about the blog post goes here.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" asChild>
            <a href="/blog-post-link" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </Button>
        </CardFooter>
      </Card>
      {/* Repeat Card for more blog posts */}
    </div>
  );
};
