import Layout from "@/components/home/LayoutWrapper";
import React from "react";
import CommentSection from "@/components/CommentSection";
import Image from "next/image";

const Blog = () => {
	return (
		<section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
			<Layout>
				<div className="max-w-5xl py-8 mx-auto flex flex-col items-center">
					<h1 className="text-7xl font-bold py-10">TITLE</h1>
					<Image
						src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
						alt=""
						width={400}
						height={400}
						style={{
							height: "50%",
							width: "auto",
							objectFit: "cover",
						}}
					/>
					<div className="leading-loose flex flex-col text-gray-300">
						
					</div>
				</div>
            </Layout>
            <CommentSection/>
		</section>
	);
};

export default Blog;