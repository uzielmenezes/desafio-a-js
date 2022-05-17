import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta { // exportando o módulo da classe para o index.js
	static numeroDeContas = 0;
	constructor(cliente, agencia) {  
		super(0, cliente, agencia);
		ContaCorrente.numeroDeContas += 1;
	}

	sacar(valor) { 
		let taxa = 1;
		const valorSacado = taxa * valor;
		if(this._saldo >= valorSacado) {
			this._saldo -= valorSacado;
			return valorSacado;
		}
	}
}