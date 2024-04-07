import { GetAllNumbersAbove, GetNumberIntegerAbove, input , print} from "./utils.js"

//função que calcula e retorna o cashback que não supera 750 reais
function CashBackBasico(Valor){

    let ValorCompras = Valor
    let ValorCashback = 0

    if(ValorCompras <= 250){

        ValorCashback = ValorCompras * (5 / 100)
    }
    else if(ValorCompras <= 500){

        ValorCashback = ValorCompras * (7 / 100)
    }
    else if(ValorCompras <= 750){

        ValorCashback = ValorCompras * (8 / 100)
    }

    return ValorCashback
}

//função que retorna o cashback caso passe 750 reais
function CashBackSecundario(Valor){

    let NovoValor = Valor
    let ValorCashback = 0, ValorReserva = 0

    while(NovoValor > 0){

        if(NovoValor <= 250){
            ValorCashback += 250 * (5 / 100)
            NovoValor -= 250
            
        }
        else if(NovoValor <= 500){
    
            ValorCashback += 250 * (7 / 100)
            NovoValor -= 250
        }
        else if(NovoValor <= 750){
    
            ValorCashback += 250 * (8 / 100)
            NovoValor -= 250
    
        }
        else{
    
            ValorReserva = NovoValor - 750
            NovoValor = 750
            ValorCashback += ValorReserva * (25 / 100)
        }

    }

    return ValorCashback
}

//o nome já diz né, retorna qual é o maior
function ComputarMaior(Valor_1,Valor_2){
    if(Valor_1 > Valor_2){
        return Valor_1
    }
    return Valor_2
}

//o nome já diz né, retorna o menor 
function ComputarMenor(Valor_1,Valor_2){
    if(Valor_1 < Valor_2){
        return Valor_1
    }
    return Valor_2
}

//calcula o percentual 
function ComputarPercentual(Valor,Total){
    return (Valor * 100) / Total
}

function main(){

    //Pede o número de clientes
    const NumeroClientes = GetNumberIntegerAbove('Informe a quantidade de clientes: ',0)

    let Contador = 0
    let ValorCashBack = 0
    let MaiorCashback = 0, MenorCashback = 0
    let SomaCashback = 0, SomaValorCompras = 0

    //processamento dos dados e pedido do nome do cliente e valor da compra
    while(Contador < NumeroClientes){
        Contador++

        const NomeCliente = input('Informe o nome do cliente: ')
        const ValorCompras = GetAllNumbersAbove('Informe o valor da compra[R$]: ',0)

        SomaValorCompras += ValorCompras
        
        //decide qual tipo de cashback vai usar
        if(ValorCompras > 750){    
            ValorCashBack = CashBackSecundario(ValorCompras)
        }else{
            ValorCashBack = CashBackBasico(ValorCompras)
        }
   
        //se for a primeira iteração, ele assume o menor valor sendo o primeiro informado
        if(Contador === 1){
            MenorCashback = ValorCashBack
        }

        MenorCashback = ComputarMenor(MenorCashback, ValorCashBack)
        MaiorCashback = ComputarMaior(MaiorCashback, ValorCashBack)
        SomaCashback += ValorCashBack

    } 

    const MediaCashback = SomaCashback / NumeroClientes
    const PercentualCashback = ComputarPercentual(SomaCashback,SomaValorCompras)

    //exibição dos dados
    const Tabela = `
    TOTAL VALOR CASHBACKS                  : [R$ ${SomaCashback.toFixed(2)}]
    PERCENTUAL INVESTIMENTO DE CASHBACKS   : [${PercentualCashback.toFixed(1)} %]
    MAIOR CASHBACK                         : [R$ ${MaiorCashback.toFixed(2)}]
    MENOR CASHBACK                         : [R$ ${MenorCashback.toFixed(2)}]
    VALOR MÉDIO DE CASHBACK                : [R$ ${MediaCashback.toFixed(2)}]`

    print(Tabela)

}


main()