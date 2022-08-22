import express from "express";
import {
  registerUser,
  verifyEmail,
  setPassword,
  loginUser,
  forgotPassword,
  resetPassword,
  verifyResetPassOtp,
  changePassword,
} from "./controllers";
import {
  registerValidator,
  verifyEmailValidator,
  setPasswordValidator,
  loginValidator,
  forgotPassEmailValidator,
  verifyResetPassOtpValidator,
  resetPasswordValidator,
  changePasswordValidator,
} from "./validators";
import auth from "../../shared/middlewares/authMiddlewares"

const router = express.Router();

router.post("/register", registerValidator, registerUser);
router.post("/verify-email", verifyEmailValidator, verifyEmail);
router.post("/set-password", setPasswordValidator, setPassword);
router.post("/login", loginValidator, loginUser);
router.post("/forgot-password/get-otp", forgotPassEmailValidator, forgotPassword);
router.post(
  "/forgot-password/verify-otp",
  verifyResetPassOtpValidator,
  verifyResetPassOtp
);
router.post(
  "/change-password",
  auth,
  changePasswordValidator,
  changePassword
);
router.patch("/reset-password", setPasswordValidator, resetPassword);

export default router;
