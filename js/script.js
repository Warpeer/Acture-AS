gsap.registerPlugin(ScrollTrigger);

gsap.from('.slogan_content h1', {opacity: 100, duration: 0.8, x:-600});
gsap.from('.slogan_content p', {opacity: 100, duration: 0.8, x:-600, delay: 0.5});
gsap.from('.frontpage_image', {opacity: 0, duration: 0.5, x:600});
gsap.from('.model', {duration: 1, delay: 0.5, x: 1500, stagger: 0.1, ease: "back.out(1.7)"});


gsap.from('.about_wrapper h1', {
    scrollTrigger: '.about_wrapper h1',
    opacity: 0,
    duration: 0.8,
    x: 500,
});
gsap.from('.about_wrapper p', {
    scrollTrigger: '.about_wrapper p',
    opacity: 0,
    duration: 0.8,
    delay: 0,
    x: 1500,
});

gsap.from('.service_card', {
    scrollTrigger: {
        trigger: '.gallery',
        start: "top center"
    },
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    x: 1500
});
gsap.from('.gallery_wrapper h1', {
    scrollTrigger: '.service_card',
    opacity: 0,
    delay: 0.8,
    duration: 0.8,
    stagger: 0.2,
    y: 500
});

gsap.from('.questionmark_left', {
    scrollTrigger: ".about_wrapper p",
    delay: 1,
    opacity: 0,
    duration: 0.8,
    stagger: 0.05,
    y: -500,
    ease: "back.out(1.7)"
});
gsap.from('.questionmark_right', {
    scrollTrigger: ".about_wrapper p",
    delay: 1,
    opacity: 0,
    duration: 0.8,
    stagger: 0.05,
    y: 500,
    ease: "back.out(1.7)"
});

