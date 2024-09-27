import db from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
      const [rows] = await db.query('SELECT * FROM blog'); 
      return NextResponse.json(rows);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
  }
