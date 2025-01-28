import { dbConnect } from '../../../utils/dbConnect';
import User from '../../../models/userModel';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function PUT(req: Request) {
  try {
    // Connect to the database
    await dbConnect();

    // Get the Authorization token from the header
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ message: 'Authorization token missing' }, { status: 401 });
    }

    // Verify the JWT token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = decoded.id;

    // Parse the request body
    const { name, email } = await req.json();

    // Validate the fields
    if (!name && !email) {
      return NextResponse.json({ message: 'No fields to update' }, { status: 400 });
    }

    // Find and update the user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { name, email } }, // Only update the fields provided
      { new: true, runValidators: true } // Return the updated document
    ).select('-password'); // Exclude the password field from the response

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Respond with the updated user data
    return NextResponse.json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || 'Something went wrong' }, { status: 500 });
  }
}
