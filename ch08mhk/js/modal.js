const modalOpen = document.getElementById('open');
const modalClose = document.getElementById('close');
const modal = document.getElementById('modal');

modalOpen.addEventListener('click', function(event) {
    modal.classList.add('modal-open'); //opens modal when the Newsletter Sign up button is clicked
    document.body.classList.add("no-scroll");
});

modalClose.addEventListener('click', function(event) {
    modal.classList.remove('modal-open'); //close modal when the Close button is clicked
    document.body.classList.remove("no-scroll");
});

