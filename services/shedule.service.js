const CrudService = require('./crud.service');

class SheduleService extends CrudService {
    constructor({context, sheduleSchema, errors}){
        super(context['Shedules'], sheduleSchema, errors);
        this.userRepository = context['Users'];
    }
    async create(data){
        const user = await this.userRepository.findById(data.userId);
        if(!user) throw this.errors.notFound;
        return this.repository.create(data);
    }
}

module.exports = SheduleService;