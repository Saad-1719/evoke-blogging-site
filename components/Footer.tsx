import React from "react";
import Layout from "./home/LayoutWrapper";

const Footer = () => {
	return (
		<footer className="bg-slate-100 py-10">
			<Layout>
				<div className="grid grid-cols-1 p-4 sm:grid-cols-3 lg:grid-cols-4 place-items-center sm:place-items-start grid-col">
					<div className=" sm:col-span-1 lg:col-span-2">
						<h1 className="pb-5 text-xl font-bold">Evoke.</h1>
						<p className="text-gray-400">
							A gentle stream named Evoke flows through their lives, summoning
							memories and emotions that inspire growth and introspection.
						</p>

						<ul className="my-4">
							<li className="w-fit bg-gray-300 rounded-lg hover:cursor-pointer hover:bg-black transition-colors duration-200 ease-in-out p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="30"
									height="30"
									strokeWidth={2}
									viewBox="0 0 50 50"
									fill="white"
								>
									<path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path>
								</svg>
							</li>
						</ul>
					</div>
					<div className="p-3">
						<h1 className="pb-5 text-xl font-bold">Explore</h1>
						<ul className=" space-y-3">
							<li className="flex space-x-1 hover:text-yellow-300 transition-colors duration-100 hover:cursor-pointer text-base font-medium ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
									/>
								</svg>
								<span>HOME</span>
							</li>
							<li className="flex space-x-1 hover:text-yellow-300 transition-colors duration-100 hover:cursor-pointer text-base font-medium ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
									/>
								</svg>
								<span>BLOGS</span>
							</li>
							<li className="flex space-x-1 hover:text-yellow-300 transition-colors duration-100 hover:cursor-pointer text-base font-medium ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
									/>
								</svg>
								<span>POV</span>
							</li>
							<li className="flex space-x-1 hover:text-yellow-300 transition-colors duration-100 hover:cursor-pointer text-base font-medium ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
									/>
								</svg>
								<span>ABOUT ME</span>
							</li>
						</ul>
					</div>

					{/* <div className="p-3 col-span-2">
						<h1 className="pb-5 text-xl font-bold">Recent Posts</h1>
						<ul className="space-y-2">
							<li className="flex items-center space-x-1">
								<img
									src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
									alt=""
									style={{
										height: "auto",
										width: "35px",
										objectFit: "cover",
									}}
								/>{" "}
								<span className="line-clamp-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corrupti, earum odit sunt voluptate suscipit est vitae iste
									nisi inventore velit officiis! Ex, nobis. Officiis, cum.
								</span>
							</li>
							<li className="flex items-center space-x-1">
								<img
									src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
									alt=""
									style={{
										height: "auto",
										width: "35px",
										objectFit: "cover",
									}}
								/>{" "}
								<span className="line-clamp-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corrupti, earum odit sunt voluptate suscipit est vitae iste
									nisi inventore velit officiis! Ex, nobis. Officiis, cum.
								</span>
							</li>
							<li className="flex items-center space-x-1">
								<img
									src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
									alt=""
									style={{
										height: "auto",
										width: "35px",
										objectFit: "cover",
									}}
								/>{" "}
								<span className="line-clamp-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corrupti, earum odit sunt voluptate suscipit est vitae iste
									nisi inventore velit officiis! Ex, nobis. Officiis, cum.
								</span>
							</li>
							<li className="flex items-center space-x-1">
								<img
									src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
									alt=""
									style={{
										height: "auto",
										width: "35px",
										objectFit: "cover",
									}}
								/>{" "}
								<span className="line-clamp-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corrupti, earum odit sunt voluptate suscipit est vitae iste
									nisi inventore velit officiis! Ex, nobis. Officiis, cum.
								</span>
							</li>
						</ul>
					</div> */}

					<div className="p-3">
						<h1 className="pb-5 text-xl font-bold">Have Questions?</h1>
						<a href="" className="flex space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
								/>
							</svg>
							<span>saaadi.work@gmail.com</span>
						</a>
					</div>
				</div>
			</Layout>
		</footer>
	);
};

export default Footer;
