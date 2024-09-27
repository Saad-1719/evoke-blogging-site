"use client";
import React, { useState, useEffect } from "react";
import Layout from "./home/LayoutWrapper";

interface CommentSectionProps {
    blogId: number;
}

const CommentSection = ({ blogId }: CommentSectionProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    
    interface Comment {
        id: number;
        name: string;
        email: string;
        createdAt: string;
        commentText: string;
    }

    const [comments, setComments] = useState<Comment[]>([]);

    function isEmailValid(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const fetchComments = async () => {
        const res = await fetch(`/api/comments/${blogId}`);
        if (res.ok) {
            const data = await res.json();
            setComments(data);
        } else {
            console.error("Failed to fetch comments");
        }
    };

    useEffect(() => {
        fetchComments();
    }, [blogId]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); 
        
        if (name.trim() === "") {
            setError("Name is Required");
        } else if (!isEmailValid(email)) {
            setError("Invalid Email Format");
        } else if (message.trim() === "") {
            setError("Message Field is Empty");
        } else {
            try {
                const res = await fetch('/api/comments/[blogId]', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        blogId,
                        content: message,
                        name: name,
                        email: email,
                    }),
                });

                if (res.ok) {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setError("");
                    fetchComments();
                } else {
                    const errorData = await res.json();
                    setError(errorData.error || "Failed to add comment");
                }
            } catch (error) {
                console.error("Error while posting comment:", error);
                setError("An unexpected error occurred");
            }
        }
    }

    return (
        <section className="w-full sm:pt-8 sm:pb-8 bg-slate-100 text-black flex items-center justify-start overflow-x-hidden flex-col">
            <Layout>
                <div className=" mx-auto space-y-6 sm:p-0">
                    <h1 className="font-light text-4xl">Comments</h1>
                    {error && <p className="text-red-500">{error}</p>}

                    {/* Render existing comments or 'Be the first to add a comment' */}
                    <div className="space-y-4 pl-4 ">
                        {comments.length > 0 ? (
                            comments.map((comment) => (
                                <div key={comment.id} className="space-y-2">
                                    <h3 className="font-light text-2xl">{comment.name}</h3>
                                    <p className=" text-gray-700 text-xs">Date Added: {new Date(comment.createdAt).toLocaleString()}</p>
                                    <p className="text-lg text-gray-700 font-medium">{comment.commentText}</p>
                                </div>
                            ))
                        ) : (
                            <p>Be the first to add a comment</p>
                        )}
                    </div>

                    {/* Comment posting form */}
                    <div className="pb-4">
                        <h1 className="pb-10 font-light text-4xl">Leave a Comment</h1>
                        <form
                            onSubmit={handleSubmit}
                            className="border border-rounded flex flex-col px-4 py-7 sm:py-14 sm:px-7 space-y-5 bg-white"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:space-x-7">
                                <label className="flex flex-col space-y-5">
                                    <span className="font-medium">Name *</span>
                                    <input
                                        type="text"
                                        className="py-3 rounded px-4 border border-gray-500"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </label>
                                <label className="flex flex-col space-y-5">
                                    <span className="font-medium">Email *</span>
                                    <input
                                        type="email"
                                        className="py-3 rounded px-4 border border-gray-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="flex flex-col">
                                <label className="flex-col flex space-y-5">
                                    <span className="font-medium">Message *</span>
                                    <textarea
                                        rows={3}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="py-3 rounded px-4 border border-gray-500"
                                        required
                                    />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-400 w-fit px-4 py-2 font-bold rounded"
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
