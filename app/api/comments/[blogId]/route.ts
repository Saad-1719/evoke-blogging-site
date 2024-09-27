// import { NextResponse } from 'next/server';
// import db  from '../../../../lib/db'; // Adjust the import based on your database setup

// // GET method to fetch comments for a specific blog post
// export async function GET(req: Request, { params }: { params: { blogId: string } }) {
//     const { blogId } = params;
    
//     try {
//         const comments = await db.query('SELECT * FROM comment WHERE blogId = ?', [blogId]); // Adjust SQL query as needed
//         return NextResponse.json(comments);
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
//     }
// }

import pool from '../../../../lib/db';
import { z } from 'zod';

// Define Zod schema for validation
const commentSchema = z.object({
    blogId: z.number().int().positive(),
    content: z.string().min(1, "Content cannot be empty"),
    name: z.string().min(1, "Content cannot be empty"),
    email: z.string().min(1, "Content cannot be empty"),
});

// POST method to add a comment
export async function POST(req: Request) {
    const result = commentSchema.safeParse(await req.json());

    if (!result.success) {
        return new Response(JSON.stringify(result.error.errors), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const { blogId, content,name,email } = result.data;

    try {
        const [result]: any = await pool.query(
            'INSERT INTO comment (blogId, commentText,name,email) VALUES (?, ?,?,?)',
            [blogId, content, name, email] 
        );

        return new Response(JSON.stringify({ message: 'Comment added', commentId: result.insertId }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Database error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

// GET method to retrieve comments for a specific blog
export async function GET(req: Request, { params }: { params: { blogId: number } }) {
    const { blogId } = params; // Extract blogId from route parameters

    try {
        const [rows] = await pool.query('SELECT * FROM comment WHERE blogId = ?', [blogId]);
        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Database error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
