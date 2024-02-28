import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
    const secret = 'riseslabsitsolutionspvtltd';
    let token = req.headers["authorization"];
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
      }
      
      const bearerToken = token.split(' ')[1];   
    
      jwt.verify(bearerToken, secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "Unauthorized Token!" });
        }
        req.userId = decoded.id;
        req.token = token;   
        return true;
      });
    };
  