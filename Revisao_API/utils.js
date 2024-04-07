import { question } from "readline-sync"

export function input(Mensagem){

    return question(Mensagem)
}


export function GetNumber(Mensagem){
    return Number(question(Mensagem))
}


export function print(Texto){
    console.log(Texto)
}


export function GetNumberInteger(Mensagem){
    return parseInt(GetNumber(Mensagem))
}


export function GetNumberIntegerBetween(Mensagem, Minimo, Maximo){

    let Numero = GetNumberInteger(Mensagem)

    while(Numero < Minimo || Numero > Maximo){
        print('Valor inválido!')
        Numero = GetNumberInteger(Mensagem)
    }

    return Numero
}


export function GetNumberIntegerAbove(Mensagem, Minimo){

    let Numero = GetNumberInteger(Mensagem)

    while(Numero < Minimo){
        print('Valor inválido!')
        Numero = GetNumberInteger(Mensagem)
    }

    return Numero
}


export function GetAllNumbersAbove(Mensagem, Minimo){

    let Numero = GetNumber(Mensagem)

    while(Numero < Minimo){
        print('Valor inválido!')
        Numero = GetNumber(Mensagem)
    }

    return Numero
}


export function GetNumberMax(Mensagem, Max, MensagemInvalida = 'Valor inválido!'){

    let Numero = GetNumber(Mensagem)

    while(Numero >= Max){
        print(MensagemInvalida)
        Numero = GetNumber(Mensagem)
    }

    return Numero

}


export function GetNumberBetween(Mensagem, Min, Max){

    let Numero = GetNumber(Mensagem)

    while(Numero < Min || Numero > Max){
        print('Valor inválido!')
        Numero = GetNumber(Mensagem)

    }

    return Numero
}