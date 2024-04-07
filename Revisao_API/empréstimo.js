import { GetNumberIntegerBetween , print, GetAllNumbersAbove} from "./utils.js"

function ComputarTaxa(Prazo){//Função que retorna qual vai ser a taaxa de juros de acordo com o prazo e a taxa selic
    const ValorTaxaSELIC = 13.75

    if(Prazo <= 6){
        return ValorTaxaSELIC * (50 / 100)
    }else if(Prazo <= 12){
        return ValorTaxaSELIC * (75 / 100)
    }else if(Prazo <= 18){
        return ValorTaxaSELIC * (100 / 100)
    }
    return ValorTaxaSELIC * (130 / 100)

}


function ComputarIOF(Valor,Prazo){//função que calcula a taxa do IOF

    const SomaTaxas = ((Prazo * 30) * (0.0082 / 100)) + (0.38 / 100)//taxas aplicas
    return Valor * SomaTaxas

}

//função que calcula o vlaor do emprestimo
function ComputarPagamentoEmprestimo(Capital,Prazo,Taxa){
    return Capital * ((1 + Taxa / 100) ** Prazo)
}

//função que retorna se o empresmo foi ou não aprovado
function ValidarEmprestimo(Renda,Parcela){
    const PorcentagemSalario = Renda * (40 / 100)//calcula quanto é 40% da renda
    if(Parcela > PorcentagemSalario){
        return 'EMPRÉSTIMO NEGADO'
    }
    return 'EMPRÉSTIMO APROVADO'
}


function main(){

    //Entrada de dados, a renda da pessoa, o valor que ela quer e o prazo de pagamento
    const RendaMensal = GetAllNumbersAbove('Informe a sua renda mensal[R$]: ',0)
    const ValorEmprestimo = GetAllNumbersAbove('Informe o valor do empréstimo[R$]: ',0)
    print('Máximo 24 parcelas e no minimo 2 parcelas')
    const PrazoPagamento = GetNumberIntegerBetween('Informe o prazo de pagamento[Mês]: ',2,24)

    //Processamento
    const ValorIOF = ComputarIOF(ValorEmprestimo, PrazoPagamento)
    const ValorEmprestimo_MaisIOF = ValorEmprestimo + ValorIOF//soma o valor do emprestimo requerido com o valor IOF
    const PorcentagemTaxa = ComputarTaxa(PrazoPagamento)//qual a porcentagem da taxa SELIC vai ser usada
    const ValorPagamentoTotal = ComputarPagamentoEmprestimo(ValorEmprestimo_MaisIOF,PrazoPagamento,PorcentagemTaxa)
    const ValorJuros = ValorPagamentoTotal - ValorEmprestimo
    const ValorParcela = ValorPagamentoTotal / PrazoPagamento
    const EstadoEmprestimo = ValidarEmprestimo(RendaMensal,ValorParcela)
    const ComprometimentoRenda = (ValorParcela * 100) / RendaMensal//qual a porcentagem da renda vai ficar comprometida

    //exibição dos dados
    const TabelaEmprestimo = `
    VALOR PEDIDO                    : [R$ ${ValorEmprestimo.toFixed(2)}]
    VALOR DO IOF                    : [R$ ${ValorIOF.toFixed(2)}] 
    VALOR DOS JUROS A PAGAR         : [R$ ${ValorJuros.toFixed(2)}]
    VALOR TOTAL A PAGAR             : [R$ ${ValorPagamentoTotal.toFixed(2)}]
    VALOR DA PARCELA MENSAL         : [${PrazoPagamento}x de R$${ValorParcela.toFixed(2)}]
    COMPROMETIMENTO DA RENDA MENSAL : [${ComprometimentoRenda.toFixed(1)} %]
    Se Empréstimo APROVADO ou NEGADO: [${EstadoEmprestimo}]`

    print(TabelaEmprestimo)
}


main()
