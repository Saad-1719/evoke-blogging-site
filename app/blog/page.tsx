import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/home/LayoutWrapper";

// Async function to fetch blogs
async function fetchBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getBlogs`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

const BlogList = async () => {
  const blogs = await fetchBlogs();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {blogs.map((blog: { slug: string; title: string; content?: string; imageUrl: string }) => (
        <li key={blog.slug} className="flex flex-col items-center space-y-4 text-center">
          <Link href={`/blog/${blog.slug}`} className="group flex flex-col items-center space-y-4">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={400}
              height={400}
              className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <h2 className="text-2xl md:text-3xl font-semibold underline transition-transform duration-300 ease-in-out group-hover:scale-105">
              {blog.title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
              {blog.content ? blog.content.substring(0, 100) + "..." : "No excerpt available."}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

// Main Blog component with Suspense
const Blog = () => {
  return (
    <section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center flex-col">
      <Layout>
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold py-10 text-center">Blogs</h1>
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-center">
          <Suspense fallback={<div className="loader"></div>}>
            <BlogList />
          </Suspense>
        </div>
      </Layout>
    </section>
  );
};

export default Blog;
