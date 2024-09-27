// "use client";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import Image from 'next/image';
// import "aos/dist/aos.css";
// import Link from "next/link";


// const LatestBlogs = async () => {
//     const res = await fetch('http://localhost:3000/api/getBlogs');
      
//       if (!res.ok) {
//         throw new Error('Failed to fetch blogs');
//       }
  
//     const blogs = await res.json();
//   return (
//     <section className="w-full px-4  mx-auto pb-8 bg-slate-100 text-black flex justify-center overflow-x-hidden ">
// 				<div className=" max-w-7xl ">
// 					<h1
// 						className="text-5xl items-center flex font-bold justify-center py-6"
// 						data-aos="fade-up"
// 					>
// 						Latest
// 					</h1>
//               <div className=" pt-4 space-y-4 ">
//               {blogs.map((blog: { slug: string; title: string; content?: string; imageUrl: string }) => (
// 						<div className=" grid grid-cols-1 sm:grid-cols-2 place-items-stretch sm:space-x-10 ">
// 							<div data-aos="fade-right">
// 								<Image
// 									className="h-[250px] sm:h-[500px] w-[100%] object-cover"
// 									src={blog.imageUrl}
									
// 						width={400}
// 						height={400}
// 									alt=""
// 								/>
// 							</div>
// 							<div className="sm:w-3/4" data-aos="fade-left">
// 								<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold underline underline-offset-2 pb-4">
// 									{blog.title}
// 								</h1>
// 								<p className=" line-clamp-4 text-base sm:text-lg md:text-xl space-y-8">
// 									{blog.content}
// 								</p>
// 								<a
// 									href=""
// 									className="flex space-x-2 sm:font-semibold rounded-md border w-fit border-black p-2 bg-black text-white my-2"
// 								>
// 									<Link href={`/blog/${blog.slug}`} className="text-sm">Read More</Link>
// 									<span className="flex items-center justify-center">
// 										<svg
// 											xmlns="http://www.w3.org/2000/svg"
// 											fill="none"
// 											viewBox="0 0 24 24"
// 											strokeWidth={1.5}
// 											stroke="currentColor"
// 											className=" size-4  sm:size-6 animate-pulse"
// 										>
// 											<path
// 												strokeLinecap="round"
// 												strokeLinejoin="round"
// 												d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
// 											/>
// 										</svg>
// 									</span>
// 								</a>
// 							</div>
// 						</div>
//                   ))}
//               </div>
//               </div>
// 			</section>
//   )
// }

// export default LatestBlogs


import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { use } from 'react';

// Move the data fetching logic outside the component
async function getBlogs() {
  const res = await fetch('http://localhost:3000/api/getBlogs', { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  return res.json();
}

// This is now a Server Component
export default function LatestBlogs() {
  const blogs = use(getBlogs());

  return (
    <section className="w-full px-4 mx-auto pb-8 bg-slate-100 text-black flex justify-center overflow-x-hidden">
      <div className="max-w-7xl">
        <h1 className="text-5xl items-center flex font-bold justify-center py-6">
          Latest
        </h1>
        <div className="pt-4 space-y-4">
          {blogs.slice(0,2).map((blog: { slug: string; title: string; content?: string; imageUrl: string }) => (
            <div key={blog.slug} className="grid grid-cols-1 sm:grid-cols-2 place-items-stretch sm:space-x-10">
              <div>
                <Image
                  className="h-[250px] sm:h-[500px] w-[100%] object-cover"
                  src={blog.imageUrl}
                  width={400}
                  height={400}
                  alt={blog.title}
                />
              </div>
              <div className="sm:w-3/4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold underline underline-offset-2 pb-4">
                  {blog.title}
                </h1>
                <p className="line-clamp-4 text-base sm:text-lg md:text-xl space-y-8">
                  {blog.content}
                </p>
                <Link 
                  href={`/blog/${blog.slug}`} 
                  className="flex space-x-2 sm:font-semibold rounded-md border w-fit border-black p-2 bg-black text-white my-2"
                >
                  <span className="text-sm">Read More</span>
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 sm:size-6 animate-pulse"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}