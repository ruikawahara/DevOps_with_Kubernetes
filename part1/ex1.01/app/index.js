const getRandStrTS = () => {
  const timestamp = new Date()
  const randStr = Math.random().toString(36).substr(2, 6)
  const randStrTS = timestamp + ': ' + randStr

  console.log(randStrTS)

  setTimeout(getRandStrTS, 5000)
}

getRandStrTS()