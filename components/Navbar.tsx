"use client"
import React, { useState, useEffect } from "react";
import Layout from "./home/LayoutWrapper";
import Link from "next/link";
// import { useRouter } from "next/router";

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(true);
	// const router = useRouter();
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

	// const isActive = (path:string) => router.pathname === path ? 'text-black' : 'text-gray-400';

	return (
		<header className={`bg-slate-50 backdrop-blur-lg fixed flex items-center top-0 left-0 w-full z-10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
			{/* <Layout> */}
				<nav className="flex justify-between items-center pt-4 pb-4 w-3/4 mx-auto">
					<ul>
						<li className="flex text-2xl font-bold text-Black  px-4 py-2 ">Evoke.</li>
					</ul>
					<ul className="flex justify-center items-center space-x-6">
						<Link href="/" className="rounded-full px-4 py-2 text-gray-400 hover:text-black transition-colors duration-75 ease-in-out font-semibold hover:cursor-pointer underline-animation ">Home</Link>
						<Link href="/blog" className="rounded-full px-4 py-2 text-gray-400 hover:text-black transition-colors duration-75 ease-in-out font-semibold hover:cursor-pointer underline-animation ">Blogs</Link>
						<Link href="/pov" className="rounded-full px-4 py-2 text-gray-400 hover:text-black transition-colors duration-75 ease-in-out font-semibold hover:cursor-pointer underline-animation ">POV</Link>
						<Link href="/gallery" className="rounded-full px-4 py-2 text-gray-400 hover:text-black transition-colors duration-75 ease-in-out font-semibold hover:cursor-pointer underline-animation ">Gallery</Link>
						<Link href="/aboutme" className="rounded-full px-4 py-2 text-gray-400 hover:text-black transition-colors duration-75 ease-in-out font-semibold hover:cursor-pointer underline-animation ">About Me</Link>
					</ul>
				</nav>
			{/* </Layout> */}
		</header>
	);
};

export default Navbar;

