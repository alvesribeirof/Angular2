export interface DaoInterface {

    tableName: string;

    insert(object: any): boolean; //insert que recebe um objeto de qualquer tipo e retorna um boolean
    update(object: any): boolean; //update que recebe um objeto de qualquer tipo e retorna um boolean
    delete(id: number): any; //delete que recebe um id do tipo number e retorna um objeto de qualquer tipo
    find(id: number): any; //find que recebe um id do tipo number e retorna um objeto de qualquer tipo
    findAll(): [any]; //findAll que não recebe nada e retorna um array de objetos de qualquer tipo
}