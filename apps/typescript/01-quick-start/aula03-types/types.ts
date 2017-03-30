function log(message: any) { //inferência de tipo no Typescript any - posso passar qualquer tipo
    console.log(message);
}

log('Hello world Typescript!');//passagem de string
log(52);//passagem de number

let teste: Array<string> = ['olá', 'teste']; //declaração de array do tipo string e atribuindo os valores do array
let isActive: boolean = true; //declaração de um booleano
let teste2: [string] = ['teste'];//Outra forma de declaração de array com atribuição de valores do array