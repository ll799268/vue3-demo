;(function () {

  const myRem = () => {
    const width = document.documentElement.clientWidth
    document.documentElement.style.fontSize = width / 3.75 + 'px'
  }

  window.onresize = myRem

  myRem()

})()