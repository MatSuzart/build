const { response } = require("express");
const BuildRepository = require("../repositories/BuildRepository");

class BuildController {
  async index(request, response){
        const data = await BuildRepository.findAll();

        response.json();
    }

    async show(){
      const { id } = request.params;

      const product = await BuildRepository.findById(id);

      if(!product){
          return response.status(404).json({error: 'PRODUCT NOT FOUND'});
      }

      response.json(product);
    }
    store(){

    }

    update() {

    }

   async delete(){
        const { id } = request.params;

        const products = await BuildRepository.findById(id);

        if(!products){
          return response.status(404).json({error: 'PRODUCT NOT FOUND'});
        }

        await BuildRepository.delete(id);
        response.sendStatus(204);
    }
}

modulo.exports = new BuildController();