export class Cliente {  // exportando o módulo da classe para o index.js
						// criando a classe para o ''molde'' Cliente

	constructor(nome, cpf) { // construtor adicionado para inicializar os atributos nome e cpf
		this.nome = nome;
		this._cpf = cpf;
	}
	
	get cpf() {				// tornando o cpf somente buscável e não modificável
		return this._cpf;
	}

}