var mb_nav_option = document.getElementById("mb_nav_option")
var line_1 = document.getElementById("line_1");
var line_2 = document.getElementById("line_2");
var x_x = document.querySelectorAll('.x_x');


var on = false;
var open_mb_nav_option = document.getElementById("open_mb_nav_option")
open_mb_nav_option.addEventListener('click', () => {
    //mb_nav_option.style.display = 'block';
    if (on) {
        on = false;
        mb_nav_option.style.top = '-120vh';
        line_1.style.transform = 'rotate(0deg)';
        line_2.style.transform = 'rotate(0deg)';
        line_1.style.top = '-5px';
        line_2.style.top = '5px';
        line_1.style.background = 'white';
        line_2.style.background = 'white';
        document.body.style.overflow = 'auto';

        document.querySelector('.main .mb').style.background = 'black';



    } else {
        on = true;
        mb_nav_option.style.top = '11vw';
        line_1.style.transform = 'rotate(45deg)';
        line_2.style.transform = 'rotate(-45deg)';

        line_1.style.top = '0';
        line_2.style.top = '0';
        line_1.style.background = 'black';
        line_2.style.background = 'black';

        document.body.style.overflow = 'hidden';
        document.querySelector('.main .mb').style.background = '#FAFAFC';

        gsap.from(".mb_nav_option_box h1 ", {
            duration: 1.3,
            y: 2300,

            rotate: 100,
            // delay:2,
            opacity: 0,
        })

    }



})



const container = document.getElementById('con'); // Replace with your container's ID
let scrollPosition = 10;
const scrollSpeed = 10; // Adjust this value to control the scroll speed

container.addEventListener('scroll', () => {
    // Calculate the new scroll position based on the scroll speed
    scrollPosition += (container.scrollTop - scrollPosition) * scrollSpeed;

    // Apply the updated scroll position
    container.scrollTop = scrollPosition;
});




x_x.forEach((b) => {
    b.addEventListener('click', function(e) {

        x_x.forEach((c) => {
            c.querySelector('ul').style.display = 'none'
        })




        e.target.querySelector('ul').style.display = 'block'
        setTimeout(function() {
            e.target.querySelector('ul').style.transform = 'scale(1)'
            e.target.querySelector('ul').style.transitionDuration = '.5s';
            const ulElement = e.target.querySelector('ul');
        }, 100)



    })
})






gsap.from(".cantener_2 >img", {
    duration: 10,
    scale: 2.5,
    rotateY: 10,
    rotate: -40,
    transitionTimingFunction: 'linear',

    yoyo: true,
    repeat: -1,
    skewX: 20,

})

gsap.from(".cantener_ >img", {
    duration: 2,
    scale: 12.5,
    rotate: 90,
})

gsap.from(".main", {
    y: -600,
    duration: 3,
    opacity:0,
})








var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.page_2_product',
        //markers: true,
        scroller: 'body',
        start: '10% 50%',
        end: '100% 50%',
        scrub: 8,
        // pin: true,


    }
});

tl.from('.project img', {
    duration: 2,
    scale: 1,
}, 'a')



//transform: rotateY(400deg) scale(1.5);