window.addEventListener('load', () => {
  let toggle = document.querySelector('.madeby-toggle')
  let madeby = document.querySelector('.madeby')

  toggle.addEventListener('click', () => {
    madeby.classList.toggle('hidden')
  })
})