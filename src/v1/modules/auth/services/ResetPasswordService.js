import bcrypt from "bcryptjs";
import environment from "../../../../config/environment";

import AppError from "../../../shared/utils/appError";
import cache from "../../../shared/services/cache";
import userRepository from "../../users/repositories/UserRepository";

class ResetPasswordService {
  async execute({ tempId, password }) {
    const cachedData = await cache.get(tempId);

    if (!cachedData || cachedData.for !== "Reset_Password") {
      throw new AppError("unauthorized", 401);
    }

    const user = await userRepository.findByEmail(cachedData.email);
    const invalidPassword = await bcrypt.compare(password, user.password );

    if (invalidPassword) {
      throw new AppError("Password same as old Password.", 400);
    }

    const hashedPassword = await bcrypt.hash(password, environment.saltRounds);

    if (!user) {
      throw new AppError("Something went wrong while creating user");
    }

    user.set("password", hashedPassword);
    userRepository.save(user);
    cache.delete(tempId);
    return null;
  }
}

export default new ResetPasswordService();
