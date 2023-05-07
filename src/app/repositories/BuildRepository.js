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
}


module.exports = new BuildRepository();