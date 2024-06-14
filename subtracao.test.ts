import subtracao from "./subtracao";

describe ("Teste de subtração", () =>{
    test("deve verificar o resultado correto de uma subtração", () =>{
        expect(subtracao(3.3,5.1)).toBeCloseTo(-1.8)
    })

    test("deve verificar o resultado incorreto de uma subtração", () =>{
        expect(subtracao(3,5)).not.toBeCloseTo(1)
    })
}) 