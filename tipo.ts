// === TIPOS TYPE SCRIPT

//TIPOS PRIMITIVO
let texto: string = "Ola,mundo";
let number: number = 2;
let ativo: boolean = true;

//array
let numeros: number[]= [1, 2, 4];
let palavras: Array<string> = ["Typescrit", "é", "coisa", "foda"]

//Tuplas
let pessoa: [string, number] = ["nelson", 17]

//enum - Enunciado
enum Cores{
    verde,
    rosa,
    azul
}

let cor_favorita: Cores = Cores.azul

//Any (evitar sempre que possivel)
let dadoAleatorio: any = 23;

//Unknow (mais seguro que any)
let dadoDesconhecido: unknown = 10;

//void
function mostrarAlerta() : void{
    console.log("Atenção! presta atenção");
}

//Null e undefinded
let nada: null = null;
let indefinido: undefined = undefined;

//Never (usado quando a função nunca retorna)
function erroFatal(mensagem: string) : never{
    throw new Error(mensagem)
}

//aliases
type usuario = {
nome:string;
idade:number;
}

let usuario1: usuario = {nome:"junin", idade: 32}