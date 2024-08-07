import Layout from "@/components/home/LayoutWrapper";
import LoginForm from "@/components/LoginForm";
import React from "react";

const Login = () => {
	return (
        <section className="flex flex-col items-center justify-center mx-auto h-screen w-full">
            {/* <Layout> */}
            <div className=" w-1/4 px-4 border rounded-lg flex flex-col items-center justify-center space-y-5 py-5">

            <h1 className="text-4xl">Login</h1>

            <LoginForm/>
            </div>

                {/* </Layout> */}
		</section>
	);
};

export default Login;
