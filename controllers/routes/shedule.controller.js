const CrudController = require('./crud.controller');

class SheduleController extends CrudController {
    constructor({sheduleService, trainingTaskController, entityCheckerMiddleware}){
        super(sheduleService);

        this.router.use('/:sheduleId/training-tasks',entityCheckerMiddleware, trainingTaskController.router);

        this.registerRoutes();
    }

    async readAll(req,res){
        let data = await this.service.readChunk(req.query,{
            userId: req.params.userId
        });
        res.json(data);
    }

    async read(req,res){
        let data = await this.service.readChunk(req.query,{
            userId: req.params.userId,
            id: req.params.id
        }, true);
        res.json(data);
    }

    async create(req, res){
        let data = req.body;
        data.userId = req.params.userId;
        res.json( await this.service.create(data));
    }

    async update(req,res){
        res.json( await this.service.update({
            id: req.params.id,
            userId: req.params.userId
        }, req.body))
    }

    async delete (req,res){
        res.json( await this.service.delete({
            id: req.params.id,
            userId: req.params.userId
        }))
    }
}

module.exports = SheduleController;