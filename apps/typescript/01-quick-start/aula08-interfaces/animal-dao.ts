import { DaoInterface } from './dao.interface';

import { Animal } from './../aula07-classes/animal';

export class AnimalDao implements DaoInterface { //exportando a classe AnimalDao que implementa a interface DaoInterface

    tableName: string = '';

    insert(object: Animal): boolean { //inserindo um objeto do tipo Animal e retornando um boolean
        console.log('inserting...');
        object.mover(50);
        return true;
        //aqui fica toda a logica para inserir o objeto num banco de dados
    }

    update(object: Animal): boolean {
        return true;
    }
    
    delete(id: number): Animal { //deletando um objeto que recebeu o id por parametro e retornando o objeto do tipo Animal 
        return null; //retornando null para esse exmplo mas aqui retorna a instância do objeto animal
    }

    find(id: number): Animal {
        return null;
    }

    findAll(): [Animal] {
        return [new Animal('Rex')];
    }

}