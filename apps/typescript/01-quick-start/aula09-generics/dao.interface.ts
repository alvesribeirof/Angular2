export interface DaoInterface<T> { //exportando uma interface generics utilzando <> para declaração de generics
                            //passando como paramêtro um tipo genérico que será informado na utilização da classe
    tableName: string;

    insert(object: T): boolean; //insert que recebe um objeto do tipo T genérico e retorna um boolean
    update(object: T): boolean; //update que recebe um objeto do tipo T genérico e retorna um boolean
    delete(id: number): T; //delete que recebe um id do tipo number e retorna um objeto do tipo T genérico
    find(id: number): T; //find que recebe um id do tipo number e retorna um objeto do tipo T genérico
    findAll(): Array<T>; //findAll que não recebe nada e retorna um array de objetos do tipo T genérico
}