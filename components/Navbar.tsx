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
		<>
		<header
			className={`bg-slate-50 backdrop-blur-lg fixed flex items-center top-5 left-0 w-full z-10 transition-transform duration-300 ${
				isVisible ? "translate-y-0" : "-translate-y-[160%]"
			}`}
		>
			
			<nav className="flex justify-between items-center py-4 px-4 xl:px-0 w-full sm:max-w-7xl mx-auto">
				<ul>
					<Link href="/" className="flex text-2xl font-bold text-black sm:py-2 ">
						Evoke.
					</Link>
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
					{["/", "/blog", "/aboutme"].map((href, index) => (
						<Link
							key={index}
							href={href}
							className="rounded-full px-4 py-2 text-gray-400 hover:text-black transition-colors duration-75 ease-in-out font-semibold hover:cursor-pointer underline-animation"
						>
							{["Home", "Blogs", "About Me"][index]}
						</Link>
					))}
				</ul>
			</nav>

			{/* mobile and tab view menu */}
			{view && (
				<div className={`flex flex-col absolute top-16 right-0 w-full p-4 z-10 bg-slate-50 lg:hidden transition-transform duration-300 ease-in-out ${view ? "scale-100" : "scale-0"}`}>
					<ul className="flex flex-col items-center space-y-2 w-3/4 sm:w-1/4 mx-auto text-center">
						{["/", "/blog", "/aboutme"].map((href, index) => (
							<Link
								key={index}
								href={href}
								className="rounded-lg bg-black w-full py-2 text-white/90"
								onClick={()=>setView(!view)}
							>
								{["Home", "Blogs", "About Me"][index]}
							</Link>
						))}
					</ul>
				</div>
			)}
			</header>
			</>
	);
};

export default Navbar;