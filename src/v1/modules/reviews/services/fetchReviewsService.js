import AppError from "../../../shared/utils/appError";
import reviewRepository from "../repositories/ReviewRepository";

class fetchReviewsService {
  async execute() {
    try {
      let reviews;
      reviews = await reviewRepository.find();
      return reviews;
    } catch (error) {
      throw new AppError("Something went wrong while fetching request", 500);
    }
  }
}

export default new fetchReviewsService();
