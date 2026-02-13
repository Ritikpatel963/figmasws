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
// Marketplace js
// Tab switching functionality
const tabs = document.querySelectorAll('.zm-tab');
const contents = document.querySelectorAll('.zm-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('zm-active'));

        // Add active class to clicked tab
        tab.classList.add('zm-active');

        // Hide all content
        contents.forEach(content => content.classList.add('zm-hidden'));

        // Show selected content with animation
        const targetId = tab.getAttribute('data-tab');
        const targetContent = document.getElementById(targetId);
        targetContent.classList.remove('zm-hidden');

        // Re-trigger animations
        const featureItems = targetContent.querySelectorAll('.zm-feature-item');
        featureItems.forEach((item, index) => {
            item.style.animation = 'none';
            setTimeout(() => {
                item.style.animation = `zm-fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
            }, 10);
        });
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// End 