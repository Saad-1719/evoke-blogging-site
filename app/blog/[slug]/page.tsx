import Image from "next/image";
import Layout from "@/components/home/LayoutWrapper";
import CommentSection from "@/components/CommentSection";

// Dynamic blog post page that fetches data based on the slug
interface Params {
  params: {
    slug: string;
  };
}

const BlogPost = async ({ params }: Params) => {
  const { slug } = params;

  // Fetch all blog posts from the API
  const res = await fetch(`http://localhost:3000/api/getBlogs`, {
    cache: 'no-store', // Disables caching for fresh data each time
  });

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
  const blogPost = blogPosts.find(post => post.slug === slug);

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
    <section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
      <Layout>
        <div className="max-w-5xl py-8 mx-auto flex flex-col items-center">
          <h1 className="text-7xl font-bold py-10">{blogPost.title}</h1>
          <Image
            src={blogPost.imageUrl}
            alt={blogPost.title}
            width={800}  // Increased width for better quality
            height={400} // Maintained aspect ratio
            style={{
              height: "50%",
              width: "auto",
              objectFit: "cover",
            }}
          />
          <div className=" text-gray-700 max-w-5xl mx-auto">
            {/* <TextReveal text={blogPost.content} /> */}
            <p className="max-w-5xl mx-auto">
            {blogPost.content}

            </p>
          </div>
          <div className="mt-5 text-gray-500">
            {/* <p>Author ID: {blogPost.authorId}</p> */}
            <p>Date Added: {new Date(blogPost.dateAdded).toLocaleDateString()}</p>
          </div>
        </div>
      </Layout>

      <CommentSection />
    </section>
  );
};

export default BlogPost;

