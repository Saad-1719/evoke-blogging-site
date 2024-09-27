import db from '../../../lib/db'; // PostgreSQL connection
import { NextRequest, NextResponse } from 'next/server';

import { z } from 'zod';

// Zod schema for email validation
const emailSchema = z.object({
    email: z.string().email(),
});

// POST handler
export async function POST(req: NextRequest) {
    const { email } = await req.json();

    // Validate email using Zod
    const validation = emailSchema.safeParse({ email });

    if (!validation.success) {
        // Return error if validation fails
        return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }

    try {
        // Check if the email already exists in the database
        const res = await db.query('SELECT * FROM "Subscription" WHERE email = $1', [email]);

        if (res.rows.length > 0) {
            return new Response(JSON.stringify({ error: 'Email already subscribed' }), { status: 409 });
        }

        // Create new email record in the database
        const insertResult = await db.query('INSERT INTO "Subscription" ("email") VALUES ($1) RETURNING id', [email]);

        // Return success response
        const id = insertResult.rows[0].id; // Get the inserted ID
        return new Response(JSON.stringify({ message: 'Successfully subscribed', id }), { status: 200 });
    } catch (error) {
        console.error('Error adding email to the database:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}