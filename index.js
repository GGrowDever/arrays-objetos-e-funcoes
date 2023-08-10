const data = [
	{
		nome: 'Roger Medeiros',
		sexo: 'M',
		salario: 3250,
	},
	{
		nome: 'Carolina Silva',
		sexo: 'F',
		salario: 1200,
	},
	{
		nome: 'Cristina Avila',
		sexo: 'F',
		salario: 8100,
	},
	{
		nome: 'Gustavo Hoffman',
		sexo: 'M',
		salario: 5200.35,
	},
	{
		nome: 'Eva Trindade',
		sexo: 'F',
		salario: 2501,
	},
	{
		nome: 'Andre Mathias',
		sexo: 'M',
		salario: 1750,
	},
	{
		nome: 'Joice Castro da Silva',
		sexo: 'F',
		salario: 3350.25,
	},
];
console.log(data.length);

const pessoaFeminino = data.filter((pessoa) => pessoa.sexo === 'F');
console.log(pessoaFeminino.length);

const somaSalario = data.reduce((total, pessoa) => total + pessoa.salario, 0);
console.log(`A soma de todos os salários  é: ${somaSalario.toFixed(2)}`);

const mediaSalario = somaSalario / data.length;
console.log(`A média salarial das pessoas cadastradas é R$:${mediaSalario.toFixed(2)}`);

const sexoMasculino = data.filter((pessoa) => pessoa.sexo === 'M');
const totalSomaSalarioMasculino = sexoMasculino.reduce((total, pessoa) => total + pessoa.salario, 0);
console.log(`A soma dos salários dos sexos masculinos é R$:${totalSomaSalarioMasculino.toFixed(2)}`);

const mediaSalarioMasculino = totalSomaSalarioMasculino / sexoMasculino.length;
console.log(`A média dos salários masculinos é R$: ${mediaSalarioMasculino.toFixed(2)}`);

console.log(data.some((salario) => salario.salario > 7000));

const index = data.findIndex((person) => person.nome === 'Eva Trindade');
console.log(index);

console.log(`______________ Pessoas com o sobrenome Silva: `);
const pessoaSobrenomeSilva = data.filter(pessoa => pessoa.nome.includes ('Silva'));
console.log(pessoaSobrenomeSilva);

const nome = data.map(pessoa => pessoa.nome )
console.log(nome);