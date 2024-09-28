// import Hero from "@/components/home/Hero";
// import LatestBlogs from "@/components/LatestBlogs";
// export default function Home() {
//   return <main>
//     <Hero>
//       <LatestBlogs blogs={[]}/>
//       </Hero>
//   </main>;
// }

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getBlogs`); // Optionally set cache behavior
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
    console.error('Error fetching blogs:', error);
  }

  return (
    <main>
      <Hero>
        <LatestBlogs blogs={blogs} />
      </Hero>
    </main>
  );
}
