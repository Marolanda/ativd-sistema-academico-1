function calcularMedia(up1, up2) {
    // Calcula a média das duas avaliações
    return (up1 + up2) / 2;
}

function determinarSituacao(up1, up2) {
    const media = calcularMedia(up1, up2);
    let situacao = '';
    let notaNecessariaNaFinal = 0;

    if (media >= 6.0) {
        situacao = "Aprovado por média";
    } else if (media < 4.0) {
        situacao = "Reprovado por média";
    } else {
        situacao = "Aguardando a final";
        notaNecessariaNaFinal = 12.0 - media;
    }

    return {
        media: media.toFixed(2),
        situacao: situacao,
        notaNecessariaNaFinal: notaNecessariaNaFinal ? notaNecessariaNaFinal.toFixed(2) : null
    };
}

module.exports = {
    calcularMedia,
    determinarSituacao
};
