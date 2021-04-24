// Função para Selecionar Moeda //
var select = document.getElementById("select");
select.addEventListener('change', function carregaJSON(){
    if (select.selectedIndex == 1){
        carregaDolar();
    } else if (select.selectedIndex == 2) {
        carregaEuro()
    } else if (select.selectedIndex == 3) {
        carregaBitcoin()
    } else if (select.selectedIndex == 4) {
        carregaLitecoin()
    } else if (select.selectedIndex == 5) {
        carregaArg()
    } else {
        carregaYen()
    }
})
// -------------------------------- //
// Carregando API e Convertendo em dados JSON //
let options = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}
selecionaMoeda = new Array('USD', 'EUR', 'BTC', 'LTC', 'ARS', 'JPY')
valorCompra = new Array()
valorVenda = new Array()
variaçao = new Array()
valoremAlta = new Array()
function carregaDolar(filename) {
fetch(`https://economia.awesomeapi.com.br/json/daily/USD-BRL/15`, options)
.then(response => response.json())
    .then(data => {console.log(data);
    dados = data
    for (var i = 0; i < dados.length; i++){
        valorCompra.push(dados[i]["bid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        valorVenda.push(dados[i]["ask"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        variaçao.push(dados[i]["varBid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        valoremAlta.push(dados[i]["high"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    };
  })    
}
function carregaEuro(filename) {
    fetch(`https://economia.awesomeapi.com.br/json/daily/EUR-BRL/15`, options)
    .then(response => response.json())
        .then(data => {console.log(data);
        dados = data
        for (var i = 0; i < dados.length; i++){
            valorCompra.push(dados[i]["bid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valorVenda.push(dados[i]["ask"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            variaçao.push(dados[i]["varBid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valoremAlta.push(dados[i]["high"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        };
      })    
    }
function carregaBitcoin(filename) {
    fetch(`https://economia.awesomeapi.com.br/json/daily/BTC-BRL/15`, options)
    .then(response => response.json())
        .then(data => {console.log(data);
        dados = data
        for (var i = 0; i < dados.length; i++){
            valorCompra.push(dados[i]["bid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valorVenda.push(dados[i]["ask"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            variaçao.push(dados[i]["varBid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valoremAlta.push(dados[i]["high"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        };
        })    
    }
function carregaLitecoin(filename) {
    fetch(`https://economia.awesomeapi.com.br/json/daily/LTC-BRL/15`, options)
    .then(response => response.json())
        .then(data => {console.log(data);
        dados = data
        for (var i = 0; i < dados.length; i++){
            valorCompra.push(dados[i]["bid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valorVenda.push(dados[i]["ask"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            variaçao.push(dados[i]["varBid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valoremAlta.push(dados[i]["high"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        };
        })    
    }
function carregaArg(filename) {
    fetch(`https://economia.awesomeapi.com.br/json/daily/ARS-BRL/15`, options)
        .then(response => response.json())
        .then(data => {console.log(data);
        dados = data
        for (var i = 0; i < dados.length; i++){
            valorCompra.push(dados[i]["bid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valorVenda.push(dados[i]["ask"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            variaçao.push(dados[i]["varBid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valoremAlta.push(dados[i]["high"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        };
    })    
}
function carregaYen(filename) {
    fetch(`https://economia.awesomeapi.com.br/json/daily/JPY-BRL/15`, options)
        .then(response => response.json())
        .then(data => {console.log(data);
        dados = data
        for (var i = 0; i < dados.length; i++){
            valorCompra.push(dados[i]["bid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valorVenda.push(dados[i]["ask"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            variaçao.push(dados[i]["varBid"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            valoremAlta.push(dados[i]["high"]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        };
    })    
}
// -------------------------------------------- //
onload 
// Criando Array com os nomes dos meses e atribuindo o dia //
monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
hoje = new Date;
/*const labels = Array.from({ length: 7 }, (item, i) => {
    return new Date(0, i).toLocaleString('pt-BR', { month: 'long' })
});
var atual = 600000.00;
var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log(f)*/
// ------------------------------------------- //
// Atribuindo os Dados ao Gráfico //
const data1 = {
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
        label: 'Valor de Compra em R$',
        data: valorCompra,
        backgroundColor: [
            'rgba(204, 204, 204, .3)'
        ],
        borderColor: [
            'rgb(0, 255, 164)',
        ],
        borderWidth: 1
    }]
};
// ---------------------------------------- //
// Definindo o tipo de grafico e suas configurações //
const config1 = {
    type: 'bar',
    data: data1,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    },
};
// --------------------------------------------- //
// Iniciando Gráfico de Linhas //
var myChart = new Chart(document.getElementById('Grafico1'),
    config1
);
// ---------------------------------------------- //
// Criando Grafico 2 //
const data2 = {
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
        label: 'Valor de Venda em R$',
        data: valorVenda,
        backgroundColor: [
            'rgba(204, 204, 204, .3)'
        ],
        borderColor: [
            'rgb(0, 255, 255)'
        ],
        borderWidth: 1
    }]
};
const config2 = {
    type: 'doughnut',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    },
};
var myChart = new Chart(document.getElementById('Grafico2'),
    config2
);
// ---------------------------------- //
// Criando Grafico 3 //
const data3 = {
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
        label: 'Valor Mais Alto',
        data: valoremAlta,
        backgroundColor: [
            'rgba(204, 204, 204, .3)'
        ],
        borderColor: [
            'rgb(255, 15, 255)'
        ],
        borderWidth: 1
    }]
};
const config3 = {
    type: 'polarArea',
    data: data3,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    },
};
var myChart = new Chart(document.getElementById('Grafico3'),
    config3
);
// ---------------------------------------------- //
// Criando Grafico 4 //
const data4 = {
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
        label: 'Variação do em R$',
        data: variaçao,
        backgroundColor: [
            'rgba(204, 204, 204, .3)'
        ],
        borderColor: [
            'rgb(255, 15, 15)'
        ],
        borderWidth: 1
    }]
};
const config4 = {
    type: 'line',
    data: data4,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    },
};
var myChart = new Chart(document.getElementById('Grafico4'),
    config4
);