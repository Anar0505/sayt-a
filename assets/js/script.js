const menu = document.querySelector(".responsivemenu")
const openButtons = document.querySelectorAll('.openbtn');


openButtons.forEach(button => {
    button.addEventListener('click', function () {
        menu.classList.toggle("displaying")
        this.classList.toggle('active');
    });
});




