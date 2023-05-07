const BuildRepository = require("../repositories/BuildRepository");

class BuildController {
  async index(request, response){
        const data = await BuildRepository.findAll();

        response.json();
    }

    show(){

    }
    store(){

    }

    update() {

    }

    delete(){

    }
}

modulo.exports = new BuildController();