import { GetAllNumbersAbove, input, GetNumberMax, GetNumberBetween, print } from "./utils.js"

//função que converte os meses em anos
function ConversorMeses(Tempo, TipoData){

    const Anos = parseInt(Tempo / 12)
    const Meses = Tempo % 12
    
    if(TipoData === 'A'){
        return Anos
    }
    return Meses
}


function main(){

    //entrada dos dados fornecidos
    const ObjetivoDoInvestimento = input('Qual o objetivo do seu investimento? ').toUpperCase()
    const ValorObjetivo = GetAllNumbersAbove('Informe qual o preço desse objetivo[R$]: ',0)
    const SalarioInformado = GetAllNumbersAbove('Informe o seu salário[R$]: ')
    const PorcentagemInvestimento = GetNumberMax('Informe qual a porcentagem do seu salário você irá investir[%]: ', 30, 'Informe uma porcentagem inferior a [30%] !')
    const TaxaJuros = GetNumberBetween('Informe a taxa de juros do investimento[%]: ',0,1)

    //processamento
    const ValorInvestimentoMensal = SalarioInformado * (PorcentagemInvestimento / 100)
    let ValorJuros = 0
    let ValorInvestimento = 0
    let TempoTotal = 0

    while(ValorInvestimento < ValorObjetivo){

        ValorInvestimento += ValorInvestimentoMensal + ValorJuros
        ValorJuros += ValorInvestimento * (TaxaJuros / 100)
        TempoTotal++
        
    }

    //essa parte vai fornecer a data formatada. ex: anos e meses
    const TempoMeses = ConversorMeses(TempoTotal, 'M')
    let DataFromatada = `${TempoMeses} meses`

    if(TempoTotal >= 12){
        const TempoAnos = ConversorMeses(TempoTotal, 'A')
        DataFromatada = `${TempoAnos} anos e ${TempoMeses} meses`

    }

    //exibição dos dados
    const Tabela = `
    OBJETIVO                          : [ ${ObjetivoDoInvestimento} ]
    VALOR FINAL DO INVESTIMENTO       : [R$ ${ValorInvestimento.toFixed(2)}]
    TEMPO PARA REALIZAÇÃO DO OBJETIVO : [${DataFromatada}]`

    print(Tabela)

}


main()