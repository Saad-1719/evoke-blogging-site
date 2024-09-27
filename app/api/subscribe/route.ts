import { createConnection } from 'mysql2/promise';
import { z } from 'zod';

// MySQL connection configuration
const connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root', 
  database: 'evoke',
};

// Zod schema for email validation
const emailSchema = z.object({
  email: z.string().email(),
});

// POST handler
export async function POST(req: Request) {
  const { email } = await req.json();

  // Validate email using Zod
  const validation = emailSchema.safeParse({ email });

  if (!validation.success) {
    // Return error if validation fails
    return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
  }

  let connection;

  try {
    // Create a MySQL connection
    connection = await createConnection(connectionConfig);

    // Check if the email already exists in the database
    const [existingEmails]: any = await connection.query('SELECT * FROM NewsletterEmail WHERE email = ?', [email]);

    if (existingEmails.length > 0) {
      return new Response(JSON.stringify({ error: 'Email already subscribed' }), { status: 409 });
    }

    // Create new email record in the database
    const [result]: any = await connection.query('INSERT INTO NewsletterEmail (email) VALUES (?)', [email]);

    // Return success response
    return new Response(JSON.stringify({ message: 'Successfully subscribed', id: result.insertId }), { status: 200 });
  } catch (error) {
    console.error('Error adding email to the database:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  } finally {
    if (connection) {
      await connection.end(); // Close the connection
    }
  }
}
