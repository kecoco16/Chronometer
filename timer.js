function cronometro(min) {
  let segundos = 60
  let minutos = min - 1
  let count = setInterval(function () {
    segundos--
    if (segundos == 0 && minutos == 0) {
      console.log('se acabo el tiempo')
      clearInterval(count)
    }

    if (segundos == -1) {
      minutos--
      segundos = 59
    }

    let updateSeconds = (segundos < 10) ? '0' + segundos.toString() : segundos
    console.log(minutos + ':' + updateSeconds)
  }, 1000);
}
cronometro(10)