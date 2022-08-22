import AppError from "../../../shared/utils/appError";
import reviewRepository from "../repositories/ReviewRepository";

class reviewHelpedService {
  async execute(data) {
    try {
      const review = await reviewRepository.findOneById(data.reviewId);
      let helpfulCount = review.helpfulCount;
      console.log("helpfulCount", helpfulCount+1);
      review.set("helpfulCount", helpfulCount+1);
      await reviewRepository.save(review);
      return review;
    } catch (error) {
      console.log(error)
      throw new AppError(error.message, 500);
    }
  }
}

export default new reviewHelpedService();
