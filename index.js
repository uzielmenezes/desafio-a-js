// criado arquivo package.json para configuração do projeto, com adição do type module
// para informar ao node que se trata, sim, de um módulo

import {Cliente} from "./Cliente.js" // importando os módulos necessários para o projeto
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente(); // objetos criados a partir do molde Cliente
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrente1 = new ContaCorrente(); // objetos/instâncias criados a partir do molde ContaCorrente
contaCorrente1.agencia = 1001;
contaCorrente1.cliente = cliente1;
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = 1001;
contaCorrente2.cliente = cliente2;
contaCorrente1.transferir(200, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);