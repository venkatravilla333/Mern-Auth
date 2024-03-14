import jwt from 'jsonwebtoken'

module.exports = (req, res, next) => {
  var token = req.headers.Authorization
  if (!token) {
    return res.send('Token no found')
  }
  var decode = jwt.verify(token, 'secret')
  req.user = decode.user
  next()
}