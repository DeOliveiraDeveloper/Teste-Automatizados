import subtracao from "./multiplicacao";

describe ("Teste de multiplicação", () =>{
    test("deve verificar o resultado correto de uma multiplicação", () =>{
        expect(subtracao(3.3,5.1)).toBeCloseTo(16.83)
    })

    test("deve verificar o resultado incorreto de uma multiplicação", () =>{
        expect(subtracao(3,5)).not.toBeCloseTo(1)
    })
}) 