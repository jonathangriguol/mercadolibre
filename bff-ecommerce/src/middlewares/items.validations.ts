const validateSearchQuery = (req, res, next) => {
  // Check if search param is included in the query, if not return 400
  if (!req.query.search) {
    return res
      .status(400)
      .json({ message: "Falta el parámetro de búsqueda <search>"
     });
  }

  next();
};

export { validateSearchQuery };
