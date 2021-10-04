const topBtn = document.getElementById('to-top');

topBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.opacity = 1;
        topBtn.style.cursor = 'pointer';
    } else {
        topBtn.style.opacity = 0;
        topBtn.style.cursor = 'auto';
    };
});

// ----------------------------------------------------------------------------------------------------

const dropContainer = document.getElementById('dist-drop');
const dropBtn = document.querySelector('.dd-btn');
const listContainer = document.getElementById('dist-drop-list');
const dropClose = document.querySelector('.dd-close');

function dropFunc() {
    dropContainer.classList.toggle('dd-active');
    dropClose.classList.toggle('dd-close-active');
}

dropBtn.addEventListener('click', dropFunc);

dropClose.addEventListener('click', dropFunc);

// ----------------------------------------------------------------------------------------------------

const defItemContainer = document.querySelectorAll('.dist-item');
const dropItem = document.querySelectorAll('.drop-item');
const swe = document.querySelectorAll('.sweden');
const euCard = document.getElementById('eu-hq');
const euHeader = document.getElementById('eu-hq-header');
const euFlag = document.getElementById('eu-hq-flag');
const listingHeader = document.getElementById('dist-country-selected');


for (let i = 0; i < dropItem.length; i++) {
    // listen for click on each country listing
    dropItem[i].addEventListener('click', () => {
        dropFunc();
        for (let x = 0; x < defItemContainer.length; x++) {
            // hide all items that do not match the dropdown selection
            !defItemContainer[x].classList.contains(dropItem[i].name) ? defItemContainer[x].classList.add('js-hide') : defItemContainer[x].classList.remove('js-hide');
        }
        if (dropItem[i].classList.contains('eu-hq')) {
            // Set card header to country selected
            euHeader.innerHTML = dropItem[i].innerHTML;

            // Set card src and alt to country selected
            euFlag.src = `https://www.jacksonimmuno.com/img/static-pages/flag-${dropItem[i].name}.png`;
            euFlag.alt = `Flag of ${dropItem[i].innerHTML}`;
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

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Continent
const contSelect = document.querySelectorAll('.continent');
// Individual Continent Map e.g Europe, Asia
const countryMap = document.querySelectorAll('.country-map');
// Map Return Button
const mapBtn = document.getElementById('map-btn');
// Distributor info cards
const distCards = document.querySelectorAll('.map-dist');
// Results text
const resultCont = document.getElementById('result-cont');
const resultText = document.getElementById('result-text');
// Individual countries
const country = document.querySelectorAll('.country');

for (let i = 0; i < contSelect.length; i++) {
    // Add click listener to each continent
    contSelect[i].addEventListener('click', function() {
        mapBtn.classList.add('map-btn-active');
        resultCont.classList.remove('js-hide');
        resultText.innerText = this.attributes["name"].value;
        console.log(this);

        for (let x = 0; x < distCards.length; x++) {
            // Show all results that match continent selected, hide everything else
            // if (distCards[x].classList.contains(this.id)) {
            //     distCards[x].classList.remove('js-hide');
            // } else {
            //     distCards[x].classList.add('js-hide');
            // }

            distCards[x].classList.contains(this.id) ? distCards[x].classList.remove('js-hide') : distCards[x].classList.add('js-hide');
        }

        for (let x = 0; x < countryMap.length; x++) {
            if (countryMap[x].classList.contains(this.id)) {
                countryMap[x].classList.add('country-active');
            } else {
                countryMap[x].classList.remove('country-active');
            }
        }
    });
}

for (let i = 0; i < country.length; i++) {
    country[i].addEventListener('click', function() {
        resultText.innerText = this.attributes["name"].value;
    });
}

mapBtn.addEventListener('click', function() {
    this.classList.remove('map-btn-active');
    resultCont.classList.add('js-hide');

    for (let i = 0; i < countryMap.length; i++) {
        countryMap[i].classList.remove('country-active');
    }
});

// Script to make Taiwan/China highlight when hovering the other.

const taiwan = document.querySelector('#taiwan');
const china = document.querySelector('#china');

taiwan.addEventListener('mouseover', function() {
    china.classList.add('country-active');
});

taiwan.addEventListener('mouseout', function() {
    china.classList.remove('country-active');
});

china.addEventListener('mouseover', function() {
    taiwan.classList.add('country-active');
});

china.addEventListener('mouseout', function() {
    taiwan.classList.remove('country-active');
});