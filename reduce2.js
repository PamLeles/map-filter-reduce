const lista = [
    {
        name: 'sabão em pó',
        preco: 35,

    },
    {
        name: 'detergente',
        preco: 2.50,
    },
    {
        name: 'alvejante',
        preco: 15,
    },
    {
        name: 'amaciante',
        preco: 25,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;

    }, saldoDisponivel);
}

console.log (calculaSaldo(saldoDisponivel,lista));
