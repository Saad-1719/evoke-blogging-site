import Layout from "@/components/home/LayoutWrapper";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const page = () => {
	return (
		<>
			<Head>
				<title>About Me - Saad | Software Engineer and Blogger</title>
				<meta
					name="description"
					content="Learn more about Saad, a passionate Software Engineering student and hobby blogger based in Pakistan. Explore his journey through coding and personal storytelling."
				/>
				<meta
					name="keywords"
					content="Software Engineering Student, Blogger, Saad, Pakistan, Software Development, Personal Blog, Coding, Technology, Lifestyle"
				/>
				<link rel="canonical" href="https://evoke-blog.netlify.app/aboutme" />
				
				{/* Open Graph Meta Tags for Social Sharing */}
				<meta property="og:title" content="About Saad - Software Engineer & Blogger" />
				<meta
					property="og:description"
					content="Saad is a Software Engineering student and a hobby blogger. Discover his journey in software development and personal reflections."
				/>
				<meta property="og:image" content="https://i.imghippo.com/files/5RbeK1727467321.jpg" />
				<meta property="og:url" content="https://evoke-blog.netlify.app/aboutme" />
				<meta property="og:type" content="website" />
				
			</Head>

			<section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
				<Layout>
					<h1 className="py-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
						About Me
					</h1>
					<div className="grid  grid-cols-1 sm:grid-cols-2 pt-4 sm:space-x-10 space-y-4 p-4 place-items-center">
						<div>
							<Image
								src="https://i.imghippo.com/files/5RbeK1727467321.jpg"
								alt="Saad's Portrait"
								width={400}
								height={400}
								className="aspect-auto"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<p className="flex items-start text-gray-400 text-xs font-bold">
								I&apos;M SAAD
							</p>
							<p className=" text-4xl">
								I am a Software Engineering Student and Hobby Blogger
								Based in Pakistan
							</p>
							<ul className="py-4 space-y-4">
								{/* Software engineer */}
								<Link
									href="https://saaadi.netlify.app/"
									target="_blank"
									className="bg-white px-6 py-4 flex items-center justify-center space-x-4 hover:text-white hover:bg-gray-900 transition-all duration-150 ease-in-out hover:stroke-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.25}
										stroke="currentColor"
										className="size-21"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
										/>
									</svg>

									<span>
										<h1 className="py-2 font-semibold text-xl">
											Software Engineer To Be
										</h1>
										<p className="font-medium text-gray-400">
											As a software engineering student, I navigate a world where logic meets creativity, and every line of code is a step toward innovation. Yet, beneath the algorithms and problem-solving lies something deeper—personal experiences, challenges, and growth. Through the lens of software development, I explore how the past informs the future, how each bug fixed or feature built mirrors our own journeys of learning and transformation.
										</p>
									</span>
								</Link>

								{/* Blogger */}
								<Link
									href="/blog"
									className="bg-white px-6 py-4 flex items-center justify-center space-x-4 hover:text-white hover:bg-gray-900 transition-all duration-150 ease-in-out hover:stroke-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.25}
										stroke="currentColor"
										className="size-21"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
										/>
									</svg>

									<span>
										<h1 className="py-2 font-semibold text-xl">Hobby Blogger</h1>
										<p className="font-medium text-gray-400">
											A gentle stream named Evoke flows through the landscapes of our lives, summoning memories and emotions that shape who we are. Here, we gather fragments of the past—moments of joy, sorrow, love, and reflection—to inspire growth and introspection. Each story is a ripple in the current, inviting you to explore your own journey, find meaning in your experiences, and connect with the shared human spirit.
										</p>
									</span>
								</Link>
							</ul>
						</div>
					</div>
				</Layout>
			</section>
		</>
	);
};

export default page;
