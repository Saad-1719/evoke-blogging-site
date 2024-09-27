"use client";
import React, { useState, useEffect,useCallback } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CommentSectionProps {
    blogId: number;
}

const CommentSection = ({ blogId }: CommentSectionProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
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

    const fetchComments = useCallback(async () => {
        const res = await fetch(`/api/comments/${blogId}`);
        if (res.ok) {
            const data = await res.json();
            setComments(data);
        } else {
            toast.error("Failed to fetch comments", { position: "top-center", autoClose: 3000 });
        }
    }, [blogId]); // Only re-define if blogId changes

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); 
        
        if (name.trim() === "") {
            toast.error("Name is required", { position: "top-center", autoClose: 3000 });
        } else if (!isEmailValid(email)) {
            toast.error("Invalid email format", { position: "top-center", autoClose: 3000 });
        } else if (message.trim() === "") {
            toast.error("Message field is empty", { position: "top-center", autoClose: 3000 });
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
                    fetchComments();
                    toast.success("Comment added successfully!", { position: "top-center", autoClose: 3000 });
                } else {
                    const errorData = await res.json();
                    toast.error(errorData.error || "Failed to add comment", { position: "top-center", autoClose: 3000 });
                }
            } catch (error) {
                console.error("Error while posting comment:", error);
                toast.error("An unexpected error occurred", { position: "top-center", autoClose: 3000 });
            }
        }
    }

    return (
        <section className="w-full sm:pt-8 sm:pb-8 bg-slate-100 text-black flex items-center justify-start overflow-x-hidden flex-col">
            <div className="max-w-7xl mx-auto w-full px-7">
                <div className="mx-auto space-y-6 sm:p-0">
                    <h1 className="font-light text-4xl">Comments</h1>

                    {/* Render existing comments or 'Be the first to add a comment' */}
                    <div className="space-y-4 pl-4 ">
                        {comments.length > 0 ? (
                            comments.map((comment) => (
                                <div key={comment.id} className="space-y-2">
                                    <h3 className="font-light text-2xl">{comment.name}</h3>
                                    <p className="text-gray-700 text-xs">Date Added: {new Date(comment.createdAt).toLocaleDateString()}</p>
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
            </div>
            <ToastContainer />
        </section>
    );
};

export default CommentSection;
