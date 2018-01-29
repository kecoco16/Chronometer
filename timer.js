const chronometer = min => printTime(min)

const printTime = initialMin => {
  let sec = 60
  let min = initialMin-1
  const print = setInterval(() => {
    sec--
    if (sec === 0 && min === 0) {
      console.log('se acabo el tiempo')
      clearInterval(count)
    }
    if (sec === -1) {
      min--
      sec = 59
    }
    console.log(min + ':' + formaterSeconds(sec))
  }, 1000)
}

const formaterSeconds = sec => sec < 10 ? '0' + sec.toString() : sec

chronometer(10)
