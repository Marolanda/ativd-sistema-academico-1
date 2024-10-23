// Importar a função que vamos testar
const { 
    calcularMedia,
    determinarSituacao } = require('./calculoMedia.js'); // Substitua o caminho se necessário

test('Aluno aprovado por média (média >= 6.0)', () => {
    const resultado = determinarSituacao(7.0, 8.0);
    expect(resultado.media).toBe("7.50");
    expect(resultado.situacao).toBe("Aprovado por média");
    expect(resultado.notaNecessariaNaFinal).toBeNull();
});

test('Aluno reprovado por média (média < 4.0)', () => {
    const resultado = determinarSituacao(3.0, 2.5);
    expect(resultado.media).toBe("2.75");
    expect(resultado.situacao).toBe("Reprovado por média");
    expect(resultado.notaNecessariaNaFinal).toBeNull();
});

test('Aluno aguardando a final (média entre 4.0 e 6.0)', () => {
    const resultado = determinarSituacao(5.0, 4.5);
    expect(resultado.media).toBe("4.75");
    expect(resultado.situacao).toBe("Aguardando a final");
    expect(resultado.notaNecessariaNaFinal).toBe("7.25");
});

test('Média correta (exemplo com valores decimais)', () => {
    const resultado = determinarSituacao(6.1, 5.9);
    expect(resultado.media).toBe("6.00");
    expect(resultado.situacao).toBe("Aprovado por média");
    expect(resultado.notaNecessariaNaFinal).toBeNull();
});
