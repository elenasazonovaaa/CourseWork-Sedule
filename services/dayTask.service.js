const CrudService = require('./crud.service');

class DayTaskService extends CrudService {
    constructor({context, dayTaskSchema, errors}){
        super(context['DayTasks'], dayTaskSchema, errors);
    }
}

module.exports = DayTaskService;