"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./../aula07-classes/animal");
var AnimalDao = (function () {
    function AnimalDao() {
        this.tableName = '';
    }
    AnimalDao.prototype.insert = function (object) {
        console.log('inserting...');
        object.mover(50);
        return true;
        //aqui fica toda a logica para inserir o objeto num banco de dados
    };
    AnimalDao.prototype.update = function (object) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return null; //retornando null para esse exmplo mas aqui retorna a instância do objeto animal
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new animal_1.Animal('Rex')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal-dao.js.map