import jwt from "jsonwebtoken";
export const checkToken = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, "secret", (err, result) => {
    if (err) return err;
    console.log(result);
    return result;
  });
  next();
};
