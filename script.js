function calcularPromedio(notas) {
    let suma = 0

    for (let i = 1; i <= notas; i++) {
        let numNota = Number(prompt("Ingresa nota num " + i))
        suma += numNota
    }

    return suma / notas
}

do {
    let nombre = prompt("ingrese nombre de almuno")
    let notas = prompt("Cuantas notas desea promediar?")
    let promedio = calcularPromedio(notas)

    alert(nombre + ", tu promedio es de " + promedio)

    let siguiente = prompt("Quieres ingresar otro alumno y calcular su promedio? S/N ").toUpperCase()
    if (siguiente == "N") {
        alert("Hasta pronto!")
        break
    } else if (siguiente == "S") {
        continue
    }
    
} while (true)

