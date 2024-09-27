  import Link from "next/link";
  import Image from "next/image";
  import Layout from "@/components/home/LayoutWrapper";

  const Blog = async () => {
    // Fetch all blogs from the API
    const res = await fetch('http://localhost:3000/api/getBlogs', {
      cache: 'no-store', // Disables caching for fresh data each time
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const blogs = await res.json();

    return (
      <section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
        <Layout>
            <h1 className="text-7xl font-bold py-10 text-center">Blogs</h1>
          <div className="max-w-5xl mx-auto flex items-center p-4">
            <ul className=" grid grid-cols-2 place-items-center gap-6">
              {blogs.map((blog: { slug: string; title: string; content?: string; imageUrl: string }) => (
                <li key={blog.slug} className="py-4 flex flex-col items-center space-y-4 ">
                  {/* <h2 className="text-3xl font-semibold">{blog.title}</h2> */}
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={400}
                    height={400}
                    className="rounded-lg" // Add rounded corners for aesthetic
                  />
                  <p className="text-gray-600">
                    {blog.content ? blog.content.substring(0, 100) + "..." : "No excerpt available."} {/* Increased excerpt length */}
                  </p>
                  {/* Link to the dynamic blog post page */}
                  <Link href={`/blog/${blog.slug}`} className="text-blue-500 underline">
                    Read More
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Layout>
      </section>
    );
  };

  export default Blog;


 