import AppError from "../../../shared/utils/appError";
import reviewRepository from "../repositories/ReviewRepository";

class fetchReviewService {
  async execute(data) {
    let reviews;

    try {
      reviews = await reviewRepository.findOneById(data.reviewId);
    } catch (error) {
      throw new AppError("Something went wrong while fetching request", 500);
    }

    return reviews;
  }
}

export default new fetchReviewService();
