const {Router} = require('express');

module.exports = ({
    userController
}) => {
  const router = Router();

  router.use((req, res, next) => {
        req.meta = {};
        next();
  });
  router.use('/users', userController.router);

  return router;
};
