const CrudService = require('./crud.service');

class MealTaskService extends CrudService {
    constructor({context, mealTaskSchema, errors}){
        super(context['MealTasks'], mealTaskSchema, errors);
    }
}

module.exports = MealTaskService;