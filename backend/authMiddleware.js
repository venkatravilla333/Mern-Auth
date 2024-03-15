import jwt from 'jsonwebtoken'

export let auth = (req, res, next) => {
  try {
    var token = req.header('myToken');
    console.log('middleware:', token);
    if (!token) {
      return res.send('Token not found');
    } else {
      var decode = jwt.verify(token, 'secret');
      console.log('token decoded:', decode)
      req.id = decode.id;
      console.log('after decoded ID:', decode.id)
      next();
    }
    
  } catch (error) {
    console.log('error while receive token')
  }
  
}