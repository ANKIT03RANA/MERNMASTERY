import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../models/users.js";
export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await user.findOne({ email });
  
      if (!existingUser) res.status(404).json({ message: "user doesn't exist" });
  
      const isPasscorrect = await bcrypt.compare(password, existingUser.password);
  
      if (!isPasscorrect)
        res.status(400).json({ message: "Invalid Credentials" });
  
    //   const token = jwt.sign(
    //     { email: existingUser.email, id: existingUser._id },
    //     "test",
    //     { expiresIn: "1h" }
    //   );
  
      res.status(200).json({ result: existingUser, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) res.status(404).json({ message: "user already exists" });

    // if (password !== confirmPassword)
    //   res.status(404).json({ message: "Password doesn't match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await user.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    // await user.save();

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
