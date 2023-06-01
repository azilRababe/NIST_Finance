export const requireRole = (role) => (req, res, next) => {
  const userRole = req.headers["x-user-role"];

  if (userRole === role && userRole === "admin") {
    next();
  } else {
    res.status(403).json({
      err: "You do not have the permission to perform this action ! Please contact the administrator for assistance.",
    });
  }
};
