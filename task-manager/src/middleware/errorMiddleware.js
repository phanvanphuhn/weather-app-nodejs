const errorMiddleware = (req, res, next) => {
  throw new Error("Error middleware");
};

module.exports = errorMiddleware;
