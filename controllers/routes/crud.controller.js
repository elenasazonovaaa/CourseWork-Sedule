const {Router} = require('express');
const wrap = require('../../helpers/wrap.helper');

class CrudController {
  constructor (service) {
    this.service = service;

    this.readAll = this.readAll.bind(this);
    this.read = this.read.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);

    this.router = Router({mergeParams: true});

    this.routes = {
      '/': [
        {method: 'get', cb: this.readAll},
        {method: 'post', cb: this.create}
      ],
      '/:id': [
        {method: 'get', cb: this.read},
        {method: 'put', cb: this.update},
        {method: 'delete', cb: this.delete}
      ]
    };
  }

  async readAll (req, res) {
    let data = await this.service.readChunk(req.query);
      res.json(data);
  }

  async read (req, res) {
    let data = await this.service.read(req.params.id);
      res.json(data);
  }

  async create (req, res) {
      res.json( await this.service.create(req.body));
  }

  async update (req, res) {
      res.json( await this.service.update(req.params.id, req.body));
  }

  async delete (req, res) {
      res.json( await this.service.delete(req.params.id));
  }

  registerRoutes () {
    Object.keys(this.routes).forEach(route => {
      let handlers = this.routes[route];

      if (!handlers || !Array.isArray(handlers)) return;

      for (let handler of handlers) {
        this.router[handler.method](route, wrap(handler.cb));
      }
    });
  }
}

module.exports = CrudController;