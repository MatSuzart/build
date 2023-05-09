const { uuid } = require('uuidv3');

const data = [
    {
        id: uuid(),
        name: 'ONE',
        category_id: uuid(),
    },
];


class BuildRepository {
    findAll(){
        return new Promise((resolve, reject)=>{
            resolve(data);
        }); 
    }

    findById(id){
        return new Promise((resolve)=>resolve(
            products.find((products)=> products.id = id),
        ));
    }
    
}


module.exports = new BuildRepository();