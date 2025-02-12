// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)


// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    //convertimos el dolar a Euro
    let valueInEuro = valueInDollar / oneEuroIs.USD
    //retornamos el valor en yens multiplicando el euro por oneEuroIs.JPY
    return valueInEuro * oneEuroIs.JPY
}


const fromYenToPound = function (valueInYen) {
    // Convertimos de yen a euro
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // devolvemos el valor en pound 
    return valueInEuro * oneEuroIs.GBP;
}





module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };