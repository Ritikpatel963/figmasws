// Zero Section Slider
// Initialize Swiper
const zedSwiper = new Swiper('.zed-swiper', {
    effect: 'slide',
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: -80,
    loop: true,
    grabCursor: true,
    speed: 700,
    loopAdditionalSlides: 1,
    breakpoints: {
        320: {
            spaceBetween: -60
        },
        768: {
            spaceBetween: -70
        },
        1024: {
            spaceBetween: -80
        }
    }
});

// Force to slide 1 (NASO) after a brief delay
setTimeout(() => {
    zedSwiper.slideToLoop(1, 0);
}, 100);

//End
// Zero Marketing Tab switching functionality
const tabs = document.querySelectorAll('.zm-tab');
const contents = document.querySelectorAll('.zm-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-tab');
        
        tabs.forEach(t => t.classList.remove('zm-active'));
        tab.classList.add('zm-active');
        
        contents.forEach(content => content.classList.add('zm-hidden'));
        
        const targetContent = document.getElementById(targetId);
        targetContent.classList.remove('zm-hidden');
    });
});
// End
// Page 3 Javascript
/* Pack button active toggle */
        function setActive(btn) {
            const siblings = btn.closest('.d-flex').querySelectorAll('.pack-btn');
            siblings.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }

        /* Thumbnail active toggle */
        document.querySelectorAll('.thumb-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
                item.classList.add('active');
            });
        });
// End
// Banner js 
       function setActive(btn) {
            document.querySelectorAll('.pack-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
// End