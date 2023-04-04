// ** Funciones generales ** //
const vaciar = () => {
    document.getElementById("pantalla").value = "";
    document.getElementById("info").innerHTML = "Info sobre el número";
}
const rellenar_info = () => { // actualiza el h2 según el resultado de la operación
    let info = document.getElementById("info"); // almacena h2 en info
    let res = document.getElementById("pantalla"); // almacena input en res
    if (res.value < 100) { // compara el valor de input; valores menores a 100
        info.innerHTML = "Info: el resultado es menor que 100"; // cambia el texto de info 
    } else if ((res.value >= 100) && (res.value <= 200)) { // compara valores entre 100 y 200
        info.innerHTML = "Info: el resultado está entre 100 y 200";
    } else { // para el resto de valores
        info.innerHTML = "Info: el resultado es superior a 200";
    }
}
// ** Validar el  input para unitarias y binarias ** //
let esNum;
const validar = () => {
    let num = document.getElementById("pantalla");
    let info = document.getElementById("info");
    if (isNaN(num.value) || num.value === "") {
        info.innerHTML = "Introduce una cifra, por favor";
        esNum = false;
        document.getElementById("pantalla").value = "Error";
    } else {
        esNum = true;
    }
};
// ** Operaciones unitarias ** //
const cuadrado = () => {
    validar();
    if (esNum === true) {
        let num = document.getElementById("pantalla");
        num.value *= num.value;
        rellenar_info();
    }
}
const mod = () => { // calcula el módulo de un número
    validar();
    if (esNum === true) {
        let num = document.getElementById("pantalla");
        if (num.value < 0) {
            num.value = -num.value;
        } else {
            num.value = num.value;
        }
        rellenar_info();
    }
}
const fact = () => { // calcula el factorial de un número
    validar();
    if (esNum === true) {
        let num = document.getElementById("pantalla");
        let info = document.getElementById("info");
        if (num.value < 0) {
            num.value = "Error.";
            info.innerHTML = "Introduce un número positivo";
        } else if (num.value === "0") {
            num.value = 1;
            rellenar_info();
        } else {
            for (let i = num.value - 1; i > 0; i--) {
                num.value *= i;
            }
            rellenar_info();
        }
    }
}
// ** Operaciones binarias ** //
let num, acu;
let op;
const init = () => { // inicializa las variables globales
    num = document.getElementById("pantalla");
    acu = num.value;
    op = "";
}
const add = () => { // función suma
    validar();
    if (esNum === true) {
        init();
        op = "+";
    }
}
const sub = () => { // función resta
    validar();
    if (esNum === true) {
        init();
        op = "-";
    }
}
const mul = () => { // función multiplicación
    validar();
    if (esNum === true) {
        init();
        op = "*";
    }
}
const div = () => { // función división
    validar();
    if (esNum === true) {
        init();
        op = "/";
    }
}
const rem = () => { // función resto de una división
    validar();
    if (esNum === true) {
        init();
        op = "%";
    }
}
const pow = () => { // función potencia
    validar();
    if (esNum === true) {
        init();
        op = "x_y";
    }
}
const eq = () => { // calcula la operación elegida
    switch (op) {
        case "+":
            num.value = +acu + +num.value; // operador unitario para evitar la concatenación
            rellenar_info();
            break;
        case "-":
            num.value = acu - num.value;
            rellenar_info();
            break;
        case "*":
            num.value = acu * num.value;
            rellenar_info();
            break;
        case "/":
            num.value = acu / num.value;
            rellenar_info();
            break;
        case "%":
            num.value = acu % num.value;
            rellenar_info();
            break;
        case "x_y":
            num.value = Math.pow(acu, num.value);
            rellenar_info();
            break;
        default:
            document.getElementById("info").innerHTML = "Elige una operación";
    }
}
// ** Operaciones en formato CSV ** //
const sumatorio = () => { // función sumatorio
    let num = document.getElementById("pantalla");
    let lista = num.value.split(","); // convierte el string en array
    let info = document.getElementById("info");
    if (lista.length > 1 && lista !== undefined) { // para verificar que el array tiene más de un elemento
        let i = 0;
        let suma = 0;
        while (i < lista.length) suma += +lista[i++]; // recorre el array y suma cada elemento
        if (isNaN(suma)) { // comprueba si 'suma' no es un número
            num.value = "Error.";
            info.innerHTML = "Uno o más valores no eran cifras.";
        } else {
            num.value = suma;
            rellenar_info();
        }

    } else {
        num.value = "Error.";
        info.innerHTML = "Introduce dos o más cifras, separadas por comas.";
    }
}
const ordenar = () => { // función ordenar con un método de ordenación ascendente
    let num = document.getElementById("pantalla");
    let lista = num.value.split(","); // convierte el string en array
    let info = document.getElementById("info");
    if (lista.length > 1 && lista !== undefined) { // para verificar que el array tiene más de un elemento
        for (let i = 0; i < lista.length; i++) { // recorre el array 'lista'
            if (isNaN(lista[i])) { // comprueba si los elementos del array no son números
                num.value = "Error.";
                info.innerHTML = "Uno de los valores no era una cifra";
            } else {
                num.value = lista.sort((a, b) => a - b); // ordena el array, comparando los elementos
            }
        }
    } else {
        num.value = "Error.";
        info.innerHTML = "Introduce dos o más cifras, separadas por comas.";
    }
}
const revertir = () => { // función revertir
    let num = document.getElementById("pantalla");
    let lista = num.value.split(","); // convierte el string en array
    let info = document.getElementById("info");
    if (lista.length > 1 && lista !== undefined) { // para verificar que el array tiene más de un elemento
        for (let i = 0; i < lista.length; i++) { // recorre el array 'lista'
            if (isNaN(lista[i])) { // comprueba si los elementos del array no son números
                num.value = "Error.";
                info.innerHTML = "Uno de los valores no era una cifra";
            } else {
                num.value = lista.reverse();
            }
        }
    } else {
        num.value = "Error.";
        info.innerHTML = "Introduce dos o más cifras, separadas por comas.";
    }
}
const quitar = () => {
    let num = document.getElementById("pantalla");
    let lista = num.value.split(","); // convierte el string en array
    let info = document.getElementById("info");
    if (lista.length > 1 && lista !== undefined) { // para verificar que el array tiene más de un elemento
        let i = 0;
        let suma = 0;
        while (i < lista.length) suma += +lista[i++]; // recorre el array y suma cada elemento
        if (isNaN(suma)) { // comprueba si 'suma' no es un número
            num.value = "Error.";
            info.innerHTML = "Uno o más valores no eran cifras";
        } else {
            num.value = lista.pop(); // elimina el última elemento del array
            num.value = lista; // muestra el array sin el último elemento
        }
    } else {
        num.value = "Error.";
        info.innerHTML = "Introduce dos o más cifras, separadas por comas.";
    }
}