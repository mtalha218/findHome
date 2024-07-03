import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try{
  
  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create New User
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
  res.status(201).json({message:"User created Successfully"})
  // Save it to database
}
  catch(err){
  res.status(500).json({message:"Failed to create user"})

  }
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
