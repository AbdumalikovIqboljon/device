let dropdownParent = document.querySelector('.first');
let dropdown = document.querySelector('.dropdown');

dropdownParent.addEventListener('click', function() {
    dropdown.classList.toggle('d-none');
    
})