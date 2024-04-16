
// document.addEventListener("DOMContentLoaded", function() {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const bxMenu = document.querySelector(".fa-bars");
//     const bxX = document.querySelector(".fa-xmark");
//     const navBar = document.querySelector(".navbar");

//     menuToggle.addEventListener("click", function() {
//         navBar.classList.toggle("show-navbar");
//         bxMenu.classList.toggle("hide-bars");
//         bxX.classList.toggle("show-bars");
//     });
// });


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
    
    
    // Back to top button
    let backToTopBtn = document.getElementById("back-to-top");
    window.onscroll = () => {
        scrollFunction();
    };
    function scrollFunction(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            backToTopBtn.style.display = "block";
        }
        else{
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });


    // Facts counter
    document.addEventListener("DOMContentLoaded", function() {
        // Function to increment the numbers inside <h1> tag
        function increaseCounter(elementId) {
            var targetElement = document.getElementById(elementId);
            var targetNumber = parseInt(targetElement.innerText);
            var currentCount = 0;
            var increment = Math.ceil(targetNumber / 100); // Dynamic increment

            // Check if the current count has reached or exceeded the target count
            if (currentCount >= targetNumber) {
                targetElement.innerText = targetNumber; // Ensure the final value is accurate
            } else {
                // Increment the count
                var interval = setInterval(function() {
                    currentCount = Math.min(currentCount + increment, targetNumber);
                    targetElement.innerText = currentCount;
                    // Check if the target is reached
                    if (currentCount >= targetNumber) {
                        clearInterval(interval);
                    }
                }, 30); // Adjust the speed of counting (milliseconds)
            }
        }

        // Call the function to start the counter
        increaseCounter('experienceCounter');
        increaseCounter('specialistCounter');
        increaseCounter('projectCounter');
        increaseCounter('clientsCounter');
    });

    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

