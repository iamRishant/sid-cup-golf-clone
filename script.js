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
        end:"top -80%",
        scrub:2
    }
})