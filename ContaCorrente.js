import {Cliente} from "./Cliente.js"

export class ContaCorrente { // exportando o módulo da classe para o index.js

	static numeroDeContas = 0;

	constructor(agencia, cliente ) {  // construtor adicionado para inicializar os atributos agencia e cliente
		this.agencia = agencia;
		this.cliente = cliente;
		this._saldo = 0; // tornando o atributo privado com underline // verificar proposta com # https://github.com/tc39/proposal-class-fields#private-fields
		ContaCorrente.numeroDeContas += 1;
	}
}