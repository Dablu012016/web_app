const jwt = require("jsonwebtoken");
const User =require("../models/user_model")

const authMiddleware = async(req, res, next) => {
  const authHeader = req.header("Authorization"); 


  if (!authHeader) {
    return res.status(401).json({message:"Unauthorized HTTP, Token Not Provide"});
  }

//   console.log("token from auth middleware", authHeader);
  const token = authHeader.split(" ")[1]; // remove Bearer

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    const userData = await User.findOne({email: decoded.email}).select({password:0});
    // console.log(userData)

    req.user = userData;
    req.token = token;
    req.useerID = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({
      message: `Invalid or Expired Token ${error}`
    });
  }
}

module.exports = authMiddleware;