export class Cliente {  // exportando o módulo da classe para o index.js
						// criando a classe para o ''molde'' Cliente
	nome;
	_cpf;            // transformando o atributo cpf privado e conectado
					// diretamente com o nome
	get cpf() {
		return this._cpf;
	}

	constructor(nome, cpf) {
		this.nome = nome;
		this._cpf = cpf;
	}

}