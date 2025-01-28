import { dbConnect } from '../../utils/dbConnect';
import User from '../../models/userModel';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Connect to the database
    await dbConnect();

    // Extract the token from cookies
    const cookieStore = await cookies(); // Wait for the Promise to resolve
    const token = cookieStore.get('authToken')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    // Verify the JWT token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = decoded.id;

    // Fetch the user data
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Respond with the user profile
    return NextResponse.json({
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Authentication failed', error }, { status: 500 });
  }
}
