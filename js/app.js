/*
Ejercicio opcional Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.
*/
let movimientoJugador = '';

function eleccionJugador(opcion) {
  movimientoJugador = parseInt(opcion);

  let contenedorImagenesJugador = document.getElementById(
    'contenedorImagenesJugador'
  );
  console.log(contenedorImagenesJugador.children);
  contenedorImagenesJugador.remove(contenedorImagenesJugador);

  eleccionComputadorayCompararar();

  //const jugarNuevamente = document.getElementById('jugarNuevamente');
  //console.log(jugarNuevamente);
}

function eleccionComputadorayCompararar() {
  const movimientoComputadora = Math.floor(Math.random() * 3 + 1);
  // movimientoComputadora = 1 entonces es piedra.
  // movimientoComputadora = 2 entonces es papel.
  //movimientoComputadora = 3 entonces es tijera.

  //asignar tambien la imagen que eligió la computadora
  const asignarImagenComputadora = document.getElementById('imagenComputadora');
  asignarImagenComputadora.width = 100;
  switch (movimientoJugador) {
    //Jugador eligio piedra
    case 1:
      if (movimientoComputadora === 1) {
        //si la computadora eligio piedra
        asignarImagenComputadora.src = '/assets/img/piedra-removebg.png';
        alert('¡Empate! - Ambos eligieron piedra.');
      } else {
        if (movimientoComputadora === 2) {
          //si la computada eligio papel
          asignarImagenComputadora.src = '/assets/img/papel-removebg.png';
          alert('¡Perdiste! - La computadora eligió el papel y vos la piedra.');
        } else {
          if (movimientoComputadora === 3) {
            //si la computadora eligio tijera.
            asignarImagenComputadora.src = '/assets/img/tijera-removebg.png';
            alert(
              '¡Ganaste! - La computadora eligió la tijera y vos la piedra.'
            );
          }
        }
      }
      break;
    //Jugador eligio papel
    case 2:
      if (movimientoComputadora === 1) {
        //si la computadora eligio piedra
        asignarImagenComputadora.src = '/assets/img/piedra-removebg.png';
        alert('¡Ganaste! - La computadora eligió piedra y vos el papel.');
      } else {
        if (movimientoComputadora === 2) {
          //si la computada eligio papel
          asignarImagenComputadora.src = '/assets/img/papel-removebg.png';
          alert('¡Empate! - Ambos eligieron papel.');
        } else {
          if (movimientoComputadora === 3) {
            //si la computadora eligio tijera.
            asignarImagenComputadora.src = '/assets/img/tijera-removebg.png';
            alert(
              '¡Perdiste! - La computadora eligió el tijera y vos el papel.'
            );
          }
        }
      }
      break;
    //Jugador eligio tijera
    case 3:
      if (movimientoComputadora === 1) {
        //si la computadora eligio piedra
        asignarImagenComputadora.src = '/assets/img/piedra-removebg.png';
        alert('¡Perdiste! - La computadora eligió la piedra y vos la tijera.');
      } else {
        if (movimientoComputadora === 2) {
          //si la computada eligio papel
          asignarImagenComputadora.src = '/assets/img/papel-removebg.png';
          alert('¡Ganaste! - La computadora eligió el papel y vos la tijera.');
        } else {
          if (movimientoComputadora === 3) {
            //si la computadora eligio tijera.
            asignarImagenComputadora.src = '/assets/img/tijera-removebg.png';
            alert('¡Empate! - Ambos eligieron tijera.');
          }
        }
      }
      break;
    case null:
      alert(
        'No ingresó ningun valor. Ingrese 1 para piedra, 2 para papel y 3 para tijera'
      );
      break;
    default:
      console.log('La opción ingresada no es válida');
  }
}
