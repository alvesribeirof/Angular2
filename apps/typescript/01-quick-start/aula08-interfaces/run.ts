import { AnimalDao } from './animal-dao';
import { Animal } from './../aula07-classes/animal';

let dao: AnimalDao = new AnimalDao(); //instância da classe AnimalDao
let animal: Animal = new Animal('Rex'); //instância da classe Animal

dao.insert(animal); //persistindo o objeto animal no "banco de dados"