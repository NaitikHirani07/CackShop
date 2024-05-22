(function ($) {

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


})(jQuery);



// Back to top button
let backToTopBtn = document.getElementById("back-to-top");
window.onscroll = () => {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    }
    else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Facts counter
document.addEventListener("DOMContentLoaded", function () {
    // Function to increment the numbers inside <h1> tag
    function increaseCounter(elementId) {
        var targetElement = document.getElementById(elementId);
        var targetNumber = parseInt(targetElement.innerText);
        var currentCount = 0;
        var increment = Math.ceil(targetNumber / 100);

        // Check if the current count has reached or exceeded the target count
        if (currentCount >= targetNumber) {
            targetElement.innerText = targetNumber; // Ensure the final value is accurate
        } else {
            var interval = setInterval(function () {
                currentCount = Math.min(currentCount + increment, targetNumber);
                targetElement.innerText = currentCount;
                if (currentCount >= targetNumber) {
                    clearInterval(interval);
                }
            }, 30);
        }
    }

    // Call the function to start the counter
    increaseCounter('experienceCounter');
    increaseCounter('specialistCounter');
    increaseCounter('projectCounter');
    increaseCounter('clientsCounter');
});

let cart_icon = document.querySelector(".cart-menu");
let close_btn = document.querySelector(".cart-tab .close");
let body = document.querySelector("body");

cart_icon.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
});
close_btn.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
});


// cake-preview....

function addToCart(name, price) {
    let cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${name} - ${price}</span>
        `;
        
        // Append the new item to the cart menu
        document.querySelector('.cart-menu').appendChild(cartItem);

        cakePreviewContainer.style.display = 'none';
}


// const cakeItem = document.querySelectorAll(".cake_item");
// let cakePreviewContainer = document.querySelector(".cake-preview");
// let cakePreview = cakePreviewContainer.querySelectorAll('.preview');
// cakeItem.forEach(item => {
//     item.addEventListener('click', function () {
//         cakePreviewContainer.style.display = 'flex';
//         let cakeId = this.getAttribute('data-name');
//         cakePreview.forEach(preview => {
//             let cakeTargetId = preview.getAttribute('data-target');
//             if (cakeId == cakeTargetId) {
//                 preview.classList.add('active');
//                 if (cakeId === "cake_1") {
//                     let img_path = document.getElementById("cake_img_1").src;
//                     let img_price = document.getElementById("cake_price_1").innerText;
//                     let img_name = document.getElementById("cake_name_1").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                     addToCartbtn.addEventListener('click', (e) => {
//                         e.preventDefault();
//                         addToCart(img_name, img_price);
//                     });

//                 }
//                 else if (cakeId === "cake_2") {
//                     let img_path = document.getElementById("cake_img_2").src;
//                     let img_price = document.getElementById("cake_price_2").innerText;
//                     let img_name = document.getElementById("cake_name_2").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;

//                     let addToCartbtn = preview.querySelector('.cart');
//                     addToCartbtn.addEventListener('click', (e) => {
//                         e.preventDefault();
//                         addToCart(img_name, img_price);
//                     });
//                 } else if (cakeId === "cake_3") {
//                     let img_path = document.getElementById("cake_img_3").src;
//                     let img_price = document.getElementById("cake_price_3").innerText;
//                     let img_name = document.getElementById("cake_name_3").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_4") {
//                     let img_path = document.getElementById("cake_img_4").src;
//                     let img_price = document.getElementById("cake_price_4").innerText;
//                     let img_name = document.getElementById("cake_name_4").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_5") {
//                     let img_path = document.getElementById("cake_img_5").src;
//                     let img_price = document.getElementById("cake_price_5").innerText;
//                     let img_name = document.getElementById("cake_name_5").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_6") {
//                     let img_path = document.getElementById("cake_img_6").src;
//                     let img_price = document.getElementById("cake_price_6").innerText;
//                     let img_name = document.getElementById("cake_name_6").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_7") {
//                     let img_path = document.getElementById("cake_img_7").src;
//                     let img_price = document.getElementById("cake_price_7").innerText;
//                     let img_name = document.getElementById("cake_name_7").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_8") {
//                     let img_path = document.getElementById("cake_img_8").src;
//                     let img_price = document.getElementById("cake_price_8").innerText;
//                     let img_name = document.getElementById("cake_name_8").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                 }
//                 else if (cakeId === "cake_9") {
//                     let img_path = document.getElementById("cake_img_9").src;
//                     let img_price = document.getElementById("cake_price_9").innerText;
//                     let img_name = document.getElementById("cake_name_9").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_10") {
//                     let img_path = document.getElementById("cake_img_10").src;
//                     let img_price = document.getElementById("cake_price_10").innerText;
//                     let img_name = document.getElementById("cake_name_10").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                 }
//                 else if (cakeId === "cake_11") {
//                     let img_path = document.getElementById("cake_img_11").src;
//                     let img_price = document.getElementById("cake_price_11").innerText;
//                     let img_name = document.getElementById("cake_name_11").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_12") {
//                     let img_path = document.getElementById("cake_img_12").src;
//                     let img_price = document.getElementById("cake_price_12").innerText;
//                     let img_name = document.getElementById("cake_name_12").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_13") {
//                     let img_path = document.getElementById("cake_img_13").src;
//                     let img_price = document.getElementById("cake_price_13").innerText;
//                     let img_name = document.getElementById("cake_name_13").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_14") {
//                     let img_path = document.getElementById("cake_img_14").src;
//                     let img_price = document.getElementById("cake_price_14").innerText;
//                     let img_name = document.getElementById("cake_name_14").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_15") {
//                     let img_path = document.getElementById("cake_img_15").src;
//                     let img_price = document.getElementById("cake_price_15").innerText;
//                     let img_name = document.getElementById("cake_name_15").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_16") {
//                     let img_path = document.getElementById("cake_img_16").src;
//                     let img_price = document.getElementById("cake_price_16").innerText;
//                     let img_name = document.getElementById("cake_name_16").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_17") {
//                     let img_path = document.getElementById("cake_img_17").src;
//                     let img_price = document.getElementById("cake_price_17").innerText;
//                     let img_name = document.getElementById("cake_name_17").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }
//                 else if (cakeId === "cake_18") {
//                     let img_path = document.getElementById("cake_img_18").src;
//                     let img_price = document.getElementById("cake_price_18").innerText;
//                     let img_name = document.getElementById("cake_name_18").innerHTML;
//                     let previewImgTarget = preview.querySelector('img');
//                     let previewNameTarget = preview.querySelector('h3');
//                     let previewPriceTarget = preview.querySelector('.price');
//                     previewImgTarget.src = img_path;
//                     previewNameTarget.innerText = img_name;
//                     previewPriceTarget.innerText = img_price;
//                     let addToCartbtn = preview.querySelector('.cart');
//                         addToCartbtn.addEventListener('click', (e) => {
//                             e.preventDefault();
//                             addToCart(img_name,img_price);
//                         });
//                 }

//             }
//         });
//         cakePreview.forEach(close => {
//             close.querySelector('.fa-times').onclick = () => {
//                 close.classList.remove('active');
//                 cakePreviewContainer.style.display = 'none';
//             };
//         });
//     });
// });
const cakeItem = document.querySelectorAll(".cake_item");
let cakePreviewContainer = document.querySelector(".cake-preview");
let cakePreview = cakePreviewContainer.querySelectorAll('.preview');
cakeItem.forEach(item => {
    item.addEventListener('click', function () {
        cakePreviewContainer.style.display = 'flex';
        let cakeId = this.getAttribute('data-name');
        cakePreview.forEach(preview => {
            let cakeTargetId = preview.getAttribute('data-target');
            if (cakeId == cakeTargetId) {
                preview.classList.add('active');
                if (cakeId === "cake_1") {
                    let img_path = document.getElementById("cake_img_1").src;
                    let img_price = document.getElementById("cake_price_1").innerText;
                    let img_name = document.getElementById("cake_name_1").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_2") {
                    let img_path = document.getElementById("cake_img_2").src;
                    let img_price = document.getElementById("cake_price_2").innerText;
                    let img_name = document.getElementById("cake_name_2").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                } else if (cakeId === "cake_3") {
                    let img_path = document.getElementById("cake_img_3").src;
                    let img_price = document.getElementById("cake_price_3").innerText;
                    let img_name = document.getElementById("cake_name_3").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_4") {
                    let img_path = document.getElementById("cake_img_4").src;
                    let img_price = document.getElementById("cake_price_4").innerText;
                    let img_name = document.getElementById("cake_name_4").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_5") {
                    let img_path = document.getElementById("cake_img_5").src;
                    let img_price = document.getElementById("cake_price_5").innerText;
                    let img_name = document.getElementById("cake_name_5").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_6") {
                    let img_path = document.getElementById("cake_img_6").src;
                    let img_price = document.getElementById("cake_price_6").innerText;
                    let img_name = document.getElementById("cake_name_6").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_7") {
                    let img_path = document.getElementById("cake_img_7").src;
                    let img_price = document.getElementById("cake_price_7").innerText;
                    let img_name = document.getElementById("cake_name_7").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_8") {
                    let img_path = document.getElementById("cake_img_8").src;
                    let img_price = document.getElementById("cake_price_8").innerText;
                    let img_name = document.getElementById("cake_name_8").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_9") {
                    let img_path = document.getElementById("cake_img_9").src;
                    let img_price = document.getElementById("cake_price_9").innerText;
                    let img_name = document.getElementById("cake_name_9").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_10") {
                    let img_path = document.getElementById("cake_img_10").src;
                    let img_price = document.getElementById("cake_price_10").innerText;
                    let img_name = document.getElementById("cake_name_10").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_11") {
                    let img_path = document.getElementById("cake_img_11").src;
                    let img_price = document.getElementById("cake_price_11").innerText;
                    let img_name = document.getElementById("cake_name_11").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_12") {
                    let img_path = document.getElementById("cake_img_12").src;
                    let img_price = document.getElementById("cake_price_12").innerText;
                    let img_name = document.getElementById("cake_name_12").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_13") {
                    let img_path = document.getElementById("cake_img_13").src;
                    let img_price = document.getElementById("cake_price_13").innerText;
                    let img_name = document.getElementById("cake_name_13").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_14") {
                    let img_path = document.getElementById("cake_img_14").src;
                    let img_price = document.getElementById("cake_price_14").innerText;
                    let img_name = document.getElementById("cake_name_14").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_15") {
                    let img_path = document.getElementById("cake_img_15").src;
                    let img_price = document.getElementById("cake_price_15").innerText;
                    let img_name = document.getElementById("cake_name_15").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_16") {
                    let img_path = document.getElementById("cake_img_16").src;
                    let img_price = document.getElementById("cake_price_16").innerText;
                    let img_name = document.getElementById("cake_name_16").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_17") {
                    let img_path = document.getElementById("cake_img_17").src;
                    let img_price = document.getElementById("cake_price_17").innerText;
                    let img_name = document.getElementById("cake_name_17").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
                else if (cakeId === "cake_18") {
                    let img_path = document.getElementById("cake_img_18").src;
                    let img_price = document.getElementById("cake_price_18").innerText;
                    let img_name = document.getElementById("cake_name_18").innerHTML;
                    let previewImgTarget = preview.querySelector('img');
                    let previewNameTarget = preview.querySelector('h3');
                    let previewPriceTarget = preview.querySelector('.price');
                    previewImgTarget.src = img_path;
                    previewNameTarget.innerText = img_name;
                    previewPriceTarget.innerText = img_price;
                }
            }
        });
        cakePreview.forEach(close => {
            close.querySelector('.fa-times').onclick = () => {
                close.classList.remove('active');
                cakePreviewContainer.style.display = 'none';
            };
        });
    });
});