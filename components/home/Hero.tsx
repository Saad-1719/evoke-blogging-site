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





		// before modifitcation remember these
		// py===0 in each section
		// its the h1 that's using py
		// px-4 for each section
		// heading size = 5xl
		// text size = xl
		// 


		<>
			{/* main section */}

			<section className="w-full px-4  h-screen bg-slate-100 text-black flex items-center  overflow-x-hidden ">
				<div className="flex flex-col max-w-7xl w-full md:px-10 lg:px-20 space-y-0 mx-auto" data-aos="fade-up">


					<p className="text-base sm:text-lg flex mx-auto  w-full  lg:w-2/4 xl:w-1/4 lg:justify-start ">
						A PERSONAL &nbsp;{" "}
						<span className="underline underline-offset-2">BLOG</span>{" "}
					</p>
					<h1
						className="text-[90px] sm:text-[190px] font-bold flex justify-start lg:justify-end"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						Evoke.
					</h1>
					<p
						className="mt-4 text-xl w-3/4 sm:w-full flex justify-start lg:justify-end sm:text-2xl font-light "
						data-aos="fade-up"
						data-aos-delay="400"
					>
						I am a Software Engineer, Photographer & Blogger <br /> Based in
						Pakistan
					</p>
				</div>
			</section>

			{/* feattured section */}

			<section className="w-full px-4  mx-auto bg-slate-100 text-black flex justify-center overflow-x-hidden ">
					<div className=" max-w-7xl ">
						<h1
							className="text-5xl items-center flex font-bold justify-center py-6"
							data-aos="fade-up"
						>
							Featured
						</h1>
						<div className=" pt-4 space-y-4 ">

							<div className=" grid grid-cols-1 sm:grid-cols-2 place-items-stretch sm:space-x-10 ">
								<div data-aos="fade-right">
									<img
										className="h-[250px] sm:h-[500px] w-[100%] object-cover"
										src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
										alt=""
									/>
								</div>
								<div className="sm:w-3/4" data-aos="fade-left">
									<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold underline underline-offset-2 pb-4">
										Lorem ipsum dolor sit amet.
									</h1>
									<p className=" line-clamp-4 text-base sm:text-lg md:text-xl space-y-8">
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
												className=" size-4  sm:size-6 animate-pulse"
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

							<div className=" grid grid-cols-1 sm:grid-cols-2 place-items-stretch sm:space-x-10 ">
								<div data-aos="fade-right">
									<img
										className="h-[250px] sm:h-[500px] w-[100%] object-cover"
										src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
										alt=""
									/>
								</div>
								<div className="sm:w-3/4" data-aos="fade-left">
									<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold underline underline-offset-2 pb-4">
										Lorem ipsum dolor sit amet.
									</h1>
									<p className=" line-clamp-4 text-base sm:text-lg md:text-xl space-y-8">
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
												className=" size-4  sm:size-6 animate-pulse"
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

							{/* <div className=" grid grid-cols-2 place-items-stretch space-x-10">
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
							</div> */}
						</div>
					</div>
				{/* </Layout> */}
			</section>

			{/* Latest Posts */}

			<section className="w-full px-4 mx-auto bg-slate-100 text-black flex justify-center overflow-x-hidden">
				{/* <Layout> */}
					<div className=" max-w-7xl py-6">
						<h1
							className="text-5xl items-center flex font-bold justify-center py-6"
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
				{/* </Layout> */}
			</section>
		</>
	);
};

export default Hero;
