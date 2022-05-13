export class ContaCorrente { // exportando o módulo da classe para o index.js	
	agencia;				// criando a classe para o ''molde'' ContaCorrente
	cliente;
	_saldo = 0; // tornando o atributo privado com underline // verificar proposta com # https://github.com/tc39/proposal-class-fields#private-fields

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