reloads;

const listImg = document.querySelectorAll('.image');
const sidlerImgs = document.querySelector('.sidler-imgs-list');
const btnFALeft = document.querySelector('.btn-fa-left');
const btnFARight = document.querySelector('.btn-fa-right');
const footerRowTwo = document.querySelector('.footer-row-two-silder');

var reloads = document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 1194) {
        make_slides(3);
    } else if (window.innerWidth >= 965) {
        make_slides(2);
    } else {
        make_slides(1);
    }
    const media = [
        window.matchMedia('(min-width: 1194px)'),
        window.matchMedia('(min-width: 965px)'),
    ];

    if (media[0].matches) {
        make_slides(3);
    } else if (media[1].matches) {
        make_slides(2);
    } else {
        make_slides(1);
    }
});

function make_slides(amount) {
    const widthItemAndMargin = footerRowTwo.offsetWidth / amount;
    let widthAllBox = widthItemAndMargin * listImg.length;
    sidlerImgs.style.width = `${widthAllBox}px`;

    listImg.forEach((element) => {
        element.style.marginRight = '10';
        element.style.width = `${widthItemAndMargin - 19}px`;
    });

    // handle slide
    let count = 0;
    let spacing = widthAllBox - amount * widthItemAndMargin;
    btnFARight.addEventListener('click', function () {
        count += widthItemAndMargin;

        if (count > spacing) {
            count = 0;
        }
        sidlerImgs.style.transform = `translateX(${-count}px)`;
    });

    btnFALeft.addEventListener('click', function () {
        count -= widthItemAndMargin;

        if (count < 0) {
            count = spacing;
        }
        sidlerImgs.style.transform = `translateX(${-count}px)`;
    });
};




function myFn(){
    var element = document.querySelector('.container-fluid');
   element.classList.toggle("dark-mode");
}