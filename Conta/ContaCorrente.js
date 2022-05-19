import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta { // exportando o módulo da classe para o index.js
	static numeroDeContas = 0;
	constructor(cliente, agencia) {  
		super(0, cliente, agencia);
		ContaCorrente.numeroDeContas += 1;
	}
	// sobrescrevendo o método da classe mãe
	sacar(valor) { 
		const taxa = 1.1;
		return this._sacar(valor, taxa);
	}
}