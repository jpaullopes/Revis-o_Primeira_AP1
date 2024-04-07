import {GetNumberIntegerBetween, print } from "./utils.js"

function ComputarScoreTipo1(A,B,C){//função que computa a pontuação do score seguindo a tabela do Score1.0

    let Score = (A / 100) * 260//criterio a
    Score += (B / 100) * 570//criterio b
    Score += (C / 100) * 170//criterio c

    return Score
}


function ComputarScoreTipo2(A,B,C){//função que computa a pontuação do score seguindo a tabela do Score 2.0

    let Score = (A / 100) * 620//criterio a
    Score += (B / 100) * 190//criterio b
    Score += (C / 100) * 190//criterio c

    return Score
}


function FaixaScoreAntigo(ValorScore){//função que define a categoria do score seguindo  a antiga tabela 1.0

    if(ValorScore <= 400){
        return 'BAIXO'
    }else if(ValorScore <= 600){
        return 'REGULAR'
    }else if(ValorScore <= 800){
        return 'BOM'
    }
    return 'MUITO BOM'
}


function FaixaScoreNovo(ValorScore){//função que define a categoria do score seguindo  a nova tabela 2.0
    
    if(ValorScore <= 300){
        return 'BAIXO'
    }else if(ValorScore <= 500){
        return 'REGULAR'
    }else if(ValorScore <= 700){
        return 'BOM'
    }
    return 'MUITO BOM'
}


function main(){

    //entrada dos dados, pede quais são os valores de cada categoria
    const CriterioA = GetNumberIntegerBetween('Informe o valor para categoria A: ',0,100)
    const CriterioB = GetNumberIntegerBetween('Informe o valor para categoria B: ',0,100)
    const CriterioC = GetNumberIntegerBetween('Informe o valor para categoria C: ',0,100)

    //processamento dos dados, calcula o valor do score e qual a categoria pertence
    const ValorScore1 = ComputarScoreTipo1(CriterioA,CriterioB,CriterioC)
    const ValorScore2 = ComputarScoreTipo2(CriterioA,CriterioB,CriterioC)
    const CategoriaScore1 = FaixaScoreAntigo(ValorScore1)
    const CategoriaScore2 = FaixaScoreNovo(ValorScore2)

    //saída, exibição da tabela com os dados do serasa 1.0 e do serasa 2.0
    const Tabela = `
    SCORE 1.0: VALOR [${ValorScore1}]
    SCORE 1.0: CATEGORIA [${CategoriaScore1}]
    SCORE 2.0: VALOR [${ValorScore2}]
    SCORE 2.0: CATEGORIA [${CategoriaScore2}]`

    print(Tabela)

}


main()