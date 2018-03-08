// Javascript
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

// React 
state = {
  chrono: '30 : 00',
  sec: 60,
  min: 29
}

componentDidMount () {
  this.chrono = setInterval(() => {
    this.setState({
      sec: this.state.sec - 1
    })
    if (this.state.sec === 0 && this.state.min === 0) {
      clearInterval(this.chrono)
    }
    if (this.state.sec === -1) {
      this.setState({min: this.state.min - 1})
      this.setState({sec: 59})
    }
    this.setState({
      chrono: `${this.state.min} : ${this.state.sec < 10 ? '0' his.state.sec.toString() : this.state.sec} `
    })
  },1000)
}

componentWillUnmount () {
  clearInterval(this.chrono)
}
