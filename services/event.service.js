const CrudService = require('./crud.service');

class EventService extends CrudService {
    constructor({context, eventSchema, errors}){
        super(context['Events'], eventSchema, errors);
        this.userRepository = context['Users'];
    }
    async create(data){
        const user = await this.userRepository.findById(data.userId);
        if(!user) throw this.errors.notFound;
        return this.repository.create(data);
    }
}

module.exports = EventService;