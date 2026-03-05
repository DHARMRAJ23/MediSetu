import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    // 1) Get token from header
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Please login again.' });
    }

    // 2) Verify token
    const decoded = jwt.verify(token, process.env.JWT_SCREKET);
    
    // 3) Attach user info to request
    req.user = decoded; // Contains { id, email }
    
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(401).json({ success: false, message: 'Invalid or expired token.' });
  }
};

export default authUser;
