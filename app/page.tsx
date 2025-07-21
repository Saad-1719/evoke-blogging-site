import Hero from "@/components/home/Hero";
import LatestBlogs from "@/components/LatestBlogs";

// Define the Blog interface
interface Blog {
  slug: string;
  imageUrl: string;
  title: string;
  content: string;
  dateAdded: string;
}

export default async function Home() {
  // Fetch data directly within the component
  let blogs: Blog[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getBlogs`, {
      // Ensure that this request is never cached
      cache: "no-store", // Prevent caching of this request
    });

    if (!res.ok) {
      console.error('Failed to fetch blogs:', res.status, res.statusText);
      return (
        <main>
          <Hero>
            <LatestBlogs blogs={[]} /> {/* Return empty if fetch fails */}
          </Hero>
        </main>
      );
    }

    blogs = await res.json();

    // Sort blogs by dateAdded in descending order
    blogs.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  } catch (error) {
  
  }

  return (
    <main className="min-h-screen">
      <Hero>
        <LatestBlogs blogs={blogs} />
      </Hero>
    </main>
  );
}
