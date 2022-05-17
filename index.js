// criado arquivo package.json para configuração do projeto, com adição do type module
// para informar ao node que se trata, sim, de um módulo

import {Cliente} from "./Cliente.js" // importando os módulos necessários para o projeto
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309); // objetos criados a partir do molde Cliente com constructor definido

const contaCorrente1 = new ContaCorrente(cliente1, 1001); // objetos/instâncias criados a partir do molde ContaCorrente com constructor definido;
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);

const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca1);
console.log(contaCorrente1);
