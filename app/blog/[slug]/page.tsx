import Image from "next/image";
import Layout from "@/components/home/LayoutWrapper";
import CommentSection from "@/components/CommentSection";
import { Inter } from "next/font/google";

// Dynamic blog post page that fetches data based on the slug
interface Params {
  params: {
    slug: string;
  };
}

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const BlogPost = async ({ params }: Params) => {
  const { slug } = params;

  // Fetch all blog posts from the API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getBlogs`);

  if (!res.ok) {
    // Handle the error if the blog posts cannot be fetched
    return (
      <section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
        <Layout>
          <div className="max-w-5xl py-8 mx-auto flex flex-col items-center">
            <h1 className="text-5xl font-bold py-10">Error fetching blog posts.</h1>
          </div>
        </Layout>
      </section>
    );
  }

  const blogPosts = await res.json();

  // Find the blog post that matches the incoming slug
  interface BlogPost {
    id: number,
    slug: string;
    title: string;
    imageUrl: string;
    content: string;
    dateAdded: string;
  }

  const blogPost = blogPosts.find((post: BlogPost) => post.slug === slug);

  // Check if the blogPost matches the expected structure
  if (!blogPost || !blogPost.title || !blogPost.imageUrl || !blogPost.content) {
    return (
      <section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
        <Layout>
          <div className="max-w-5xl py-8 mx-auto flex flex-col items-center">
            <h1 className="text-5xl font-bold py-10">Blog post not found or data is incomplete.</h1>
          </div>
        </Layout>
      </section>
    );
  }

  return (
    <section className="w-full px-4 pb-0 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
  <Layout>
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4 pt-10 ">
      {/* Adjust the title size for different screens */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">{blogPost.title}</h1>

      {/* Make the image responsive */}
      <Image
        src={blogPost.imageUrl}
        alt={blogPost.title}
        width={800}  // This sets a max width but won't stretch beyond the container
        height={400} // This maintains the aspect ratio
        className="w-auto sm:max-w-3xl h-auto sm:h-[550px] rounded-lg" // Set a max width and make it scale down for smaller screens
      />

      <div className=" text-gray-700 text-left w-full">
        <p>Date Written: {new Date(blogPost.dateAdded).toLocaleDateString()}</p>
      </div>

      {/* Blog content with adjusted max width for readability */}
      <div className="black max-w-7xl mx-auto text-left">
        <pre className={`whitespace-pre-wrap text-base sm:text-lg md:text-xl lg:text-2xl ${inter.className}`}>
          {blogPost.content}
        </pre>
      </div>
    </div>
  </Layout>

  {/* Pass the blog slug to CommentSection */}
  <CommentSection blogId={blogPost.id} />
</section>

  );
};

export default BlogPost;
