const bar = document.querySelector(".bar");
const dropdownMenu = document.querySelector(".dropdown_menu");

let timeoutId;

bar.onclick = function (){
    dropdownMenu.classList.toggle('open')

    timeoutId = setTimeout(function () {
        dropdownMenu.classList.remove('open');
    }, 10000);
};
dropdownMenu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            dropdownMenu.classList.remove('open');
        }, 1);
    }
});



