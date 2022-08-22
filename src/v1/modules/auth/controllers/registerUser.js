import registrationService from "../services/RegistrationService";
import asyncWrapper from "../../../shared/utils/asyncWrapper";

module.exports = asyncWrapper(async (req, res) => {
  const { email, firstName, lastName } = req.body;

  const user = await registrationService.execute({
    email,
    firstName,
    lastName,
  });

  return res.status(200).json({
    success: true,
    message: "OTP sent to your email",
    data: user,
  });
});
