class successResponse {
  static async successResMsg(res, status, messageObject) {
    return res.status(status).json({ success: true, ...messageObject });
  }
}

module.exports = {successResponse};
