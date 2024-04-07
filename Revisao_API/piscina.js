import { GetAllNumbersAbove, print} from "./utils.js"

//Função que calcula e retorna o Preço de acordo com o preço de cada 1000 litros de água da piscina
function ComputarPrecoTotal(Capacidade, Preco){

    let ParteInteira = parseInt(Capacidade / 1000)
    const Resto = Capacidade % 1000

    if (Resto > 0){
        ParteInteira++
    }

    const PreçoCapacidade = ParteInteira * Preco
    return PreçoCapacidade
}

//A função computa qual é a capacidade total da piscina em litros
function ComputarCapacidadePiscina(Largura, Comprimento, Profundidade){

    const CapacidadeCm3 = Largura * Comprimento * Profundidade
    const CapacidadePiscina = CapacidadeCm3 / 1000

    return CapacidadePiscina
}


function main(){

    //Entrada de dados
    const LarguraPiscina = GetAllNumbersAbove('Informe a largura da piscina[cm]: ',0)
    const ComprimentoPiscina = GetAllNumbersAbove('Informe a comprimento da piscina[cm]: ',0)
    const ProfundidadePiscina = GetAllNumbersAbove('Informe a profundidade da piscina[cm]: ',0)
    const PrecoAgua = GetAllNumbersAbove('Informe o valor por cada 1000 litros de água[R$]: ',0)

    //Processamento
    const CapacidadeTotalRecomendada = ComputarCapacidadePiscina(LarguraPiscina,ComprimentoPiscina, ProfundidadePiscina) * 0.85 // Calcula qual a capacidade recomendada de se encher a pscina 
    const ValorPiscinaAbastecida = ComputarPrecoTotal(CapacidadeTotalRecomendada, PrecoAgua)
    const AguaReposta = CapacidadeTotalRecomendada * 0.1
    const GastoMensal = ComputarPrecoTotal(AguaReposta, PrecoAgua)

    //Saída
    const TabelaPiscina = `
    CAPACIDADE MÁXIMA RECOMENDADA     : [${CapacidadeTotalRecomendada.toFixed(2)}] L
    VALOR DE ABASTECIMENTO DA PISCINA : R$[${ValorPiscinaAbastecida.toFixed(2)}]
    GASTO MENSAL COM REABASTECIMENTO  : R$[${GastoMensal.toFixed(2)}] `
    
    print(TabelaPiscina)
}


main()