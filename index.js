// criado arquivo package.json para configuração do projeto, com adição do type module
// para informar ao node que se trata, sim, de um módulo

import {Cliente} from "./Cliente.js" // importando os módulos necessários para o projeto
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309); // objetos criados a partir do molde Cliente com constructor definido
const cliente2 = new Cliente("Alice", 88822233309);

console.log(cliente1);
console.log(cliente2);

const contaCorrente1 = new ContaCorrente(1001, cliente1); // objetos/instâncias criados a partir do molde ContaCorrente com constructor definido;
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrente(1001, cliente2);
contaCorrente1.transferir(200, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);
console.log(ContaCorrente.numeroDeContas);