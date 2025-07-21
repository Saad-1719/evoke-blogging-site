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
				<meta
					property="og:title"
					content="About Saad - Software Engineer & Blogger"
				/>
				<meta
					property="og:description"
					content="Saad is a Software Engineering student and a hobby blogger. Discover his journey in software development and personal reflections."
				/>
				<meta
					property="og:image"
					content="https://i.imghippo.com/files/5RbeK1727467321.jpg"
				/>
				<meta
					property="og:url"
					content="https://evoke-blog.netlify.app/aboutme"
				/>
				<meta property="og:type" content="website" />
			</Head>

			<section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
				<Layout>
					<h1 className="py-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
						About Me
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 pt-4 sm:space-x-10 space-y-4 p-4 place-items-center">
						<div>
							<img
								src="/assets/self.png"
								alt="Saad's Portrait"
							
								className="aspect-auto h-[600px] w-auto rounded-md"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<p className="flex items-start text-gray-400 text-xs font-bold">
								I&apos;M SAAD
							</p>
							<p className="text-4xl">
								I&apos;m a Software Engineer and Dedicated Blogger Based
								in Pakistan
							</p>
							<ul className="py-4 space-y-4">
								{/* Software engineer */}
								<Link
									href="https://www.saaadi.site/"
									target="_blank"
									className="bg-white px-6 py-4 flex items-center justify-center space-x-4 hover:scale-105 transition-all duration-300 ease-in-out hover:stroke-white"
								>
									<img
										src="assets/dev.png"
										alt="Funny GIF"
										className="w-[80px] h-auto"
									/>

									<span>
										<h1 className="py-2 font-semibold text-xl">
											Software Engineer To Be
										</h1>
										<p className="font-medium text-gray-400">
											Currently pursuing a degree in Software Engineering, I’m
											passionate about creating meaningful solutions through
											code. From debugging complex problems to building
											user-centric applications, I’m constantly driven by
											curiosity, learning, and the impact of technology on
											real-world challenges.
										</p>
									</span>
								</Link>

								{/* Blogger */}
								<Link
									href="/blog"
									className="bg-white px-6 py-4 flex items-center justify-center space-x-4 hover:scale-105 transition-all duration-300 ease-in-out hover:stroke-white"
								>
									<img
										src="assets/writer.png"
										alt="writer"
										className="w-[80px] h-auto"
									/>

									<span>
										<h1 className="py-2 font-semibold text-xl">
											Hobby Blogger
										</h1>
										<p className="font-medium text-gray-400">
											Through writing, I reflect on personal experiences and
											shared human stories. My blog, *Evoke*, is a space for
											introspection, storytelling, and connection—where moments
											of joy, challenge, and insight come together to spark
											meaningful dialogue and self-growth.
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
