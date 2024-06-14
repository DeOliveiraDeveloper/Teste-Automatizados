import subtracao from "./divisao";

describe ("Teste de divisão", () =>{
    test("deve verificar o resultado correto de uma divisão", () =>{
        expect(subtracao(3.3,5)).toBeCloseTo(0.66)
    })

    test("deve verificar o resultado incorreto de uma divisão", () =>{
        expect(subtracao(3,3)).not.toBeCloseTo(2)
    })
}) 