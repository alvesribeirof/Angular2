import { Animal } from './animal';

export class Cavalo extends Animal { //exportando a classe Cavalo que é herdada de Animal: 
                                    //sempre que se herda uma classe precisa usar a palavra reservada extends
    
    constructor(nome: string) { //para a declaração de um constructor na classe herdada (classe filha) 
        super(nome); //é necessário o uso da palavra reservada super passando os parametros da classe mae
    }

    public mover(distanciaEmMetros: number): void { //sobrescrevendo o metodo mover da classe mae
        console.log('Galopando...');//apresentando a palavra Galopando... no console
        super.mover(distanciaEmMetros);//chamada ao metodo mover da classe mae
    }
}