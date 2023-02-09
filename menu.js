const amburguesa = document.querySelector('.amburguesa')
const menu = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(amburguesa)


amburguesa.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
} )

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
          && e.target != menu && e.target !=amburguesa  ){
            menu.classList.toggle("spread")
          }
})