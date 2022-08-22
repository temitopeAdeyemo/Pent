import AppError from "../../../shared/utils/appError";
import reviewRepository from "../repositories/ReviewRepository";

class fetchUserReviewsService {
  async execute(data) {
    try {
      const reviews = await reviewRepository.findByUserId(data.userId);
      return reviews;
    } catch (error) {
      throw new AppError("Something went wrong while fetching request", 500);
    }
  }
}

export default new fetchUserReviewsService();
