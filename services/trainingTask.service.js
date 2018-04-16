const CrudService = require('./crud.service');

class TrainingTaskService extends CrudService {
    constructor({context, trainingTaskSchema, errors}){
        super(context['TrainingTasks'], trainingTaskSchema, errors);
        this.sheduleRepository = context['Shedules'];
    }
    async create(data){
        const shedule = await this.sheduleRepository.findById(data.sheduleId);
        if(!shedule) throw this.errors.notFound;
        return this.repository.create(data);
    }
}

module.exports = TrainingTaskService;