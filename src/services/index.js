function calcular(gramas) {
    try {
        let total1 = 0;
        let msg = "";

        if (gramas > 1000) {
            total1 = (gramas / 100) * 3;
            msg = `O preço total a pagar é R$${total1}`
        }

        else if (gramas < 1000 && gramas > 0) {
            total1 = (gramas / 100) * 3.50;
            msg = `O preço total a pagar é R$${total1}`
        }
        else if (gramas < 0) {
            throw new Error("Peso Inválido")
        }

        return msg;
    }
    catch (err) {
        return (err.message)
    }
}



function Libra(dia, mes) {
    try {
        let msg = ''
        if (dia >= 23 && dia < 32 && mes === 'setembro') {
            msg = 'Você é de Libra!'
        }
        else if (dia > 0 && dia <= 22 && mes === 'outubro') {
            msg = "Você é de Libra!"
        }
        else {
            msg = 'Você não é de Libra >:('
        }

        if (dia <= 0 || dia > 31) {
            throw new Error('Dia inválido!')
        }
        return (msg);
    } catch (err) {
        return (err.message)
    }
}

function calculo(pequeno, medio, grande, desconto) {
    let msg = ''
    try {
        let resultado = (pequeno * 13.50) + (medio * 15) + (grande * 17.50);
        let reducao = (resultado * desconto) / 100;
        let valor = resultado - reducao;

        msg = `Total à pagar é R$${valor}`;

        if (desconto < 0 || desconto > 100) {
            throw new Error("Valor de desconto inválido!")
        }
        else if (pequeno < 0 || medio < 0 || grande < 0) {
            throw new Error("Quantidade de produto inválido!")
        }

        return (msg)
    }
    catch (err) {
        return (err.message)
    }

}


function calcularSalario(salario, bonus, desconto) {
    try {

        let procentagemBonus = salario * bonus / 100;
        let total = salario + procentagemBonus - desconto;

        let msg = `Seu salário líquido é de R$${total}`;

        if (salario < 0 || bonus < 0 || desconto < 0) {
            throw new Error('Não foi possivel calcular o salário líquido!')
        }

        return msg;
    } catch (err) {
        return (err.message)
    }
}

function calcularParadas(capac, consumo, dist) {
    try {
        let litros = dist / consumo;
        let qtdParadas = litros / capac;

        qtdParadas = Math.ceil(qtdParadas);

        let resposta = `Você precisará fazer ${qtdParadas} paradas até seu destino.`;

        if (capac <= 0 || consumo <= 0 || dist <= 0) {
            throw new Error('Valores incorretos ou inválidos!')
        }
        return resposta;
    }
    catch (err) {
        return (err.message)
    }
}


function temperaturaCorporal(temperatura) {
    try {
        let msg = ''
        if (temperatura > 41) {
            msg = 'A situação para a sua temperatura é Hipertermia'
        }
        else if (temperatura >= 39.6 && temperatura < 41) {
            msg = 'A situação para a sua temperatura é Febre Alta'
        }
        else if (temperatura >= 37.6 && temperatura < 39.6) {
            msg = 'A situação para a sua temperatura é Febre'
        }
        else if (temperatura >= 36 && temperatura < 37.6) {
            msg = 'A situação para a sua temperatura é Normal'
        }
        else if (temperatura < 36) {
            msg = 'A situação para a sua temperatura é Hipotermia'
        }

        return msg;

    } catch (err) {
        return (err.message)
    }
}

function CalcularIngresso(inteiras, meias, dia, tipo) {
    try {
        let valor = 0;

        if (inteiras === 0 && meias === 0) {
            throw new Error('Digite a quantidade de ingressos!')
        }
        if (inteiras < 0 || meias < 0) {
            throw new Error('Digite uma quantidade válida!')
        }



        if (dia === 'Quarta-feira' && tipo === false) {
            valor = (inteiras * 14.25) + (meias * 14.25)
        }
        else if (tipo === true) {
            valor = (inteiras * 5) + (meias * 5)
        }
        else {
            valor = (inteiras * 28.50) + (meias * 28.50 / 2)
        }
        return valor;
    }
    catch (err) {
        return (err.message)
    }

}

function orcamento(ganhos, gastos) {
    try {
        let valor = (gastos / ganhos) * 100;
        let msg = '';
        if (gastos > ganhos) {
            msg = 'Orçamento Comprometido! Hora de rever seus gastos!'
        }
        else if (valor >= 81 && valor <= 100) {
            msg = 'Cuidado, seu orçamento pode ficar comprometido!'
        }
        else if (valor >= 51 && valor <= 80) {
            msg = 'Atenção, melhor conter seus gastos!'
        }
        else if (valor >= 21 && valor <= 50) {
            msg = 'Muito bem, seus gastos não ultrapassam metade dos ganhos!'
        }
        else if (valor >= 0 && valor <= 20) {
            msg = 'Parabéns, você está gerenciando bem seu orçamento'
        }
        else {
            msg = 'Insira algum valor!'
        }
        console.log(valor)
        return msg;
    } catch (err) {
        return (err.message)
    }
}


function contar(inicio, fim) {
    let numbers = [];
    for (let i = inicio; i <= fim; i++) {
        numbers.push(i);
    }
    return numbers;
}

function linhaAsteristicos(tamanho){
    let quantidade = []
    for (let i = 1; i <= tamanho; i++){
        quantidade.push(' *');
    }
    return quantidade;
}

function formasQuadradas(base, altura) {
    let forma = []

    for (let i = 1; i <= altura; i++) {
        let formaNova = [];

        for (let a = 0; a < base; a++) {
            formaNova.push(' *') 
        }
        forma.push(formaNova)
    }

    return forma;
    
}

let x = formasQuadradas(5, 2);
console.log(x)

// função do capeta

function jurosCompostos(capital, taxa, tempo) {
    let montante = capital * Math.pow((1 + (taxa / 100)), tempo);
    let juros = montante - capital;
    let parcela = montante / (tempo * 12);

    return [montante, juros, parcela];
    
}

let A = jurosCompostos(80.000, 10, 10);
console.log(A);


export { calcular, Libra, calculo, calcularSalario, calcularParadas, temperaturaCorporal, CalcularIngresso, orcamento, contar, linhaAsteristicos, formasQuadradas, jurosCompostos }