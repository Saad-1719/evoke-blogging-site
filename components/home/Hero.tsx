"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Layout from "./LayoutWrapper";
import "aos/dist/aos.css";

const Hero = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000, // You can customize the animation duration
		});
	}, []);
	return (
		<>
			{/* main section */}

			<section className="w-full pb-4 px-5 h-screen bg-slate-100 text-black flex items-center justify-center overflow-x-hidden">
				<Layout>
					<div className="flex flex-col ">
						<p className="text-md flex w-2/4 justify-end" data-aos="fade-up">
							A PERSONAL &nbsp;{" "}
							<span className="underline underline-offset-2">BLOG</span>{" "}
						</p>
						<h1
							className="text-9xl font-bold w-3/4 flex justify-end"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							Evoke.
						</h1>
						<p
							className="mt-4 w-full flex justify-end text-2xl font-light"
							data-aos="fade-up"
							data-aos-delay="400"
						>
							I am a Software Engineer, Photographer & Blogger
						</p>
					</div>
				</Layout>
			</section>

			{/* feattured section */}

			<section className="w-full pt-4 pb-4 px-5 bg-slate-100 text-black flex justify-center overflow-x-hidden ">
				<Layout>
					<div className=" ">
						<h1
							className="text-5xl items-center flex font-bold justify-center"
							data-aos="fade-up"
						>
							Featured
						</h1>
						<div className=" pt-4 space-y-4 ">
							{/* div 1 */}
							
							<div className=" grid grid-cols-2 place-items-stretch space-x-10 ">
								<div data-aos="fade-right">
									<img 
										src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
										alt=""
										style={{
											height: "500px",
											width: "100%",
											objectFit: "cover",
										}}
									/>
								</div>
								<div className="w-xl " data-aos="fade-left">
									<h1 className="text-8xl font-bold underline underline-offset-2 pb-4">
										Lorem ipsum dolor sit amet.
									</h1>
									<p className=" line-clamp-4 text-xl space-y-8">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Porro, tempora explicabo. Eum eveniet at doloremque dolor
										amet rem dolorem velit! Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Mollitia earum repellat sit,
										sapiente veritatis vel a quasi cumque fugiat doloribus
										voluptatum pariatur nisi at reiciendis itaque quaerat fuga
										asperiores labore.
									</p>
									<a
										href=""
										className="flex space-x-2 font-semibold rounded-md border w-fit border-black p-2 bg-black text-white my-2"
									>
										<span>Read More</span>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6 animate-pulse"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
												/>
											</svg>
										</span>
									</a>
								</div>
							</div>

							<div className=" grid grid-cols-2 place-items-stretch space-x-10">
								<div className="w-xl" data-aos="fade-right">
									<h1 className="text-8xl font-bold underline underline-offset-2 pb-4">
										Lorem ipsum dolor sit amet.
									</h1>
									<p className="line-clamp-4 text-xl space-y-8">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Porro, tempora explicabo. Eum eveniet at doloremque dolor
										amet rem dolorem velit! Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Mollitia earum repellat sit,
										sapiente veritatis vel a quasi cumque fugiat doloribus
										voluptatum pariatur nisi at reiciendis itaque quaerat fuga
										asperiores labore.
									</p>
									<a
										href=""
										className="flex space-x-2 font-semibold rounded-md border w-fit border-black p-2 bg-black text-white my-2"
									>
										<span>Read More</span>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6 animate-pulse"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
												/>
											</svg>
										</span>
									</a>
								</div>

								<div data-aos="fade-left">
									<img
										src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
										alt=""
										style={{
											height: "500px",
											width: "100%",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</section>

			{/* Latest Posts */}

			<section className="w-full pt-4 pb-4 px-5 bg-slate-100 text-black flex justify-center overflow-x-hidden">
				<Layout>
					<div className=" ">
						<h1
							className="text-5xl items-center flex font-bold justify-center"
							data-aos="fade-up"
						>
							Latest
						</h1>
						<div className=" space-y-4 ">
							{/* div 1 */}
							
							<div className=" grid grid-cols-2 place-items-stretch space-x-10 ">
								<div data-aos="fade-right">
									<img 
										src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
										alt=""
										style={{
											height: "500px",
											width: "100%",
											objectFit: "cover",
										}}
									/>
								</div>
								<div className="w-xl " data-aos="fade-left">
									<h1 className="text-8xl font-bold underline underline-offset-2 pb-4">
										Lorem ipsum dolor sit amet.
									</h1>
									<p className=" line-clamp-4 text-xl space-y-8">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Porro, tempora explicabo. Eum eveniet at doloremque dolor
										amet rem dolorem velit! Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Mollitia earum repellat sit,
										sapiente veritatis vel a quasi cumque fugiat doloribus
										voluptatum pariatur nisi at reiciendis itaque quaerat fuga
										asperiores labore.
									</p>
									<a
										href=""
										className="flex space-x-2 font-semibold rounded-md border w-fit border-black p-2 bg-black text-white my-2"
									>
										<span>Read More</span>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6 animate-pulse"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
												/>
											</svg>
										</span>
									</a>
								</div>
							</div>

							<div className=" grid grid-cols-2 place-items-stretch space-x-10">
								<div className="w-xl" data-aos="fade-right">
									<h1 className="text-8xl font-bold underline underline-offset-2 pb-4">
										Lorem ipsum dolor sit amet.
									</h1>
									<p className="line-clamp-4 text-xl space-y-8">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Porro, tempora explicabo. Eum eveniet at doloremque dolor
										amet rem dolorem velit! Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Mollitia earum repellat sit,
										sapiente veritatis vel a quasi cumque fugiat doloribus
										voluptatum pariatur nisi at reiciendis itaque quaerat fuga
										asperiores labore.
									</p>
									<a
										href=""
										className="flex space-x-2 font-semibold rounded-md border w-fit border-black p-2 bg-black text-white my-2"
									>
										<span>Read More</span>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6 animate-pulse"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
												/>
											</svg>
										</span>
									</a>
								</div>

								<div data-aos="fade-left">
									<img
										src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
										alt=""
										style={{
											height: "500px",
											width: "100%",
											objectFit: "cover",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</section>
		</>
	);
};

export default Hero;
