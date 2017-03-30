"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_dao_1 = require("./animal-dao");
var animal_1 = require("./../aula07-classes/animal");
var dao = new animal_dao_1.AnimalDao(); //instância da classe AnimalDao
var animal = new animal_1.Animal('Rex'); //instância da classe Animal
dao.insert(animal); //persistindo o objeto animal no "banco de dados"
//# sourceMappingURL=run.js.map