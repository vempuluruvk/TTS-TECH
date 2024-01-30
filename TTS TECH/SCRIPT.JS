let navbar =document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick=()=>{
    navbar.classList.remove('active');
}

let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick=()=>{
    searchForm.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
}



$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



function opencontactpage(){
    window.location.href="contact.html"
}

function openapplypage(){
    window.location.href="apply now.html"
}
