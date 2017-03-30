import { DaoInterface } from './dao.interface';

/*exportando a classe Dao genérica que implementa a interface DaoInterface genérica e recebe como parametro 
* um objeto T generico em ambos ou seja, o mesmo objeto que passamos na Dao passamos na DaoInterface
*/
export class Dao<T> implements DaoInterface<T> { 

    tableName: string = '';

    insert(object: T): boolean { //inserindo um objeto do tipo T e retornando um boolean
        console.log('inserting...');
        return true;
        //aqui fica toda a logica para inserir o objeto num banco de dados
    }

    update(object: T): boolean {
        return true;
    }
    
    delete(id: number): T { //deletando um objeto que recebeu o id por parametro e retornando o objeto do tipo T 
        return null; //retornando null para esse exmplo mas aqui retorna a instância do objeto T
    }

    find(id: number): T {
        return null;
    }

    findAll(): Array<T> {
        return [null];
    }

}