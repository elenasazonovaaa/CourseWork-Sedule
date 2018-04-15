const {Router} = require('express');

module.exports = ({}) => {
  const router = Router();

  router.use((req, res, next) => {
    req.meta = {};
    next();
  });

  return router;
};
