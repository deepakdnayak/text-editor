import { dbConnect } from '../../utils/dbConnect';
import User from '../../models/userModel';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: Request) {
  try {
    const token = req.headers.get('Authorization')?.split(' ')[1]; // Get token from Authorization header

    if (!token) {
      return NextResponse.json({ message: 'Authorization token missing' }, { status: 401 });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!); // Verify token
    const userId = decoded.id;

    // Fetch user profile from the DB
    await dbConnect();
    const user = await User.findById(userId).select('-password'); // Exclude password from the profile

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Return user profile
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error }, { status: 500 });
  }
}
