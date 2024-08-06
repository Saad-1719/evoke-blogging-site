import React from "react";
import Layout from "./LayoutWrapper";

const Hero = () => {
	return (
		<>
			<section className="w-full pt-4 pb-4 h-screen bg-gradient-to-r bg-gray-200 text-black flex items-center justify-center">
				<Layout>
					<div className=" p-8  rounded-md flex flex-col">
						<p className="text-md flex w-2/4 justify-end">
							A PERSONAL &nbsp; <span className="underline">BLOG</span>{" "}
						</p>
						<h1 className="text-9xl font-bold w-3/4 flex justify-end">
							E{" "}
							<span className="text-inherit outline outline-8 outline-black ">vok</span>{" "}
							{/* <span className="text-inherit outline outline-8 outline-black">o</span>{" "} */}
							{/* <span className="text-inherit text- outline outline-8 outline-black">k</span>{" "} */}
							e.
						</h1>
						<p className="mt-4 w-full flex justify-end text-2xl font-light">
							<span className="">
								I am a Software Engineer, Photographer & Blogger
							</span>
						</p>
						{/* <svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-10 h-10 mt-8 animate-bounce"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
							/>
						</svg> */}
					</div>
				</Layout>
			</section>
			<section className="w-full pt-4 pb-4 h-screen bg-slate-900 text-white flex items-center justify-center">
				<Layout>
					<div className="bg-yellow-400 p-8 text-cyan-500 rounded-md">
						<p className="text-lg">Hello! Welcome to</p>
						<h1 className="text-4xl font-bold">Readit blog</h1>
						<p className="mt-4">
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts. Separated
							they live in Bookmarksgrove right at the coast of the Semantics, a
							large language ocean.
						</p>
					</div>
				</Layout>
			</section>
		</>
	);
};

export default Hero;
