import AppError from "../../../shared/utils/appError";
import reviewRepository from "../repositories/ReviewRepository";

class sortByDateService {
  async execute() {
    try {
      const reviews = await (await reviewRepository.find())
        .sort({ createdAt: 1 })
        .exec();;
      return reviews;
    } catch (error) {
      throw new AppError("Something went wrong while fetching request", 500);
    }
  }
}

export default new sortByDateService();
