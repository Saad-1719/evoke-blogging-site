import React from "react";
import Image from 'next/image';
import Link from "next/link";

interface Blog {
  slug: string;
  imageUrl: string;
  title: string;
  content: string;
  dateAdded: string;
}

interface LatestBlogsProps {
  blogs: Blog[];
}

// Server component to display the latest blogs
export default function LatestBlogs({ blogs }: LatestBlogsProps) {
  return (
    <section className="w-full px-4 mx-auto pb-8 bg-slate-100 text-black flex justify-center overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <h1 className="text-5xl sm:text-7xl md:text-9xl flex items-center font-bold justify-center py-6">
          Latest
        </h1>
        <div className="pt-4 space-y-8">
          {blogs.slice(0, 2).map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.slug}
              className="grid grid-cols-1 sm:grid-cols-2 place-items-stretch sm:space-x-10 gap-8"
            >
              <div>
                <Image
                  className="h-[250px] sm:h-[400px] md:h-[500px] w-full object-cover rounded-lg hover:scale-105 transition-all ease-in-out"
                  src={blog.imageUrl}
                  width={400}
                  height={400}
                  alt={blog.title}
                />
              </div>
              <div className="sm:w-3/4">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold underline underline-offset-2 pb-4 hover:scale-105 transition-all ease-in-out">
                  {blog.title}
                </h1>
                <p className="line-clamp-4 text-base sm:text-lg md:text-xl space-y-4">
                  {blog.content}
                </p>
                <span className="flex space-x-2 sm:font-semibold rounded-md border w-fit border-black p-2 bg-black text-white my-2 hover:scale-105 transition-all ease-in-out">
                  <span className="text-sm">Read More</span>
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 sm:w-6 h-4 sm:h-6 animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Fetching data on the server side
export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getBlogs`);

    if (!res.ok) {
      console.error('Failed to fetch blogs:', res.status, res.statusText);
      return { props: { blogs: [] } }; // Return an empty array on error
    }

    const blogs = await res.json();

    // Sort blogs by dateAdded in descending order
    const sortedBlogs = blogs.sort((a: Blog, b: Blog) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());

    return {
      props: {
        blogs: sortedBlogs,
      },
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { props: { blogs: [] } }; // Return an empty array on error
  }
}


