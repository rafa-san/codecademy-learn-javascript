/*
COM GET
*/

// const person = {
//   _firstName: 'John',
//   _lastName: 'Doe',
//   get fullName() {
//     if (this._firstName && this._lastName) {
//       return `${this._firstName} ${this._lastName}`;
//     } else {
//       return 'Missing a first name or a last name';
//     }
//   }
// }

// console.log(person.fullName);

/*
Acessa como uma propriedade, não como função.

Ao usar get, o método se comporta como se fosse um atributo do objeto, mas na verdade executa código quando é acessado.

Útil quando você quer que algo seja calculado automaticamente mas sem precisar de parênteses.

Pode deixar o código mais legível para propriedades que representam um "valor" do objeto.
*/




/*
SEM GET
*/
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name';
    }
  }
}

console.log(person.fullName());

/*
É um método normal, precisa ser chamado com ().

Mais explícito: indica para quem lê que alguma lógica será executada.

Bom quando a ação não é apenas "ler um valor", mas sim fazer um cálculo ou executar um processo que pode ter efeitos colaterais.
*/



/*
Regra prática:

Use get quando quiser expor um valor derivado que se comporta como dado.

Use método normal quando houver uma ação explícita ou quando precisar deixar claro que é um cálculo.
*/