const pessoaComGet = {
  nome: 'Rafael',
  sobrenome: 'Silva',
  get nomeCompleto() {
    console.log('Executando getter...');
    return `${this.nome} ${this.sobrenome}`;
  }
};

const pessoaSemGet = {
  nome: 'Rafael',
  sobrenome: 'Silva',
  nomeCompleto() {
    console.log('Executando método...');
    return `${this.nome} ${this.sobrenome}`;
  }
};

// 1. Acessando normalmente
console.log(pessoaComGet.nomeCompleto); // Sem parênteses
console.log(pessoaSemGet.nomeCompleto()); // Com parênteses

// 2. Usando em concatenação
let frase1 = `Olá, ${pessoaComGet.nomeCompleto}`;
let frase2 = `Olá, ${pessoaSemGet.nomeCompleto()}`;
console.log(frase1);
console.log(frase2);

// 3. Convertendo para JSON
console.log(JSON.stringify(pessoaComGet)); 
console.log(JSON.stringify(pessoaSemGet));

/*
Saída explicada

Na leitura simples:
. pessoaComGet.nomeCompleto → executa o getter automaticamente, sem ().
. pessoaSemGet.nomeCompleto() → precisa dos parênteses.

Na interpolação (${}):
. Com get, fica mais natural: ${obj.prop}.
. Sem get, sempre exige ().

No JSON.stringify:
. Getters não entram no JSON porque são tratados como propriedades calculadas, não armazenadas.
. Métodos normais também não entram, mas se fosse um valor comum armazenado, apareceria.

Ou seja, o get muda:
. A forma como chamamos (propriedade vs. função)
. A percepção do código (parece um dado, mas é calculado)
. A interação com APIs como JSON.stringify, Object.keys, etc.
*/