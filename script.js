const bar = document.querySelector(".bar");
const dropdownmenu = document.querySelector(".dropdown_menu");


bar.onclick = function (){
    dropdownmenu.classList.toggle('open')
}