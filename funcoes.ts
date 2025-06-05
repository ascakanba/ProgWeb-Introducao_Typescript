// FUNÇÕES
//funcoes tradicional
function saudacao(nome: string):string{
    return `Ola. ${nome}`
}
console.log(saudacao(`camila`));

//Arrow function
const soma= (x: number, y:number): number => x+y
console.log(soma(2,3))

// Função com valor padrão
function mensagem(texto:string = "bem vindo"){
    console.log(texto)
}
//função com parametro opcional
function apresentar(nome?: string){
    if(nome){
        console.log(`ola ${nome}`)
    }else{
        console.log("Ola, visitante")
    }
}