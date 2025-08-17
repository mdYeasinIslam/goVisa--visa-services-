import connectMongoose from "@/libs/mongodb";
import { UserModel } from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export default async function Post(req: NextRequest) {
  if (req.method !== "POST")
    return NextResponse.json(
      { message: "Method is not allowed" },
      { status: 405 }
    );

  try {
    await connectMongoose();

    const { name, email, password, role } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All field is required" },
        { status: 400 }
      );
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email is already registered",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await UserModel.create({
      name,
      email,
        password: hashedPassword,
      role: role?role:'user'
    });
      
      return NextResponse.json({
    message:"Account is created successfully"
      },
      {status:200})
      
  } catch (error) {
    console.log(error);
   return NextResponse.json(
      { message: "Internal server error", error: error },
      { status: 500 }
    );
  }
}
