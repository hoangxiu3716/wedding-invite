// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Create a scene for the decorative section
var scene = new ScrollMagic.Scene({
    triggerElement: '.decorative',
    reverse: false, // Only trigger once
})
.setClassToggle('.decorative', 'visible') // Add a class to the section
.addTo(controller);

// Additional ScrollMagic scenes and animations can be added as needed
