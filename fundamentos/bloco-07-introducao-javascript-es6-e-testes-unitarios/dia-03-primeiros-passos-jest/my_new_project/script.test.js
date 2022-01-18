const division = require('./script')

describe('Testes realizados por mim afim de aprendizado. Function Division', () => {
  test('Verifica se a function division existe', () => {
    expect(typeof division).toBe('function');
  });

  test('Verifica se é lançado um erro quando a entrada não é um Number', () => {
    expect(() => { division() }).toThrow();
  })

  it('Verifica se a mensagem de erro esta correta', () => {
    expect(() => {division() }).toThrowError(new Error('Por favor insira apenas números!'))
  })

  it('Verifica se é lançado um erro quando divisivel por 0', () => {
    expect(() => { division(0,0) }).toThrow();
  })

  it('Verifica se o funcionamento da division é o esperado.', () => {
    expect(division(5,2)).toBe(2.5);
  })
});


describe('Testes realizados Ola', () => {
    it('Verifica se o array contém o número 4', () => {
      const arr = [1, 2 ,3];
      const obj = { a: 1, b: 2, c: 3};
        expect(arr).toContain(4); // fails
    })
});