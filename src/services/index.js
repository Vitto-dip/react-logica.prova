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
        return(err.message)
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
        throw new Error ('Dia inválido!')
    }
    return(msg);
    } catch (err) {
        return(err.message)
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

        return(msg)
    }
    catch (err){
        return(err.message)
    }
    
}


function calcularSalario(salario, bonus, desconto) {
    try {
        
        let procentagemBonus = salario * bonus / 100;
        let total = salario + procentagemBonus - desconto;

        let msg = `Seu salário líquido é de R$${total}`;

        if (salario < 0 || bonus < 0 || desconto < 0 ) {
            throw new Error('Não foi possivel calcular o salário líquido!') 
        }

        return msg;
    } catch (err) {
        return(err.message)
    }
}

function calcularParadas(capac, consumo, dist) {
    try{
        let litros = dist / consumo;
        let qtdParadas = litros / capac;

        qtdParadas = Math.ceil(qtdParadas);

        let resposta = `Você precisará fazer ${qtdParadas} paradas até seu destino.`;

        if(capac <= 0 || consumo <= 0 || dist <= 0){
            throw new Error('Valores incorretos ou inválidos!')
        }
        return resposta;
    }
    catch(err) {
        return(err.message)
    }
}


function temperaturaCorporal(temperatura) {
    try {
        let msg = ''
        if (temperatura > 41) {
            msg = 'A situação para a sua temperatura é Hipertermia'
        }
        else if(temperatura >= 39.6 && temperatura < 41){
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

export { calcular, Libra, calculo, calcularSalario, calcularParadas, temperaturaCorporal }