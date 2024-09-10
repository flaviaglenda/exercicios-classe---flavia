// Flávia Glenda 
class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

exibirDados() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`);
}
}
const pessoa1 = new Pessoa("Lanna", 13, "Engenheira");
const pessoa2 = new Pessoa("Enzo", 18 , "Jogador");
const pessoa3 = new Pessoa("Lucas", 16, "Médico");

pessoa1.exibirDados();
pessoa2.exibirDados();
pessoa3.exibirDados();
