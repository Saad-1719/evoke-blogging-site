import Layout from "@/components/home/LayoutWrapper";
import React from "react";

const page = () => {
	return (
		<section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
			<Layout>
				<h1 className="py-10 flex items-center justify-center font-bold text-5xl">
					About Me
				</h1>
				<div className="grid  grid-cols-1 sm:grid-cols-2 pt-10 sm:space-x-10 space-y-4 p-4">
					<div>
						<img
							src="/assets/hero/WhatsApp Image 2024-08-05 at 16.55.18_761007bb.jpg"
							alt=""
						/>
					</div>
					<div className="flex flex-col justify-center">
						<p className="flex items-start text-gray-400 text-xs font-bold">
							I'M SAAD
						</p>
						<p className=" text-4xl">
							I am a Software Engineer (50%), Hobby Blogger & a Photographer
							Based in Pakistan
						</p>
						<ul className="py-4 space-y-4">
							{/* list items */}

							{/* software engineer */}
							<li className="bg-white px-6 py-4 flex items-center justify-center space-x-4 hover:text-white hover:bg-gray-900 transition-all duration-150 ease-in-out hover:stroke-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.25}
									stroke="currentColor"
									className="size-20"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
									/>
								</svg>

								<span>
									<h1 className="py-2 font-semibold text-xl">
										Software Engineer
									</h1>
									<p className="font-medium text-gray-400">
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts.
									</p>
								</span>
							</li>

							{/* blogger */}
							<li className="bg-white px-6 py-4 flex items-center justify-center space-x-4 hover:text-white hover:bg-gray-900 transition-all duration-150 ease-in-out hover:stroke-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.25}
									stroke="currentColor"
									className="size-20"
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
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts.
									</p>
								</span>
							</li>
							<li className="bg-white px-6 py-4 flex items-center justify-center space-x-4 hover:text-white hover:bg-gray-900 transition-all duration-150 ease-in-out hover:stroke-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.25}
									stroke="currentColor"
									className="size-20"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
									/>
								</svg>

								<span>
									<h1 className="py-2 font-semibold text-xl">Photographer</h1>
									<p className="font-medium text-gray-400">
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts.
									</p>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</Layout>
		</section>
	);
};

export default page;
