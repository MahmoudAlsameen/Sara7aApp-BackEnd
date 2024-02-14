const validation = (schema, source) => {
  return (req, res, next) => {
    let { error } = schema.validate(req[source] || req.body);
    if (error) {
      res.status(400).json({ message: "data validation error", error });
    } else {
      next();
    }
  };
};

export default validation;
