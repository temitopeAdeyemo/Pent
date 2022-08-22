import Review from "../models/review";

class ReviewRepository {
  async create(data) {
    const review = await Review.create(data);
    return review;
  }

  async findOneById(_id) {
    const review = await Review.findOne({ _id });
    return review;
  }

  async findByUserId(reviewBy) {
    const review = await Review.find({ reviewBy });
    return review;
  }

  async find() {
    const reviews = await Review.find();
    return reviews;
  }

  async findAndSort() {
    const reviews = await Review.find().sort({ ["helpfulCount"]: "desc" }).exec();
    return reviews;
  }

  async findByUsername(username) {
    const reviews = await Review.find().populate("reviewBy", {
      userName: 1,
    });

    const reviewByUsername = [];
    reviews.forEach((review) => {
      if (review.reviewBy.username == username) {
        reviewByUsername.push(review);
      }
    });

    return reviewByUsername;
  }

  async save(review) {
    await review.save();
  }
}

const userRepository = new ReviewRepository();

export default userRepository;
