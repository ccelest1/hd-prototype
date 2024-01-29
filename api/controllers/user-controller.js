const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Time To Get To Work!'
  });
}

module.exports = {
  getUser,
};
