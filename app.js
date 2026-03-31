function contarLetras(ñ) {
    const conteo = {};
    const replace = ñ.toLowerCase().replace(/\s/g, '');

    for (const letra of replace) {
        conteo[letra] = (conteo[letra] || 0) + 1;
    }
    return Object.entries(conteo).map(([letra, contar]) => ({ [letra]: contar }));
}

const resultado = contarLetras("esternocleidomastoideo CoN EsPaCiOs y Ñ y 1234");

resultado.forEach(obj => {
    const letra = Object.keys(obj)[0];
    console.log(`${letra}: ${obj[letra]}`);
});