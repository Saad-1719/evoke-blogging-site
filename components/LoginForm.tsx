"use client";
import React, { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<form className="space-y-5 py-5 px-8">
			<div className="flex justify-between sapce-x-4">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="userEmail"
					id=""
					className="border"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex justify-between space-x-4" >
				<label htmlFor="email">Password</label>
				<input
					type="password"
					name="Password"
					id=""
					className="border"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
		</form>
	);
};

export default LoginForm;
