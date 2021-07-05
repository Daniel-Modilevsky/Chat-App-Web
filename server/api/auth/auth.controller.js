const logger = require("../../lib/logs");
const User = require("./auth.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
let message = "";

const signup = async (req, res) => {
  try {
    const { userName, password, picture } = req.body;
    let newUser = new User({
      _id: mongoose.Types.ObjectId(),
      userName: userName,
      password: bcrypt.hashSync(password, 10),
      picture: picture,
    });
    newUser.save();
    return res.status(200).json({ newUser });
  } catch (error) {
    message = `Error - can not create this user`;
    logger.error(`${message} ${error}`);
    return res.status(401).json({ message });
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const newUser = {
      user_name: userName,
      password: password,
    };
    const profile = await User.findOne({ user_name: newUser.user_name });
    if (!profile) {
      message = "Error - User not exists";
      logger.error(message);
      return res.status(401).json({ message });
    } else {
      if (bcrypt.compareSync(newUser.password, profile.password)) {
        res.status(200).json({ profile });
      } else {
        message = "Error - User Unauthorized Access";
        logger.error(message);
        return res.status(401).json({ message });
      }
    }
  } catch (error) {
    message = `Error - can not Loged in`;
    logger.error(`${message} ${error}`);
    return res.status(401).json({ message });
  }
};

const getAllUsers = async function (req, res) {
  try {
    const users = await User.find();
    logger.info(`founded ${users.length} users`);
    return res.status(200).json(users);
  } catch (error) {
    message = "Error - Failed searching for all users";
    logger.error(`${message} + ${err}`);
    return res.status(400).json({ message });
  }
};

module.exports = { signup, login, getAllUsers };
