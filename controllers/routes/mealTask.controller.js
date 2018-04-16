const CrudController = require('./crud.controller');

class MealTaskController extends CrudController {
    constructor({mealTaskService}){
        super(mealTaskService);

        this.registerRoutes();
    }

    async readAll(req,res){
        let data = await this.service.readChunk(req.query,{
            sheduleId: req.params.sheduleId
        });
        res.json(data);
    }

    async read(req,res){
        let data = await this.service.readChunk(req.query,{
            sheduleId: req.params.sheduleId,
            id: req.params.id
        }, true);
        res.json(data);
    }

    async create(req, res){
        let data = req.body;
        data.sheduleId = req.params.sheduleId;
        res.json( await this.service.create(data));
    }

    async update(req,res){
        res.json( await this.service.update({
            id: req.params.id,
            sheduleId: req.params.sheduleId
        }, req.body))
    }

    async delete (req,res){
        res.json( await this.service.delete({
            id: req.params.id,
            sheduleId: req.params.sheduleId
        }))
    }
}

module.exports = MealTaskController;