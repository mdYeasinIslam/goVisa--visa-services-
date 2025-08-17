import { UserInterface } from "@/types/UserType";
import mongoose, { Model, model, Schema } from "mongoose";
import validator from 'validator'
const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    require: true,
    trim: true,
    minLength: [3, "Name must have 3 letter"],
    maxLength: [10, "Name have maximum  10 letter"],
  },
  email: {
    type: String,
    require: true,
    unique: [true, "Email is already used"],
    trim: true,
    validate: [validator.isEmail, "Invalid email is send {VALUE}"],
  },
  password: {
    type: String,
    require: true,
    // minLength: [4, 'Password length should have at least 4'],
    // maxLength:[8,'Password lenght should less than 8'],
    trim: true,
  },
  role: {
    type: String,
    trim: true,
    enum: ["user", "admin", "seller"],
    default: "user",
  },
}, {
    timestamps:true
});

export const UserModel:Model<UserInterface> = mongoose.models.User || model<UserInterface>('User',userSchema)