import db from '../../../lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
      const [rows] = await db.query('SELECT * FROM blog');  // Adjust query based on your table structure
      return NextResponse.json(rows);  // Return the data in JSON format
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
  }
