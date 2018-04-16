const CrudService = require('./crud.service');

class MealTaskService extends CrudService {
    constructor({context, mealTaskSchema, errors}){
        super(context['MealTasks'], mealTaskSchema, errors);
        this.sheduleRepository = context['Shedules'];
    }
    async create(data){
        const shedule = await this.sheduleRepository.findById(data.sheduleId);
        if(!shedule) throw this.errors.notFound;
        return this.repository.create(data);
    }
}

module.exports = MealTaskService;