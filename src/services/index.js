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


export { calcular, Libra, calculo }