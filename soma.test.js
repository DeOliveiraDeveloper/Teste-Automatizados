const soma = require('./soma')


describe('Teste de soma', () => {
    test('Tem que verificar o resultado correto', () => {
        expect(soma(3,8)).toBe(11)
    })
    test('Tem que verificar o resultado incorreto', () => {
        expect(soma(3,8)).not.toBe(12)
    })
})
