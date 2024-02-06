// Função abre / fecha menu hamburguer
const menuMobile = document.querySelector('.mobile-menu')
const btnMenu = document.querySelector('#btn-menu')
const icon = document.querySelector('.icon')

btnMenu.addEventListener('click', (evt) => {
    menuMobile.classList.toggle('open')

    if (menuMobile.classList.contains('open')) {
        icon.src = 'imagens/icons/close_white.svg'
    } else {
        icon.src = 'imagens/icons/menu_white.svg'
    }
})