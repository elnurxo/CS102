//RBAC - admin, client
function verifyRole(role) {
  return (req, res, next) => {
    try {
      const decodedToken = req.user; //userId, role, email
      if (decodedToken.role === role) {
        next();
      } else {
        return res.status(401).json({
          message: "unauthorized role!",
          status: "failed",
        });
      }
    } catch (error) {
      return res.json({
        message: error.message ? error.message : "failed auth!",
        status: "failed",
      });
    }
  };
}

module.exports = verifyRole;
