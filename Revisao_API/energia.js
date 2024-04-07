import {GetAllNumbersAbove , print} from './utils.js'

//função que calcula o valor tarifado sem impostos e bandeira
function ComputarTarifa(Consumo){

    if(Consumo <= 30){
        return 0 
    }else if(Consumo <= 100){
        return Consumo * 0.59
    }
    return Consumo * 0.75

}  

//função que vai calcular o valor que a bandeira exerceu no consumo
function ComputarBandeira(Consumo,Bandeira){

    if(Consumo > 100){//caso o consumo tenha sido superior a 100 KWh
        const CentenasKWh = parseInt(Consumo / 100)//para cada 100 KWh consumido a bandeira será aplicada
        return CentenasKWh * Bandeira
    }
    return 0
}

//função que calcula a taxa de iluminação
function ComputarTaxaIluminacao(Consumo, Tarifa){

    //cobrada apenas para os consumidores que passarem de 80KWh por mês, e custa 6% do valor tarifado
    if(Consumo > 80){
        return Tarifa * (6 / 100)
    }
    return 0
}


function main(){

    //entrada de dados, ele pede as leituras do medidor de energia e o valor da bandeira
    const LeituraAnterior = GetAllNumbersAbove('Informe a leitura anterior[KWh]: ',0)
    const LeituraAtual = GetAllNumbersAbove('Informe a leitura atual[KWh]: ',LeituraAnterior)// Para o valor atual não ser menor que o anterior
    const ValorBandeira = GetAllNumbersAbove('Informe o valor da bandeira atual[R$]: ',0) //O valor atual da bandeira

    //processamento dos dados, calculo de tudo que precisa para ser exibido no talão
    const ConsumoEnergia = LeituraAtual - LeituraAnterior
    const ValorTarifado = ComputarTarifa(ConsumoEnergia) // valor tarifado sem nada incluso
    const TaxaBandeira = ComputarBandeira(ConsumoEnergia, ValorBandeira)
    const ValorImpostoICMS = ValorTarifado * (25 / 100) //impostos
    const ValorImpostoPIS_CONFIS = ValorTarifado * (15 / 100) // impostos
    const TaxaIluminacao = ComputarTaxaIluminacao(ConsumoEnergia , ValorTarifado)
    const ValorFaturado = ValorTarifado + TaxaBandeira + ValorImpostoICMS + ValorImpostoPIS_CONFIS + TaxaIluminacao

    //exibição de dados do talão de energia
    const TalaoEnergia = `
    CONSUMO         : [${ConsumoEnergia} KWh] 
    VALOR FATURADO  : [R$ ${ValorFaturado.toFixed(2)}]
    BANDEIRA        : [R$ ${TaxaBandeira.toFixed(2)}]
    ICMS            : [R$ ${ValorImpostoICMS.toFixed(2)}]
    PIS/CONFIS      : [R$ ${ValorImpostoPIS_CONFIS.toFixed(2)}]
    TAXA ILUMINAÇÃO : [R$ ${TaxaIluminacao.toFixed(2)}]`

    print(TalaoEnergia)

}

main()