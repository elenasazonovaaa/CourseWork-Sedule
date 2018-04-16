const CrudController = require('./crud.controller');

class UserController extends CrudController {
    constructor({userService, sheduleController, eventController,entityCheckerMiddleware}){
        super(userService);

        this.router.use('/:userId/shedules',entityCheckerMiddleware, sheduleController.router);
        this.router.use('/:userId/events', eventController.router);

        this.registerRoutes();
    }
}

module.exports = UserController;