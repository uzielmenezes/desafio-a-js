import {Cliente} from "./Cliente.js"

export class ContaCorrente { // exportando o módulo da classe para o index.js	
	static numeroDeContas = 0;
	agencia;				// criando a classe para o ''molde'' ContaCorrente
	_cliente;

	set cliente(novoValor) {						// criando condições para modificar o cliente e tornando buscável não somente cliente como o saldo
		if(novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	}

	get cliente() {
		return this._cliente;
	}

	_saldo = 0; // tornando o atributo privado com underline // verificar proposta com # https://github.com/tc39/proposal-class-fields#private-fields

	get saldo() {
		return this._saldo;
	}

	constructor(agencia, cliente ) {  // construtor adicionado para inicializar os atributos agencia e cliente
		this.agencia = agencia;
		this.cliente = cliente;
		ContaCorrente.numeroDeContas += 1;
	}

	// criando uma função para saque
	sacar(valor) { 
		if(this._saldo >= valor) {
			this._saldo -= valor;
			return valor;
		}
	}

	depositar(valor) {
		if(valor <= 0) {
			return;
		}
		this._saldo += valor;
		return valor;
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}