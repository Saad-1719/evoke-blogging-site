"use client";
import React, { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		// page not responsive  might change some design
		<form className="space-y-5 flex flex-col pb-5 w-full px-5">
			{/* <div className="flex justify-between  items-center">
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="userEmail"
					id=""
					className="border bg-transparent border-black sm:py-1  sm:px-3 rounded-md"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex justify-between  items-center" >
				<label htmlFor="email">Password:</label>
				<input
					type="password"
					name="Password"
					id=""
					className="border bg-transparent border-black sm:py-1  sm:px-3 rounded-md"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div> */}

			<div className="flex flex-col  items-start space-y-1 w-full">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="userEmail"
					id=""
					placeholder="Type Your Email"
					className="text-sm border-b-black border-b bg-transparent border-black sm:py-1 w-full outline-none"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex flex-col  items-start space-y-1">
				<label htmlFor="email">Password</label>
				<input
					type="password"
					name="Password"
					id=""
					placeholder="Type Your Password"
					className="text-sm border-b-black border-b bg-transparent border-black sm:py-1 w-full outline-none"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button
				type="submit"
				className="text-center text-sm border bg-black text-white border-black w-fit mx-auto py-2 px-4 rounded-full  hover:bg-black/70 transition-colors"
			>
				Submit
			</button>
		</form>
	);
};

export default LoginForm;
