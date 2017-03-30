"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*exportando a classe Dao genérica que implementa a interface DaoInterface genérica e recebe como parametro
* um objeto T generico em ambos ou seja, o mesmo objeto que passamos na Dao passamos na DaoInterface
*/
var Dao = (function () {
    function Dao() {
        this.tableName = '';
    }
    Dao.prototype.insert = function (object) {
        console.log('inserting...');
        return true;
        //aqui fica toda a logica para inserir o objeto num banco de dados
    };
    Dao.prototype.update = function (object) {
        return true;
    };
    Dao.prototype.delete = function (id) {
        return null; //retornando null para esse exmplo mas aqui retorna a instância do objeto T
    };
    Dao.prototype.find = function (id) {
        return null;
    };
    Dao.prototype.findAll = function () {
        return [null];
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map