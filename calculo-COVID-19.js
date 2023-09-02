const Po = 1000, x = 4, t = 100

const formato = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const P = formato.format(Math.ceil(Po * (Math.pow(x, t / 7))))

console.log(`
Isso significa que, 
após ${t} dias, 
o total de pessoas infectadas será de ${P} , 
uma vez que inicialmente existiam ${Po} pessoas infectadas.
`);
