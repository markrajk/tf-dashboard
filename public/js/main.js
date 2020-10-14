//SIDE MENU SLIDER
let sideMenuSlides = document.querySelectorAll(".side-menu-slide");

let sideMenuTriggers = document.querySelectorAll(".test-text");

sideMenuTriggers.forEach((e) => {
    e.addEventListener("click", function () {
        let currentIndex;
        let targetIndex;

        let currentClass = e.getAttribute("current-slide");
        let targetClass = e.getAttribute("target-slide");

        let currentSlide = document.querySelector(`.${currentClass}`);
        let targetSlide = document.querySelector(`.${targetClass}`);

        let mainSlide = e.getAttribute("main-slide");

        // Check if menu-slide or sub-menu-slide
        if (mainSlide) {
        currentIndex = parseInt(currentClass.split("-")[1]);
        targetIndex = parseInt(targetClass.split("-")[1]);
        } else {
        currentIndex = parseInt(currentClass.split("-")[2]);
        targetIndex = parseInt(targetClass.split("-")[2]);
        }

        // Remove active from current & add to target
        currentSlide.classList.remove("active");
        targetSlide.classList.add("active");

        // Check for direction of animation. left or right
        if (currentIndex < targetIndex) {
        currentSlide.style.animation = "slide-out-left .5s ease-in-out";
        targetSlide.style.animation = "slide-in-left .5s ease-in-out";
        } else {
        currentSlide.style.animation = "slide-out-right .5s ease-in-out";
        targetSlide.style.animation = "slide-in-right .5s ease-in-out";
        }
    });
});

console.log('HELLO')

let peopleSlides = document.querySelectorAll('.content-card-main .people');
let peopleSlidesTriggers = document.querySelectorAll('.content-card-main .people-arrow')
let peopleSlidesTriggerLeft = document.querySelector('.content-card-main .people-arrow.left')
let peopleSlidesTriggerRight = document.querySelector('.content-card-main .people-arrow.right')


if (peopleSlides.length <= 1) {
    peopleSlidesTriggerLeft.style.display = 'none';
    peopleSlidesTriggerRight.style.display = 'none';
}

peopleSlidesTriggers.forEach((e,i,arr) => {
    e.addEventListener('click', function() {
        let activeSlide = document.querySelector('.content-card-main .people.active');
        let currentIndex = parseInt(activeSlide.getAttribute("slide").split("-")[1]);

        if(this.classList.contains('right')) {
            activeSlide.style.animation = "slide-out-left .7s ease-in-out";
            activeSlide.classList.remove("active");
            //console.log(peopleSlides[currentIndex])
            peopleSlides[currentIndex].classList.add("active");
            peopleSlides[currentIndex].style.animation = "slide-in-left .7s ease-in-out";

            activeSlide = peopleSlides[currentIndex];
            currentIndex = parseInt(activeSlide.getAttribute("slide").split("-")[1]);

            console.log(activeSlide, currentIndex, peopleSlides.length)
            if(currentIndex >= peopleSlides.length) {
                peopleSlidesTriggerRight.style.display = "none";
                peopleSlidesTriggerLeft.style.display = "block";
            }

        }else {
            console.log(activeSlide, currentIndex, peopleSlides.length)
            activeSlide.style.animation = "slide-out-right .7s ease-in-out";
            activeSlide.classList.remove("active");
            //console.log(peopleSlides[currentIndex])
            peopleSlides[currentIndex -2].classList.add("active");
            peopleSlides[currentIndex -2].style.animation = "slide-in-right .7s ease-in-out";

            activeSlide = peopleSlides[currentIndex -2];
            currentIndex = parseInt(activeSlide.getAttribute("slide").split("-")[1]);

            console.log(activeSlide, currentIndex, peopleSlides.length)
            if(currentIndex <= 1) {
                peopleSlidesTriggerLeft.style.display = "none";
                peopleSlidesTriggerRight.style.display = "block";
            }
        }
    })
})

