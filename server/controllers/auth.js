const User = require('../models/user');
const { hashPassword, comparePassword } = require ("../helpers/auth");

exports.register = async (req, res) => {
  // console.log("REGISTER ENDPOINT ==> ", req.body);
  const { name, email, password, secret } = req.body;
  //validation
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be  6 characters long");
  if (!secret) return res.status(400).send("Answer is required");
  //finding User by email
  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email is taken");
  //hash password
  const hashedPassword = await hashPassword(password);
  //creating the user
  const user = new User({ name, email, password: hashedPassword, secret });
  try {
    await user.save();
    console.log("REGISTERED USER ==> ", user);
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log("REGISTER FAILED ==> ", err);
    return res.status(404).send("Error. Try agin");
  }
};
