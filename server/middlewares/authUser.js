import jwt from 'jsonwebtoken';
export const authUser = async (req, res, next) => {
  if (!req.body) req.body = {};
    const { token } = req.cookies;
  
    if (!token) {
      return res.json({ success: false, message: 'Not Authorized' });
    }
  
    try {
      const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
      if (tokenDecode.id) {
        req.body.userId = tokenDecode.id;
      } else {
        return res.json({ success: false, message: 'Not Authorized' });
      }
      next();
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  };
  export default authUser;