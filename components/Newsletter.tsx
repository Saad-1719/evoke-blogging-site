"use client";
import React, { useState } from "react";
import Layout from "./home/LayoutWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Send POST request to /api/subscribe
		try {
			const res = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await res.json();

			if (res.ok) {
				toast.success(data.message || "Subscribed successfully!", {
					position: "top-center",
					autoClose: 3000,
				});
				setEmail(""); // Clear input field after successful submission
			} else {
				toast.error(data.error || "Something went wrong", {
					position: "top-center",
					autoClose: 3000,
				});
			}
		} catch (error) {
			toast.error("Error subscribing. Please try again.", {
				position: "top-center",
				autoClose: 3000,
			});
		}
	};

	return (
		<div className="bg-yellow-400 sm:p-0 p-3">
			<Layout>
				<div className="flex flex-col items-center justify-center sm:py-9 py-2">
					<div className="text-center pb-6">
						<p className="font-bold text-2xl">
							Newsletter - Stay tuned and get the latest updates
						</p>
						<p className="text-lg">
							Get insightful articles, tips, and updates delivered straight to
							your inbox!
						</p>
					</div>
					<form
						onSubmit={handleSubmit}
						className="text-black border border-black px-1 py-1 sm:space-x-10 rounded-sm flex flex-col sm:flex-row items-center justify-center w-full sm:w-fit"
					>
						<input
							className="placeholder-black bg-transparent border-none focus:outline-none active:outline-none px-4 py-4 sm:py-0"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter Email Address"
							required
						/>
						<button
							className="bg-black border text-white rounded-sm px-4 py-2 w-full sm:w-fit hover:bg-yellow-400 hover:text-black border-black border-opacity-100 transition-colors duration-300 ease-in-out "
							type="submit"
						>
							Subscribe
						</button>
					</form>
				</div>
			</Layout>
			<ToastContainer />
		</div>
	);
};

export default Newsletter;
