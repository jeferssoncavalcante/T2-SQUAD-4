let options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
fetch(`https://economia.awesomeapi.com.br/json/daily/BTC-BRL/15`, options)
    .then(Response => {
        Response.json()
            .then(data => console.log(data))
    })
    .catch(e => console.log(`Deu Erro !` + e, message))
monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
hoje = new Date;
/*const labels = Array.from({ length: 7 }, (item, i) => {
    return new Date(0, i).toLocaleString('pt-BR', { month: 'long' })
});
var atual = 600000.00;
var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log(f)*/
const data = {
    labels: [`${hoje.getDate()} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 1} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 2} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 3} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 4} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 5} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 6} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 7} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 8} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 9} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 10} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 11} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 12} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 13} ${monName[hoje.getMonth()]}`,
    `${hoje.getDate() - 14} ${monName[hoje.getMonth()]}`,
    ],
    datasets: [{
        label: 'Testando Gráfico',
        data: [65, 59, 80, 81, 56, 55, 49, 90, 100, 87, 56, 25],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    },
};
var myChart = new Chart(document.getElementById('Grafico1'),
    config
);