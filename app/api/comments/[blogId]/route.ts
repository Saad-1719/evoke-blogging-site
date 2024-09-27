import db from '../../../../lib/db'; // Importing from the PostgreSQL connection file
import { z } from 'zod';
import { NextResponse } from 'next/server';

// Define Zod schema for validation
const commentSchema = z.object({
    blogId: z.number().int().positive(),
    content: z.string().min(1, "Content cannot be empty"),
    name: z.string().min(1, "Name cannot be empty"),
    email: z.string().email("Invalid email address").min(1, "Email cannot be empty"),
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

    const { blogId, content, name, email } = result.data;

    try {
        const res = await db.query(
            'INSERT INTO "Comment" ("blogId", "commentText", "name", "email") VALUES ($1, $2, $3, $4) RETURNING id',
            [blogId, content, name, email]
        );

        const commentId = res.rows[0].id; // Access the ID of the newly inserted comment

        return new Response(JSON.stringify({ message: 'Comment added', commentId }), {
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
        const res = await db.query('SELECT * FROM "Comment" WHERE "blogId" = $1', [blogId]);
        return new Response(JSON.stringify(res.rows), {
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

export async function PUT() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}