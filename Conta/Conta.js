// Classe abstrata
export class Conta {
	constructor(saldoInicial, cliente, agencia) { // construtor adicionado para inicializar os atributos agencia e cliente
		if(this.constructor == Conta) { // colocando um erro informando sobre a classe abstrata
			throw new Error("Você não deveria instanciar um objeto do tipo \"Conta\", pois se trata de uma classe abstrata.");
		}			
		/* tornando o atributo privado com underline // verificar proposta com # 
		https://github.com/tc39/proposal-class-fields#private-fields */
		this._saldo = saldoInicial;
		this._cliente = cliente;
		this._agencia = agencia;			
	}

	set cliente(novoValor) { // criando condições para modificar o cliente e tornando buscável não somente cliente como o saldo
		if(novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	}

	get cliente() {
		return this._cliente;
	}

	get saldo() {
		return this._saldo;
	}

	// Funções de saque, deposito e transferência
	// Método abstrato
	sacar(valor) { 
		throw new Error("O método Sacar da Conta, é abstrato.");				
	}

	_sacar(valor, taxa) { // método privado para personalizar o saque de acordo com um tipo de conta
		const valorSacado = taxa * valor;
		if(this._saldo >= valorSacado) {
			this._saldo -= valorSacado;
			return valorSacado;
		}

		return 0;
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