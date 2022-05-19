// criado arquivo package.json para configuração do projeto, com adição do type module
// para informar ao node que se trata, sim, de um módulo

import {Cliente} from "./Cliente.js" // importando os módulos necessários para o projeto
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
/*import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
import {ContaSalario} from "./Conta/ContaSalario.js"

const cliente1 = new Cliente("Ricardo", 11122233309); // objetos criados a partir do molde Cliente com constructor definido

const contaCorrente1 = new ContaCorrente(cliente1, 1001); // objetos/instâncias criados a partir do molde ContaCorrente com constructor definido;
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
const contaSalario1 = new ContaSalario(100, cliente1, 1001);

console.log(contaPoupanca1);
console.log(contaCorrente1);
console.log(contaSalario1); */ // Código relacionado às contas

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");
const cliente = new Cliente("Paulo", 78944495689, "456");

const estaLogado = SistemaAutenticacao.login(diretor, "123456");
const estaLogado2 = SistemaAutenticacao.login(gerente, "123");
//const estaLogado3 = SistemaAutenticacao.login(cliente, "456");

console.log(estaLogado);
console.log(estaLogado2);
//console.log(estaLogado3);