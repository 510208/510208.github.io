import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchBlogPostsData() {
  const query = `
query GetPostsEdges {
  posts {
    edges {
      node {
        id
        title
        excerpt
        date
        uri
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}
  `;

  const blogPosts = [];

  try {
    const response = await fetch("https://samhacker.xyz/sh-graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error("Error fetching blog posts:", result.errors);
      return blogPosts;
    }

    const edges = result.data.posts.edges;
    edges.forEach((edge) => {
      const post = edge.node;
      blogPosts.push({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        uri: post.uri,
        author: {
          name: post.author.node.name,
          avatar: post.author.node.avatar.url,
        },
        featuredImage: post.featuredImage
          ? post.featuredImage.node.mediaItemUrl
          : "https://samhacker.xyz/wp-content/uploads/2024/06/%E9%A0%90%E8%A8%AD.png",
      });
    });

    console.log("Blog posts data generated successfully.");
    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return blogPosts;
  }
}

async function generateBlogPostsData() {
  const posts = await fetchBlogPostsData();
  // 將取得的資料儲存到public/posts-data.json
  const blogPosts = posts.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    uri: post.uri,
    author: {
      name: post.author.name,
      avatar: post.author.avatar,
    },
    featuredImage: post.featuredImage,
  }));

  return blogPosts;
}

generateBlogPostsData()
  .then((data) => {
    const publicDir = path.join(__dirname, "..", "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const outputPath = path.join(publicDir, "posts-data.json");
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), "utf8");

    console.log(`Blog posts data has been written to: ${outputPath}`);
  })
  .catch((error) => {
    console.error("Error generating blog posts data:", error);
  });
