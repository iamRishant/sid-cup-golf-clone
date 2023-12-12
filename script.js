var crsr=document.querySelector("#cursor");
var blur=document.querySelector("#cursor-blur");

document.addEventListener("mousemove",(dets)=>{
    // the below code will will change the position of cursor div with the mouse x and y cordinate from top and bottom but mouse point left corner par krega div to usko center me laane me liye we will substract its height/2 and width/2
    crsr.style.left=dets.x - 10 +"px"//-10 coz width is 20 px to x should be in middle by defalue top left corner par rhega x coordinate
    crsr.style.top=dets.y - 10 + "px"
    blur.style.left=dets.x-100+"px"
    blur.style.top=dets.y-100+"px"
})



// to learn scroll trigger watch this  https://gsap.com/docs/v3/Plugins/ScrollTrigger/#:~:text=Embed%20scroll%20triggers%20directly%20into,place%20between%20certain%20scroll%20positions.
gsap.to("#nav", {
    backgroundColor: "#000", // Change the background color to black
    duration: 0.5, // Animation duration in seconds
    height: "100px", // Change the height to 100 pixels
    // delay: 1, // You can uncomment this line to add a delay before the animation starts
    scrollTrigger: {
        trigger: "#nav", // The element that triggers the animation
        scroller: "body", // The element that acts as the scroll container (the body in this case)//kiske scroll hone par
        // markers: true, // Display markers for the trigger start/end points, useful for debugging
        start: "top -10%", // Start the animation when the top of the trigger element is 10% above the top of the viewport
        end: "top -11%", // End the animation when the top of the trigger element is 11% above the top of the viewport
        scrub: 1, // Enable scrubbing with a speed of 1 (higher values for slower scrubbing)
    }
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})

// nav bar ke elements par jab mouse jaega then uska piche ka round div ke saath cher chaar

var h4All=document.querySelectorAll("#nav h4");// nav ke andr ka sara h4
h4All.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale=1;
        crsr.style.border="0px solid ##95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})

gsap.from("#about-us img,#about-us-in",{
    // x:50,
    // yha x and y se mtlb hai ki element y +50 unit se aaega(niche se agar - hota to upar se aata) to its normal position and opacity 0se mtlb ki initially gyb hoga
    y:50,
    opacity:0,
    duration:3,
    // stagger:2//stagger lgane se ek ek krke aaega
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        // start and end tell where to start and where to end use markers true to check start and end values
        start:"top 60%",
        end:"top 55%",
        scrub:3,
    }
})
// card par lgane se 3d effect (rotate 3d wala effect chala jaa rha)
// gsap.from(".card",{
//     y:50,
//     opacity:0,
//     duration:2,
//     // scale:0.8,
//     // stagger:2//stagger lgane se ek ek krke aaega
//     // scrollTrigger:{
//     //     trigger:".card",
//     //     scroller:"body",
//     //     marker:true,
//     //     start:"top 60%",
//     //     end:"top 55%",
//     //     scrub:3,
//     // }
// })

gsap.from("#colon1",{
    x:-70,
    y:-70,
    // duration:3,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from("#colon2",{
    x:+70,
    y:+70,
    // duration:3,
    scrollTrigger:{
        // yha trigger coln1 isiliye diye ki we want ki ek hi trigger element se dono trigger ho
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 30%",
        scrub:2,
    }
})
gsap.from("#page4 h2",{
    y:50,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 72%",
        end:"top 70%",
        scrub:2,
    }
})