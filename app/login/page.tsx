import Layout from "@/components/home/LayoutWrapper";
import LoginForm from "@/components/LoginForm";
import React from "react";

const Login = () => {
	return (
        <section className="flex flex-col items-center justify-center mx-auto h-screen w-full bg-slate-50">
            {/* <Layout> */}
            <div className=" py-5 space-y-5 border rounded-lg flex flex-col items-center justify-center min-h-96 sm:w-2/4 md:w-1/4 bg-slate-200">

            <h1 className="text-4xl py-5">Login</h1>

            <LoginForm/>
            </div>

                {/* </Layout> */}
		</section>
	);
};

export default Login;
