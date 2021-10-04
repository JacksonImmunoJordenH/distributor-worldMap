'use strict';

var topBtn = document.getElementById('to-top');

topBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.opacity = 1;
        topBtn.style.cursor = 'pointer';
    } else {
        topBtn.style.opacity = 0;
        topBtn.style.cursor = 'auto';
    };
});

// ----------------------------------------------------------------------------------------------------

var dropContainer = document.getElementById('dist-drop');
var dropBtn = document.querySelector('.dd-btn');
var listContainer = document.getElementById('dist-drop-list');
var dropClose = document.querySelector('.dd-close');

function dropFunc() {
    dropContainer.classList.toggle('dd-active');
    dropClose.classList.toggle('dd-close-active');
}

dropBtn.addEventListener('click', dropFunc);

dropClose.addEventListener('click', dropFunc);

// ----------------------------------------------------------------------------------------------------

var defItemContainer = document.querySelectorAll('.dist-item');
var dropItem = document.querySelectorAll('.drop-item');
var swe = document.querySelectorAll('.sweden');
var euCard = document.getElementById('eu-hq');
var euHeader = document.getElementById('eu-hq-header');
var euFlag = document.getElementById('eu-hq-flag');
var listingHeader = document.getElementById('dist-country-selected');

var _loop = function _loop(i) {
    // listen for click on each country listing
    dropItem[i].addEventListener('click', function () {
        dropFunc();
        for (var x = 0; x < defItemContainer.length; x++) {
            // hide all items that do not match the dropdown selection
            !defItemContainer[x].classList.contains(dropItem[i].name) ? defItemContainer[x].classList.add('js-hide') : defItemContainer[x].classList.remove('js-hide');
        }
        if (dropItem[i].classList.contains('eu-hq')) {
            // Set card header to country selected
            euHeader.innerHTML = dropItem[i].innerHTML;

            // Set card src and alt to country selected
            euFlag.src = 'https://www.jacksonimmuno.com/img/static-pages/flag-' + dropItem[i].name + '.png';
            euFlag.alt = 'Flag of ' + dropItem[i].innerHTML;
            euCard.classList.remove('js-hide');
        } else {
            euCard.classList.add('js-hide');
        }

        if (dropItem[i].name === 'sweden') {
            swe[0].classList.add('nrd-switch');
            swe[1].classList.add('ram-switch');
        } else {
            swe[0].classList.remove('nrd-switch');
            swe[1].classList.remove('ram-switch');
        }

        if (dropItem[i].name !== 'dist-item') {
            listingHeader.innerHTML = dropItem[i].innerHTML;
            listingHeader.parentElement.classList.remove('js-hide');
        } else {
            listingHeader.parentElement.classList.add('js-hide');
        }
    });
};

for (var i = 0; i < dropItem.length; i++) {
    _loop(i);
};