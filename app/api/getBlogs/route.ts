import db from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    // try {
    //     const res = await db.query('SELECT * FROM "Blog"'); // Query the blog table
    //     return NextResponse.json(res.rows); // Access the rows directly
    // } catch (error) {
    //     return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    // }
        try {
            const res = await db.query('SELECT * FROM "Blog"'); // Query the blog table
            return NextResponse.json(res.rows); // Access the rows directly
        } catch (error) {
            console.error('Database query error:', error); // Log the error
            return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
        }    
}

export async function POST() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}