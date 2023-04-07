/*
Ejercicio opcional Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.
*/
let movimientoJugador = '';
let botonJugardenuevo = document.getElementById('jugarNuevamente');
let contenedorImagenesJugador = document.getElementById(
  'contenedorImagenesJugador'
);
botonJugardenuevo.addEventListener('click', mostrarDivEleccionJugador);

function eleccionJugador(opcion) {
  movimientoJugador = parseInt(opcion);

  contenedorImagenesJugador.classList.add('d-none');
  //Crear la imagen que eligió el Jugador
  const imagen = document.createElement('img');
  imagen.src = asignarSrcImagenJugador(opcion);
  imagen.width = 100;
  //imagen.classList.add('img-fluid');
  imagen.alt = 'Imagen elegida por el Jugador';

  //Crear el div de la imagen
  const divImagen = document.createElement('div');
  divImagen.classList.add('divImagen');

  //Asignar la imagen
  divImagen.appendChild(imagen);

  const contenedor = document.getElementById('seccionPadreJugador');
  contenedor.appendChild(divImagen, contenedor.children[2]);

  eleccionComputadorayComparar();

  //Activar el boton "Volver a Jugar"
  botonJugardenuevo.classList.remove('disabled');

  //cambiar el subtitulo
  const subtitulo = document.getElementById('subtitulo');
  subtitulo.innerHTML = 'Resultado del Juego:';
}

asignarSrcImagenJugador = (opcion) => {
  switch (opcion) {
    //Jugador eligio piedra
    case 1:
      return '/assets/img/piedra-removebg.png';
    //Jugador eligio papel
    case 2:
      return '/assets/img/papel-removebg.png';
    //Jugador eligio tijera
    case 3:
      return '/assets/img/tijera-removebg.png';
    case null:
      alert(
        'No ingresó ningun valor. Ingrese 1 para piedra, 2 para papel y 3 para tijera'
      );
      break;
    default:
      console.log('La opción ingresada no es válida');
  }
};

function eleccionComputadorayComparar() {
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

function mostrarDivEleccionJugador() {
  if (contenedorImagenesJugador.classList.contains('d-none')) {
    contenedorImagenesJugador.classList.remove('d-none');
    const contenedor = document.getElementById('seccionPadreJugador');
    contenedor.removeChild(contenedor.children[2]);
    botonJugardenuevo.classList.add('disabled');

    //asignar la imagen de signo de pregunta
    const imagenComputadora = document.getElementById('imagenComputadora');
    imagenComputadora.src = '/assets/img/signoPregunta.png';

    //cambiar el subtitulo
    const subtitulo = document.getElementById('subtitulo');
    subtitulo.innerHTML = 'Elige uno de los tres movimientos';
  }
}
