const BilleteIda = {
    nombre: "Roberto Gomez",
    desde: "Madrid" ,
    hacia: "Berlín" ,
    claseEjecutiva: false ,
    horaSalida: 10,
    horaLlegada: 22,
    upgrade() {
        if (BilleteIda.claseEjecutiva) {
            console.log("¡Tu billete ya es de clase ejecutiva!")
        } else {
            BilleteIda.claseEjecutiva = true;
            console.log("Tu billete ha sido actualizado a clase ejecutiva,");
        }
    }
}
BilleteIda.tiempoDeVuelo = function() {
    let tiempo = BilleteIda.horaLlegada - BilleteIda.horaSalida;
        if (tiempo < 0) {
          tiempo += 24;
        }
        console.log(`Tiempo de vuelo: ${tiempo} horas.`);
    }
    const BilleteVuelta = {
        nombre: "Roberto Gomez",
        desde: "Berlín" ,
        hacia: "Madrid" ,
        claseEjecutiva: false ,
        horaSalida: 10,
        horaLlegada: 22,
        upgrade() {
            if (BilleteVuelta.claseEjecutiva) {
                console.log("¡Tu billete ya es de clase ejecutiva!")
            } else {
                BilleteVuelta.claseEjecutiva = true;
                console.log("Tu billete ha sido actualizado a clase ejecutiva,");
            }
        }
    }
    
    BilleteVuelta.tiempoDeVuelo = function() {
        let tiempo = BilleteVuelta.horaLlegada - BilleteVuelta.horaSalida;
            if (tiempo < 0) {
              tiempo += 24;
            }
            console.log(`Tiempo de vuelo: ${tiempo} horas.`);
        }
console.log(BilleteIda);
console.log(BilleteVuelta);
BilleteIda.upgrade();
BilleteIda.upgrade();
BilleteIda.tiempoDeVuelo();
BilleteVuelta.tiempoDeVuelo();