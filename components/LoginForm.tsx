"use client";
import React, { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	

	return (
		<form className="px-2 space-y-5 sm:py-5 sm:px-8 flex flex-col ">
			<div className="flex justify-between space-x-4 items-center">
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="userEmail"
					id=""
					className="border bg-transparent border-black sm:py-1 p-1 sm:px-3 rounded-md"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex justify-between space-x-4 items-center" >
				<label htmlFor="email">Password:</label>
				<input
					type="password"
					name="Password"
					id=""
					className="border bg-transparent border-black sm:py-1 p-1 sm:px-3 rounded-md"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button type="submit" className="text-center border bg-black text-white border-black py-2 px-3 rounded-md w-fit mx-auto hover:bg-black/70 transition-colors">Submit</button>
		</form>
	);
};

export default LoginForm;
