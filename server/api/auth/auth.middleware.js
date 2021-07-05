const logger = require("../../lib/logs");
const User = require("./auth.model");

const inputExistRegister = (req, res, next) => {
  if (!req.body.userName) {
    logger.error("Missing userName");
    return res.status(401).json({ message: "Missing UserName" });
  } else if (!req.body.password) {
    logger.error("Missing password");
    return res.status(401).json({ message: "Missing password" });
  } else if (!req.body.picture) {
    logger.error("Missing picture");
    return res.status(401).json({ message: "Missing picture" });
  }
  next();
};

const inputExistLogin = (req, res, next) => {
  if (!req.body.userName) {
    logger.error("Missing userName");
    return res.status(401).json({ message: "Missing UserName" });
  } else if (!req.body.password) {
    logger.error("Missing password");
    return res.status(401).json({ message: "Missing password" });
  }
  next();
};

const inputValidationRegister = async (req, res, next) => {
  const { userName } = req.body;
  const foundedUser = await User.findOne({ userName: userName });
  if (foundedUser) {
    logger.error("User already exist");
    return res.status(401).json({ message: "User already exist" });
  }
  next();
};

const inputValidationLogin = async (req, res, next) => {
  const { userName } = req.body;
  const foundedUser = await User.findOne({ userName: userName });
  if (!foundedUser) {
    logger.error("User not exist");
    return res.status(401).json({ message: "User not exist" });
  }
  next();
};
module.exports = {
  inputExistRegister,
  inputExistLogin,
  inputValidationRegister,
  inputValidationLogin,
};
