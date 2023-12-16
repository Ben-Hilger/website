import { use } from "react";
import Card from "../components/card";
import Navigation from "../components/navigation";
import { Blog } from "../lib/firebase/blog";
import { getBlogPosts } from "../lib/firebase/firebase";

async function getBlogs() {
  const blogs = await getBlogPosts();
  return blogs.map((blog: Blog) => {
    return (
      <Card 
        key={ blog.id }
        title={ blog.title }
        description={ blog.description }
        createdByUser={ blog.createdByUser }
        createdDate={ blog.createdDate }
      />
    )
  })
}

export default function BlogPage() {
  let blogs = use(getBlogs());

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navigation />
      { blogs }
    </main>
  );
}