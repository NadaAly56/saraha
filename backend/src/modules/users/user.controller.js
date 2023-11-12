import { userModel } from "../../../database/models/user.model.js";import bcrypt from "bcrypt";
import { catchAsyncError, generateToken } from "../../utilis/utilsFuctions.js";
import { sendEmail } from "../../emails/user.email.js";

const signUp = catchAsyncError( async (req, res) => {
  
    const { name, email, password, age } = req.body;
    const redirectBaseLink = req.header('redirectBaseLink')
    const user = await userModel.findOne({ email });
    if (user) return res.json({ msg: "Email is already in use" });

    const hash = bcrypt.hashSync(password, Number(process.env.ROUND));
    await userModel.insertMany({ name, email, password: hash, age });
     sendEmail({ email, redirectBaseLink });
    res.json({ msg: "success" });
})

const verifyEmail =catchAsyncError( async (req, res) => {
  const email = req.email;

  await userModel.findOneAndUpdate({ email }, { emailConfirmed: true });
  res.json({ msg: "success" });
})

const signIn = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  const match = user ? await bcrypt.compare(password, user.password) : true;

  if (!user || !match)
    return res.json({ msg: "email or password is incorrect" });
  user.password = undefined;
  const token = generateToken({ user });
  res.json({ msg: "success", token, user });
})

const getAllUsers = catchAsyncError( async (req, res) => {
  const users = await userModel.find();
  res.json({ users });
})

const getUser = catchAsyncError(async (req, res)=> {
  const id = req.id
  const user = await userModel.findOne({_id:id})
  res.json({user})
})
export { signIn, signUp, getAllUsers, verifyEmail, getUser };
