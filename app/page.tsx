import Hero from "@/components/home/Hero";
import LatestBlogs from "@/components/LatestBlogs";
export default function Home() {
  return <main>
    <Hero>
      <LatestBlogs blogs={[]}/>
      </Hero>
  </main>;
}
