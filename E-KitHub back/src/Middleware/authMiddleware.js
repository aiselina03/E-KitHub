import jwt from "jsonwebtoken";

export const authMiddleware = function (roles) {
  return function (req, res, next) {
    try {
      let token = req.headers.authorization
      if (!token) {
        res.status(403).send("You don't have access")
      }
      if (!token.startsWith('Bearer')) {
        res.status(403).send("token is not vaid")
      }
      token = token.slice(7)
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.decoded=decoded
      if (!roles.includes(decoded.role)) {
        res.status(403).send("You don't have access")
      }
      console.log(decoded);
      next()
    } catch (error) {
      res.send(error.message)
    }
  }
}

