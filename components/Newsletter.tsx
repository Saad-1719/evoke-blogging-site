import React from "react";
import Layout from "./home/LayoutWrapper";

const Newsletter = () => {
	return (
		<div className="bg-yellow-400 sm:p-0 p-3">
			<Layout>
				<div className=" flex flex-col items-center justify-center sm:py-9 py-2">
					<div className="text-center pb-6">
						<p className="font-bold text-2xl">
							Newsletter - Stay tune and get the latest update
						</p>
						<p className="text-lg">Far far away, behind the word mountains</p>
					</div>
					<div className="text-black border border-black px-1 py-1 sm:space-x-10 rounded-sm flex flex-col sm:flex-row items-center justify-center w-full sm:w-fit">
						<input
							className="placeholder-black bg-transparent border-none focus:outline-none active:outline-none px-4 py-4 sm:py-0"
							type="email"
							name=""
							id=""
							placeholder="Enter Email Address"
							required
						/>
						<button className="bg-black text-white rounded-sm px-4 py-2 w-full sm:w-fit">
							{" "}
							Subscribe
						</button>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Newsletter;
