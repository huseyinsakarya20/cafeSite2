const bar = document.querySelector(".bar");
const dropdownMenu = document.querySelector(".dropdown_menu");
let timeoutId;


bar.onclick = function (){
    dropdownMenu.classList.toggle('open')

    timeoutId = setTimeout(function () {
        dropdownMenu.classList.remove('open');
    }, 30000);
};


