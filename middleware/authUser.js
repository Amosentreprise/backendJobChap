const jwt = require("jsonwebtoken");


const JWT_SIGN_SECRET = "ACHJHGKREOGOUTYOPSEAGJJBKHKDRTLO";

const authUser = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    // Extract the token from the request header

    if (!token) {
      return res.status(401).json({
        message: "Vous devez être authentifié pour accéder à cette ressource.",
      });
    }

    // Verify the token and extract the userId and others from http
    const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);
    const prestataireId = decodedToken.prestataireId;
    

    // Attach the userId to the request object for use in subsequent middleware or routes
    req.prestataireId = prestataireId;
    

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "connexion impossible", error });
  }
};

module.exports = authUser;
