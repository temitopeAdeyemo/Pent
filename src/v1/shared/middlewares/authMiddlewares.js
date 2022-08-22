// require dependencies
import AppError from "../utils/appError";
import UserRepository from "../../modules/users/repositories/UserRepository";
import JwtClient from "../services/jwtClient";

//  authenticating  users
const authenticate = async (req, res, next) => {
  try {
    let authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json({
        message: "Token is required",
      });
    }

    const authenticationArr = authorization.split(" ");
    if (authenticationArr[0] !== "Bearer") {
      throw new AppError("Not authorized", 401);
    }

    let token = authenticationArr[1];
    if (!token) {
      throw new AppError("Token is required.", 401);
    }

    const decryptToken = await JwtClient.verifyAccessToken(token);
    const validUser = await UserRepository.findById(decryptToken._id);

    if (!validUser) {
      throw new AppError("Invalid Token.", 401);
    }

    req.user = decryptToken;
    console.log("req.body", req.body);
    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

//    exporting modules
module.exports = authenticate;
