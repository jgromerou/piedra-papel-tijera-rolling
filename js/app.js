/*
Ejercicio opcional Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.
*/

do {
  let movimientoJugador = '';
  do {
    movimientoJugador = prompt(
      'Juego Piedra-Papel-Tijera\nElegir un movimiento (1-Piedra; 2-Papel; 3-Tijera):'
    );
    console.log(movimientoJugador);
  } while (isNaN(movimientoJugador) || movimientoJugador == '');
  const movJugadorConvertidoaEntero = parseInt(movimientoJugador);
  const movimientoComputadora = Math.floor(Math.random() * 3 + 1);
  // movimientoComputadora = 1 entonces es piedra.
  // movimientoComputadora = 2 entonces es papel.
  //movimientoComputadora = 3 entonces es tijera.

  console.log(movimientoComputadora);
  console.log('convertido a int', movimientoJugador);

  switch (movJugadorConvertidoaEntero) {
    //Jugador eligio piedra
    case 1:
      if (movimientoComputadora === 1) {
        //si la computadora eligio piedra
        alert('¡Empate! - Ambos eligieron piedra.');
      } else {
        if (movimientoComputadora === 2) {
          //si la computada eligio papel
          alert('¡Perdiste! - La computadora eligió el papel y vos la piedra.');
        } else {
          if (movimientoComputadora === 3) {
            //si la computadora eligio tijera.
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
        alert('¡Ganaste! - La computadora eligió piedra y vos el papel.');
      } else {
        if (movimientoComputadora === 2) {
          //si la computada eligio papel
          alert('¡Empate! - Ambos eligieron papel.');
        } else {
          if (movimientoComputadora === 3) {
            //si la computadora eligio tijera.
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
        alert('¡Perdiste! - La computadora eligió la piedra y vos la tijera.');
      } else {
        if (movimientoComputadora === 2) {
          //si la computada eligio papel
          alert('¡Ganaste! - La computadora eligió el papel y vos la tijera.');
        } else {
          if (movimientoComputadora === 3) {
            //si la computadora eligio tijera.
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
      alert('La opción ingresa no es válida');
  }
} while (confirm('¿Quiere jugar de nuevo?'));
