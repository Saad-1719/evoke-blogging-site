"use client"
import React, { useState, useEffect } from "react";
import Layout from "./home/LayoutWrapper";

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(true);

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
		<header className={`bg-transparent backdrop-blur-lg fixed flex items-center top-0 left-0 w-full z-10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
			<Layout>
				<nav className="flex justify-between items-center pt-4 pb-4">
					<ul>
						<li className="flex text-xl font-bold text-Black py-3 ">Evoke.</li>
					</ul>
					<ul className="flex justify-center items-center space-x-6">
						<li className="rounded-full px-4 py-2">Home</li>
						<li className="rounded-full px-4 py-2">Blogs</li>
						<li className="rounded-full px-4 py-2">POV</li>
						<li className="rounded-full px-4 py-2">About Me</li>
					</ul>
				</nav>
			</Layout>
		</header>
	);
};

export default Navbar;
