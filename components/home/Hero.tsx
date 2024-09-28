import React from "react";
interface HeroProps {
  children: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {

	return (
		<>
			{/* main section */}

			<section className="w-full px-4  h-screen bg-slate-100 text-black flex items-center  overflow-x-hidden ">
				<div
					className="flex flex-col max-w-7xl w-full md:px-10 lg:px-20 space-y-0 mx-auto"
					
				>
					<p className="text-base sm:text-lg flex mx-auto  w-full  lg:w-2/4 xl:w-1/4 lg:justify-start ">
						A PERSONAL &nbsp;{" "}
						<span className="underline underline-offset-2">BLOG</span>{" "}
					</p>
					<h1
						className="text-[90px] sm:text-[190px] font-bold flex justify-start lg:justify-end"
						
					>
						Evoke.
					</h1>
					<p
						className="mt-4 text-xl w-3/4 sm:w-full flex justify-start lg:justify-end sm:text-2xl font-light "
						
					>
						I am a Software Engineer, Photographer & Blogger <br /> Based in
						Pakistan
					</p>
				</div>
			</section>

			{/* Latest section */}
			{children}

		</>
	);
};

export default Hero;
