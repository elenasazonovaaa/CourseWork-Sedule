const CrudService = require('./crud.service');

class DayTaskService extends CrudService {
    constructor({context, dayTaskSchema, errors}){
        super(context['DayTasks'], dayTaskSchema, errors);
        this.sheduleRepository = context['Shedules'];
    }
    async create(data){
        const shedule = await this.sheduleRepository.findById(data.sheduleId);
        if(!shedule) throw this.errors.notFound;
        return this.repository.create(data);
    }
}

module.exports = DayTaskService;