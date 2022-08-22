import cloudinaryUploadMethod from "../services/cloudinary";

class Image {
  async set(res, req, next) {
    const urls = [];
    const files = req.files;

    if (!files) {
      return res.status(400).json({ message: "No picture attached!" });
    }

    for (const file of files) {
      const { path } = file;

      try {
        const newPath = await cloudinaryUploadMethod(path);
        urls.push(newPath.res);
      } catch (error) {
        return res.status(500).json({
          message: "error occur",
        });
      }
    }

    return urls;
  }
}

const image = new Image();

export default image;
