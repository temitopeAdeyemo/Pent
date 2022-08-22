export default {
  port: parseInt(process.env.PORT) || 8000,
  nodeEnv: process.env.NODE_ENV || "production",
  saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
  jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
  redisHost: process.env.REDIS_HOST || "redis",
  redisPort: parseInt(process.env.REDIS_PORT) || 6379,
  cloudinaryApiName: process.env.CLOUDINARY_API_NAME,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
};