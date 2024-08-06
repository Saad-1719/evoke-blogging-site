// import Layout from "@/components/home/LayoutWrapper";
// import React from "react";

// const page = () => {
// 	return (
// 		<section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
// 			<Layout>
// 				<div className="max-w-5xl pt-16 py-8 mx-auto flex flex-col items-center bg-green-500">
// 						<div className=" bg-slate-700 rounded-lg p-4 w-2/4 text-white">
// 							<span className="py-4 px-2 w-14 h-14 flex items-center relative ">
// 								<svg
// 									viewBox="0 0 16 16"
// 									version="1.1"
// 									xmlns="http://www.w3.org/2000/svg"
// 									fill="#ffffff"
// 								>
// 									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
// 									<g
// 										id="SVGRepo_tracerCarrier"
// 										stroke-linecap="round"
// 										stroke-linejoin="round"
// 									></g>
// 									<g id="SVGRepo_iconCarrier">
// 										{" "}
// 										<rect
// 											width="16"
// 											height="16"
// 											id="icon-bound"
// 											fill="none"
// 										></rect>{" "}
// 										<path d="M16,3V1c-4.188,0-7,2.812-7,7v7h7V8h-5C11,4.916,12.916,3,16,3z M0,8v7h7V8H2c0-3.084,1.916-5,5-5V1C2.812,1,0,3.812,0,8z"></path>{" "}
// 									</g>
// 								</svg>
// 							</span>
// 							<p className="p-4">
// 								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
// 								non numquam eligendi quos optio atque nihil, fugit rem magni
// 								perferendis dignissimos placeat ducimus fuga corporis similique.
// 								Ipsam accusantium deserunt porro!
//                         </p>

// 							<span className="py-4 px-2 w-14 h-14 items-end flex justify-center relative left-3/4 ">
// 								<svg
// 									viewBox="0 0 16 16"
// 									version="1.1"
// 									xmlns="http://www.w3.org/2000/svg"
// 									fill="#ffffff"
// 								>
// 									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
// 									<g
// 										id="SVGRepo_tracerCarrier"
// 										stroke-linecap="round"
// 										stroke-linejoin="round"
// 									></g>
// 									<g id="SVGRepo_iconCarrier">
// 										{" "}
// 										<rect
// 											width="16"
// 											height="16"
// 											id="icon-bound"
// 											fill="none"
// 										></rect>{" "}
// 										<path d="M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z"></path>{" "}
// 									</g>
// 								</svg>
// 							</span>
// 						</div>
// 					</div>
// 			</Layout>
// 		</section>
// 	);
// };

// export default page;
import Layout from "@/components/home/LayoutWrapper";
import React from "react";

const page = () => {
	return (
		<section className="w-full pb-20 bg-slate-100 text-black flex items-center justify-center overflow-x-hidden flex-col">
            <Layout>
                {/* Headings */}

                <h1 className="text-7xl text-center py-6">POV</h1>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* pov cards */}
					<div className="bg-slate-700 rounded-lg p-8  text-white shadow-lg relative">
						<span className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M16,3V1c-4.188,0-7,2.812-7,7v7h7V8h-5C11,4.916,12.916,3,16,3z M0,8v7h7V8H2c0-3.084,1.916-5,5-5V1C2.812,1,0,3.812,0,8z"></path>
								</g>
							</svg>
						</span>
						<p className="py-8 text-center w-3/4 flex items-center justify-center mx-auto">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit non
							numquam eligendi quos optio atque nihil, fugit rem magni
							perferendis dignissimos placeat ducimus fuga corporis similique.
							Ipsam accusantium deserunt porro! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Reiciendis quae magnam debitis
							animi, repellendus nihil consectetur ad incidunt ducimus rem
							dolorem libero in similique aliquam tempore explicabo doloribus
							quasi optio?
						</p>
						<span className="absolute bottom-4 right-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z"></path>
								</g>
							</svg>
						</span>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-8 text-white shadow-lg relative">
						<span className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M16,3V1c-4.188,0-7,2.812-7,7v7h7V8h-5C11,4.916,12.916,3,16,3z M0,8v7h7V8H2c0-3.084,1.916-5,5-5V1C2.812,1,0,3.812,0,8z"></path>
								</g>
							</svg>
						</span>
						<p className="py-8 text-center w-3/4 flex items-center justify-center mx-auto">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit non
							numquam eligendi quos optio atque nihil, fugit rem magni
							perferendis dignissimos placeat ducimus fuga corporis similique.
							Ipsam accusantium deserunt porro! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Reiciendis quae magnam debitis
							animi, repellendus nihil consectetur ad incidunt ducimus rem
							dolorem libero in similique aliquam tempore explicabo doloribus
							quasi optio?
						</p>
						<span className="absolute bottom-4 right-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z"></path>
								</g>
							</svg>
						</span>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-8 text-white shadow-lg relative">
						<span className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M16,3V1c-4.188,0-7,2.812-7,7v7h7V8h-5C11,4.916,12.916,3,16,3z M0,8v7h7V8H2c0-3.084,1.916-5,5-5V1C2.812,1,0,3.812,0,8z"></path>
								</g>
							</svg>
						</span>
						<p className="py-8 text-center w-3/4 flex items-center justify-center mx-auto">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit non
							numquam eligendi quos optio atque nihil, fugit rem magni
							perferendis dignissimos placeat ducimus fuga corporis similique.
							Ipsam accusantium deserunt porro! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Reiciendis quae magnam debitis
							animi, repellendus nihil consectetur ad incidunt ducimus rem
							dolorem libero in similique aliquam tempore explicabo doloribus
							quasi optio?
						</p>
						<span className="absolute bottom-4 right-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z"></path>
								</g>
							</svg>
						</span>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-8 text-white shadow-lg relative">
						<span className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M16,3V1c-4.188,0-7,2.812-7,7v7h7V8h-5C11,4.916,12.916,3,16,3z M0,8v7h7V8H2c0-3.084,1.916-5,5-5V1C2.812,1,0,3.812,0,8z"></path>
								</g>
							</svg>
						</span>
						<p className="py-8 text-center w-3/4 flex items-center justify-center mx-auto">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit non
							numquam eligendi quos optio atque nihil, fugit rem magni
							perferendis dignissimos placeat ducimus fuga corporis similique.
							Ipsam accusantium deserunt porro! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Reiciendis quae magnam debitis
							animi, repellendus nihil consectetur ad incidunt ducimus rem
							dolorem libero in similique aliquam tempore explicabo doloribus
							quasi optio?
						</p>
						<span className="absolute bottom-4 right-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z"></path>
								</g>
							</svg>
						</span>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-8 text-white shadow-lg relative">
						<span className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M16,3V1c-4.188,0-7,2.812-7,7v7h7V8h-5C11,4.916,12.916,3,16,3z M0,8v7h7V8H2c0-3.084,1.916-5,5-5V1C2.812,1,0,3.812,0,8z"></path>
								</g>
							</svg>
						</span>
						<p className="py-8 text-center w-3/4 flex items-center justify-center mx-auto">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit non
							numquam eligendi quos optio atque nihil, fugit rem magni
							perferendis dignissimos placeat ducimus fuga corporis similique.
							Ipsam accusantium deserunt porro! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Reiciendis quae magnam debitis
							animi, repellendus nihil consectetur ad incidunt ducimus rem
							dolorem libero in similique aliquam tempore explicabo doloribus
							quasi optio?
						</p>
						<span className="absolute bottom-4 right-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z"></path>
								</g>
							</svg>
						</span>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-8 text-white shadow-lg relative">
						<span className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M16,3V1c-4.188,0-7,2.812-7,7v7h7V8h-5C11,4.916,12.916,3,16,3z M0,8v7h7V8H2c0-3.084,1.916-5,5-5V1C2.812,1,0,3.812,0,8z"></path>
								</g>
							</svg>
						</span>
						<p className="py-8 text-center w-3/4 flex items-center justify-center mx-auto">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit non
							numquam eligendi quos optio atque nihil, fugit rem magni
							perferendis dignissimos placeat ducimus fuga corporis similique.
							Ipsam accusantium deserunt porro! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Reiciendis quae magnam debitis
							animi, repellendus nihil consectetur ad incidunt ducimus rem
							dolorem libero in similique aliquam tempore explicabo doloribus
							quasi optio?
						</p>
						<span className="absolute bottom-4 right-4 w-14 h-14 flex items-center justify-center">
							<svg
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#ffffff"
								className="w-8 h-8"
							>
								<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									strokeLinecap="round"
									strokeLinejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									<rect
										width="16"
										height="16"
										id="icon-bound"
										fill="none"
									></rect>
									<path d="M0,8h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H0V8z M9,1v7h5c0,3.084-1.916,5-5,5v2c4.188,0,7-2.812,7-7V1H9z"></path>
								</g>
							</svg>
						</span>
                    </div>
                    
				</div>
			</Layout>
		</section>
	);
};

export default page;
