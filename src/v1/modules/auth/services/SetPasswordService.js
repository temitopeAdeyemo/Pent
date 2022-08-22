import bcrypt from "bcryptjs";
import environment from "../../../../config/environment";

import AppError from "../../../shared/utils/appError";
import cache from "../../../shared/services/cache";
import userRepository from "../../users/repositories/UserRepository";
import jwtClient from "../../../shared/services/jwtClient";

class SetPasswordService {
  async execute({ tempId, password }) {
    const cachedData = await cache.get(tempId);

    if (!cachedData || !cachedData.isVerified) {
      throw new AppError("unauthorized", 401);
    }
    let user;
    const hashedPassword = await bcrypt.hash(password, environment.saltRounds);

    try {
      user = await userRepository.create({
        email: cachedData.email,
        firstName: cachedData.firstName,
        lastName: cachedData.lastName,
        password: hashedPassword,
      });
    } catch (error) {
      throw new AppError(error.message);
    }

    if (!user) {
      throw new AppError("Something went wrong while creating user");
    }

    cache.delete(tempId);
    const payload = {
      id: user.id,
    };
    const accessToken = jwtClient.generateAccessToken(payload);
    return { accessToken };
  }
}

export default new SetPasswordService();
