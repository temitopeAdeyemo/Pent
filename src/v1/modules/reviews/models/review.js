import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    houseAddressNumber: {
      type: Number,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
    images: {
      type: String,
      default:
        "https://minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg",
    },
    landlordReview: {
      type: String,
    },
    landlordRating: {
      type: Number,
    },
    environmentReview: {
      type: String,
    },
    environmentRating: {
      type: String,
    },
    generalReview: {
      type: String,
      required: true,
    },
    houseRating: {
      type: Number,
      required: true,
    },
    reviewBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    helpfulCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Review", ReviewSchema);
