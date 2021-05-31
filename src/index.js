const overlay = document.querySelector('.overlay')
const showVideo = document.querySelector('.showVideo')
const video = document.querySelector('.mainVideo')
const loader = document.querySelector('#loader')

setTimeout(() => {
  overlay.style.display = 'flex'
  showVideo.style.display = 'flex'
  setTimeout(() => {
    showButtons()
  }, 2000)
}, 5300)

const showButtons = () => {
  buttons = document.querySelector('#buttons')
  buttons.classList.remove('oculto')
  buttons.className += ' visible'
}

function registroObservador() {}

video.addEventListener('ended', () => {
  showVideo.style.display = 'none'
  loader.removeAttribute('src')
  loader.setAttribute('src', './resources/nerveend.gif')
})

buttonObservador = document.querySelector('#observador')
buttonJugador = document.querySelector('#jugador')

buttonObservador.addEventListener('click', () => {
  registroObservador()
})

buttonJugador.addEventListener('click', () => {
  registroJugador()
})
