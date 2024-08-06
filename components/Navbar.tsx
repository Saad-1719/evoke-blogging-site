"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [view, setView] = useState(false);

	useEffect(() => {
		let lastScrollTop = 0;
		const handleScroll = () => {
			let currentScrollTop = window.scrollY;
			if (currentScrollTop > lastScrollTop) {
				// Scrolling down
				setIsVisible(false);
			} else {
				// Scrolling up
				setIsVisible(true);
			}
			lastScrollTop = currentScrollTop;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`bg-slate-50 backdrop-blur-lg fixed flex items-center top-0 left-0 w-full z-10 transition-transform duration-300 ${
				isVisible ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<nav className="flex justify-between items-center py-4 px-4 xl:px-0 w-full sm:max-w-7xl mx-auto">
				<ul>
					<li className="flex text-2xl font-bold text-black sm:py-2 ">
						Evoke.
					</li>
				</ul>

				{/* hamburger */}
				<ul>
					<li
						className="hover:cursor-pointer lg:hidden flex relative"
						onClick={() => setView(!view)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={`w-6 h-6 transition-transform duration-300 ${view ? "rotate-90" : "rotate-0"}`}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
							/>
						</svg>
					</li>
				</ul>

				{/* pc screen menu */}
				<ul className="lg:flex lg:justify-center lg:items-center space-x-6 hidden">
					{["/", "/blog", "/pov", "/gallery", "/aboutme"].map((href, index) => (
						<Link
							key={index}
							href={href}
							className="rounded-full px-4 py-2 text-gray-400 hover:text-black transition-colors duration-75 ease-in-out font-semibold hover:cursor-pointer underline-animation"
						>
							{["Home", "Blogs", "POV", "Gallery", "About Me"][index]}
						</Link>
					))}
				</ul>
			</nav>

			{/* mobile and tab view menu */}
			{view && (
				<div className={`flex flex-col absolute top-20 right-0 w-full p-4 z-10 bg-slate-50 lg:hidden transition-transform duration-300 ease-in-out ${view ? "scale-100" : "scale-0"}`}>
					<ul className="flex flex-col items-center space-y-2 w-3/4 sm:w-1/4 mx-auto text-center">
						{["/", "/blog", "/pov", "/gallery", "/aboutme"].map((href, index) => (
							<Link
								key={index}
								href={href}
								className="rounded-lg bg-black w-full py-2 text-white/90"
								onClick={()=>setView(!view)}
							>
								{["Home", "Blogs", "POV", "Gallery", "About Me"][index]}
							</Link>
						))}
					</ul>
				</div>
			)}
		</header>
	);
};

export default Navbar;

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import 'aos/dist/aos.css';

// const Navbar = () => {
// 	const [isVisible, setIsVisible] = useState(true);
// 	const [view, setView] = useState(false);

// 	useEffect(() => {
// 		let lastScrollTop = 0;
// 		const handleScroll = () => {
// 			let currentScrollTop = window.scrollY;
// 			if (currentScrollTop > lastScrollTop) {
// 				setIsVisible(false);
// 			} else {
// 				setIsVisible(true);
// 			}
// 			lastScrollTop = currentScrollTop;
// 		};

// 		window.addEventListener("scroll", handleScroll);
// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, []);

// 	return (
// 		<header
// 			className={`bg-slate-50 backdrop-blur-lg fixed flex items-center top-0 left-0 w-full z-10 transition-transform duration-300 ${
// 				isVisible ? "translate-y-0" : "-translate-y-full"
// 			}`}
// 		>
// 			<nav className="flex justify-between items-center pt-4 pb-4 w-3/4 mx-auto">
// 				<ul>
// 					<li className="flex text-2xl font-bold text-black px-4 py-2">
// 						Evoke.
// 					</li>
// 				</ul>

// 				{/* hamburger */}
// 				<ul>
// 					<li
// 						className="hover:cursor-pointer lg:hidden flex relative"
// 						onClick={() => setView(!view)}
// 					>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							strokeWidth={1.5}
// 							stroke="currentColor"
// 							className={`w-6 h-6 transition-transform duration-300 ${view ? "rotate-90" : "rotate-0"}`}
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
// 							/>
// 						</svg>
// 					</li>
// 				</ul>

// 				{/* pc screen menu */}
// 				<ul className="lg:flex lg:justify-center lg:items-center space-x-6 hidden">
// 					{["/", "/blog", "/pov", "/gallery", "/aboutme"].map((href, index) => (
// 						<Link
// 							key={index}
// 							href={href}
// 							className="rounded-full px-4 py-2 text-gray-400 hover:text-black transition-colors duration-75 ease-in-out font-semibold hover:cursor-pointer underline-animation"
// 						>
// 							{["Home", "Blogs", "POV", "Gallery", "About Me"][index]}
// 						</Link>
// 					))}
// 				</ul>
// 			</nav>

// 			{/* mobile and tab view menu */}
// 			{view && (
// 				<div
// 					data-aos="fade-down" // AOS attribute for animation
// 					data-aos-duration="500" // Animation duration
// 					className="flex flex-col absolute top-20 right-0 w-full p-4 z-10 bg-slate-50 lg:hidden"
// 				>
// 					<ul className="flex flex-col items-center space-y-2 w-3/4 sm:w-1/4 mx-auto text-center">
// 						{["/", "/blog", "/pov", "/gallery", "/aboutme"].map((href, index) => (
// 							<Link
// 								key={index}
// 								href={href}
// 								className="rounded-lg bg-black w-full py-2 text-white/90"
// 							>
// 								{["Home", "Blogs", "POV", "Gallery", "About Me"][index]}
// 							</Link>
// 						))}
// 					</ul>
// 				</div>
// 			)}
// 		</header>
// 	);
// };

// export default Navbar;
