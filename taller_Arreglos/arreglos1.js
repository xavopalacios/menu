let arregloIzquierdo = [12, 15];
let arregloDerecho = [20, 25];


agregarEdad = function () {
    let cmdEdad = recuperarInt("edad");


    arregloIzquierdo.push(cmdEdad);


    pintarArregloIzquierda();
}



pintarArregloIzquierda = function () {
    let tabla = document.getElementById("tablaIzquierda");
    let contenidoHTML = "";

    for (let i = 0; i < arregloIzquierdo.length; i++) {
        let edad = arregloIzquierdo[i];

        contenidoHTML += "<tr>" +
            "<td>" + edad + "</td>" +
            "<td>" +
            "<button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button>" +
            "</td>" +
            "<td>" +
            "<button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>➜</button>" +
            "</td>" +
            "</tr>";
    }

    tabla.innerHTML = contenidoHTML;
}

eliminarIzquierdo = function (indice) {
    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
}

pintarArregloDerecha = function () {
    let tablaDerecha = document.getElementById("tablaDerecha");
    let contenidoHTML = "";

    for (let i = 0; i < arregloDerecho.length; i++) {
        let edad = arregloDerecho[i];

        contenidoHTML += "<tr>" +
            "<td>" +
            "<button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>⬅</button>" +
            "</td>" +
            "<td>" + edad + "</td>" +
            "<td>" +
            "<button class='btn-eliminar' onclick='eliminarDerecho(" + i + ")'>Eliminar</button>" +
            "</td>" +
            "</tr>";
    }

    tablaDerecha.innerHTML = contenidoHTML;
}

eliminarDerecho = function (indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecha(); // Refresca la tabla derecha
}

moverHaciaDerecha = function (indice) {
    let edadAMover = arregloIzquierdo[indice];

    arregloDerecho.push(edadAMover);

    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}
moverHaciaIzquierda = function (indice) {
    let edadARecuperar = arregloDerecho[indice];

    arregloIzquierdo.push(edadARecuperar);

    arregloDerecho.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}