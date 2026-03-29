const button = document.getElementById('toggle-menu'); //get the hamburger menu button element by its ID

button.addEventListener('click', function(event) {
    event.preventDefault(); 

    const menu = document.getElementById('main-menu');
    menu.classList.toggle('is-open'); 
})