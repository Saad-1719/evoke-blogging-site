"use client";
import React, { useState } from "react";
import Layout from "./home/LayoutWrapper";
const CommentSection = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	function isEmailValid(email: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}
	async function handleSubmit(): Promise<void> {
		if (name.trim() === " ") {
			setError("Name is Required");
		} else if (!isEmailValid(email)) {
			setError("Invalid Email Format");
		} else if (message.trim() === "") {
			setError("Message Field is Empty");
		} else {
			try {
			} catch (error) {}
		}
	}

	return (
		<section className="w-full sm:pt-8 sm:pb-8 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
			<Layout>
				{/* main comment container */}
				<div className="max-w-3xl mx-auto space-y-6 p-4 sm:p-0">
					{/* comment section */}

					<h1 className="font-light text-4xl">Commenets</h1>
					<div className="space-y-2">
						<h3 className="font-bold text-xl">John Doe</h3>
						<p>January 31, 2021 at 10:20am</p>
						<p className="max-w-3xl ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
							quidem laborum necessitatibus, ipsam impedit vitae autem, eum
							officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
							impedit necessitatibus, nihil?
						</p>
					</div>

					{/*comment posting form  */}

					<div className="">
						<h1 className="pb-10 font-light text-4xl">Leave a Comment</h1>
						<form
							action=""
							className="border border-rounded flex flex-col px-4 py-7 sm:py-14 sm:px-7 space-y-5 bg-white"
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 w-full space-y-4 sm:space-x-7">
								<label className=" flex flex-col space-y-5">
									<span className="font-medium">Name *</span>
									<input
										type="text"
										className="py-3 rounded px-4 border border-gray-500"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</label>
								<label className=" flex flex-col space-y-5">
									<span className="font-medium">Email *</span>
									<input
										type="email"
										className="py-3 rounded px-4 border border-gray-500"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</label>
							</div>

							<div className="flex flex-col">
								<label className="flex-col flex space-y-5">
									<span className="font-medium">Message *</span>
									<textarea
										name=""
										id=""
										rows={3}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										className="py-3 rounded px-4 border border-gray-500"
									></textarea>
								</label>
							</div>
							<button
								className="bg-yellow-400 w-fit px-4 py-2 font-bold rounded"
								onClick={handleSubmit}
							>
								Post Comment
							</button>
						</form>
					</div>
				</div>
			</Layout>
		</section>
	);
};

export default CommentSection;
