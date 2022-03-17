
// Catalog dropdown in site-header
let dropdownParent = document.querySelector('.first');
let dropdown = document.querySelector('.dropdown');

dropdownParent.addEventListener('click', function() {
    dropdown.classList.toggle('d-none'); 
});

// Site-hero > info tab
let elFeaturesList = document.querySelector('.list-features');
let elsFeaturesListItem = document.querySelectorAll('.list-features__item');
let elsFeaturesListLink = document.querySelectorAll('.list-features__link');
let elsInfo = document.querySelectorAll('.site-hero__info');

if(elsFeaturesListLink.length > 0) {
    elsFeaturesListLink.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            elsFeaturesListItem.forEach(function(item) {
                item.classList.remove('list-features__item--active');
            })

            link.parentElement.classList.add('list-features__item--active');

            elsInfo.forEach(function(info) {
                info.classList.remove('site-hero__info--active');
            })

            document.querySelector(link.getAttribute('href')).classList.add('site-hero__info--active');
        })
    })
}


// Delivery, Guarantee, Credit Section
let elTabsList = document.querySelector('.tabs-features');
let elsTabsListItem = document.querySelectorAll('.tabs-features__item');
let elsTabsListLink = document.querySelectorAll('.tabs-features__link');
let elsTabsPanel = document.querySelectorAll('.tabs__panel');
if(elsTabsListLink.length > 0) {
    elsTabsListLink.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            elsTabsListItem.forEach(function(item) {
                item.classList.remove('tabs-features__item--active');
            })
            link.parentElement.classList.add('tabs-features__item--active');

            elsTabsPanel.forEach(function(panel) {
                panel.classList.remove('tabs__panel--active');
            });
            
            document.querySelector(link.getAttribute('href')).classList.add('tabs__panel--active');
        })

    })
}

// Form modal

const elShowModal =document.querySelectorAll(".show-modal");
const elFormModal =document.querySelector(".form-control");
const elCloseModalButton = document.querySelector(".close-modal");
const elBackgroundShadow = document.querySelector(".overlay");

function openModal(){
    elFormModal.classList.remove("hidden");
    elBackgroundShadow.classList.remove("hidden");
}
function closeModal(){
    elFormModal.classList.add("hidden");
    elBackgroundShadow.classList.add("hidden");
}

elShowModal.forEach(elShowModal => { 
    elShowModal.addEventListener("click",openModal);
});

elCloseModalButton.addEventListener("click", closeModal);
elBackgroundShadow.addEventListener("click", closeModal);

document.addEventListener("keydown", function(evt){
    if(evt.key==='Escape' && !elFormModal.classList.contains('hidden')){
        closeModal();
    }
});