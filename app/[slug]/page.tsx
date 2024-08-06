import Layout from "@/components/home/LayoutWrapper";
import React from "react";
import TextReveal from "@/components/ui/TextReveal";
import CommentSection from "@/components/CommentSection";

const Blog = () => {
	return (
		<section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
			<Layout>
				<div className="max-w-5xl py-8 mx-auto flex flex-col items-center">
					<h1 className="text-7xl font-bold py-10">TITLE</h1>
					<img
						src="/assets/hero/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg"
						alt=""
						style={{
							height: "50%",
							width: "auto",
							objectFit: "cover",
						}}
					/>
					<div className="leading-loose flex flex-col text-gray-300">
						<TextReveal
							text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius dolorem quibusdam voluptatem fuga, perferendis repudiandae excepturi voluptas debitis asperiores hic. 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum ab quisquam mollitia eum soluta, vel placeat nobis eveniet incidunt. Quae iste, totam explicabo perferendis impedit et voluptatem nisi sapiente? Tempora sed, voluptatum nam possimus quas ut quam, dolorem soluta maxime minima ipsa consequuntur aliquid, reiciendis impedit accusamus sint harum odio sunt. Quidem dolorem vel consectetur blanditiis, facilis aut animi quisquam accusantium! Autem reiciendis pariatur fuga doloremque hic fugiat odit delectus ea tempora dolorem impedit laborum temporibus reprehenderit, rerum adipisci culpa, dicta sit quia tempore harum eligendi consequuntur. Repellat similique sapiente obcaecati nihil dolores ratione sed minus perspiciatis repudiandae exercitationem."
						/>
					</div>
				</div>
            </Layout>
            <CommentSection/>
		</section>
	);
};

export default Blog;