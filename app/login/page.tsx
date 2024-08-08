import Layout from "@/components/home/LayoutWrapper";
import LoginForm from "@/components/LoginForm";
import React from "react";

const Login = () => {
	return (
        <section className="flex flex-col items-center justify-center mx-auto h-screen w-full bg-slate-500">
            {/* <Layout> */}
            <div className="px-1 sm:px-4 py-2 sm:py-5 space-y-2 sm:space-y-5 border rounded-lg flex flex-col items-center justify-center   bg-slate-200">

            <h1 className="text-4xl">Login</h1>

            <LoginForm/>
            </div>

                {/* </Layout> */}
		</section>
	);
};

export default Login;
