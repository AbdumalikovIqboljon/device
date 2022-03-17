let dropdownParent = document.querySelector('.first');
let dropdown = document.querySelector('.dropdown');

dropdownParent.addEventListener('click', function() {
    dropdown.classList.toggle('d-none'); 
});

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