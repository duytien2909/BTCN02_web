reloadThree;

const listImgThree = document.querySelectorAll('.sidler-three-list img');
const sidlerImgsThree = document.querySelector('.sidler-three-list');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const silderThree = document.querySelector('.silder-three');

var reloadThree = document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 1194) {
        make_slides_Three(3);
    } else if (window.innerWidth >= 965) {
        make_slides_Three(2);
    }else {
        make_slides_Three(1);
    }
    const media = [
        window.matchMedia('(min-width: 1194px)'),
        window.matchMedia('(min-width: 965px)'),
    ];

    if (media[0].matches) {
        make_slides_Three(3);
    } else if (media[1].matches) {
        make_slides_Three(2);
    } else {
        make_slides_Three(1);
    }
});

function make_slides_Three(sl) {
    const widthItemAndMargin = silderThree.offsetWidth / sl;
    let widthAllBox = widthItemAndMargin * listImgThree.length;
    sidlerImgsThree.style.width = `${widthAllBox}px`;
    listImgThree.forEach((element) => {
        element.style.marginRight = '10';
        element.style.width = `${widthItemAndMargin - 18}px`;
    });
 
    // handle slide
    let count = 0;
    let spacing = widthAllBox - sl * widthItemAndMargin;
    btnRight.addEventListener('click', function () {
        count += widthItemAndMargin;

        if (count > spacing) {
            count = 0;
        }
        sidlerImgsThree.style.transform = `translateX(${-count}px)`;
    });

    btnLeft.addEventListener('click', function () {
        count -= widthItemAndMargin;

        if (count < 0) {
            count= spacing;
        }
        sidlerImgsThree.style.transform = `translateX(${-count}px)`;
    });
};