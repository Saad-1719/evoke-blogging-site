"use client";
import DragDrop from "@/components/dragDrop";
import React, { useState } from "react";

const Editor = () => {
	const [activeTab, setActiveTab] = useState("newBlogs");

	const handleNewBlogs = () => {
		setActiveTab("newBlogs");
	};

	const handleUploadedBlogs = () => {
		setActiveTab("uploadedBlogs");
	};

	const handleViewComments = () => {
		setActiveTab("viewComments");
	};

	return (
		<section className="bg-slate-50 h-screen w-full">
			<div className="flex flex-col space-y-4 items-center justify-center py-10">
				<h1 className="text-4xl font-bold">Editor</h1>

				<div className="flex w-full px-4">
					<aside className="w-1/4 bg-gray-200 p-4 rounded border border-black max-h-full">
						<ul className="space-y-4">
							<li
								className={`text-xl font-bold cursor-pointer p-2 rounded ${
									activeTab === "newBlogs" ? "bg-gray-300" : ""
								}`}
								onClick={handleNewBlogs}
							>
								Add New Blogs
							</li>
							<li
								className={`text-xl font-bold cursor-pointer p-2 rounded ${
									activeTab === "uploadedBlogs" ? "bg-gray-300" : ""
								}`}
								onClick={handleUploadedBlogs}
							>
								Uploaded Blogs
							</li>
							<li
								className={`text-xl font-bold cursor-pointer p-2 rounded ${
									activeTab === "viewComments" ? "bg-gray-300" : ""
								}`}
								onClick={handleViewComments}
							>
								View Comments
							</li>
						</ul>
					</aside>

					<main className="w-3/4 bg-white p-4 ml-4 rounded border border-black">
						{activeTab === "newBlogs" && (
							<form
								action=""
								method="post"
								className="flex flex-col items-center justify-center w-full rounded"
							>
								<div className="grid grid-cols-2 w-full gap-7 px-8">
									<div>
										<label className="flex flex-col items-start justify-center space-y-4 px-2 py-4">
											<span className="text-2xl font-bold">Thumbnail</span>
											<span className="rounded border border-black py-3 px-2 w-full">
												{/* <input
													type="file"
													name="img"
													id=""
													className="w-full"
												/> */}
                                                <DragDrop/>
											</span>
										</label>

										<label className="flex flex-col items-start justify-center space-y-4 px-2 py-4">
											<span className="text-2xl font-bold">Title</span>
											<input
												type="text"
												className="w-full border px-2 py-3 border-black bg-transparent outline-none"
											/>
										</label>
									</div>
									<div>
										<label className="flex flex-col items-start justify-center space-y-4 px-2 py-4 w-full">
											<span className="text-2xl font-bold">Blog</span>
											<textarea
												name=""
												id=""
												rows={4}
												className="w-full px-2 py-3 bg-transparent border border-black"
											></textarea>
										</label>
									</div>
								</div>

								<button
									type="submit"
									className="flex flex-col items-center justify-center px-2 pt-4 border border-black bg-black text-white pb-4 w-fit"
								>
									Add Blog
								</button>
							</form>
						)}

						{activeTab === "uploadedBlogs" && (
							<div className="flex flex-col items-center justify-center w-full bg-gray-200 p-4 rounded border border-black">
								<h2 className="text-2xl font-bold">Uploaded Blogs</h2>
								{/* Display uploaded blogs */}
							</div>
						)}

						{activeTab === "viewComments" && (
							<div className="flex flex-col items-center justify-center w-full bg-gray-200 p-4 rounded border border-black">
								<h2 className="text-2xl font-bold">Comments</h2>
								{/* Display comments */}
							</div>
						)}
					</main>
				</div>
			</div>
		</section>
	);
};

export default Editor;
