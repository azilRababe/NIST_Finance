import jwt from "jsonwebtoken";

export const requireRole = (role) => (req, res, next) => {
  // const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];
  const token = res.accessToken;
  if (!token) {
    return res
      .status(401)
      .json({ msg: "You must be signed in to perform this operation" });
  }

  try {
    // Verify the JWT and get the user's information
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, role: userRole } = decoded;

    if (userRole === role || userRole === "admin") {
      req.userId = id;
      next();
    } else {
      res.status(403).set("Location", "/Unauthorized").end();
      return;
    }
  } catch (error) {
    return res.status(401).json({ msg: `Somehting went wrong : ${error}` });
  }
};
