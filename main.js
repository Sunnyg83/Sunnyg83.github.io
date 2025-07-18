window.onload = function() {
  if (window.particlesJS) {
    particlesJS.load('particles-js', 'particles.json', function() {
      // callback
    });
  }
  // TypeIt typing animation for intro
  if (window.TypeIt) {
    new TypeIt('#typed-name', {
      strings: ["Hi! I'm Sankeerth Gandhari �� |"],
      speed: 45,
      waitUntilVisible: true,
      cursor: true,
      cursorChar: "█",
      afterComplete: function(instance) { instance.destroy(); }
    }).go();
    new TypeIt('#typed-intro', {
      strings: [
        "I'm a Mathematics and Computer Science student at UCLA with a passion for building innovative solutions. My other hobbies include learning abut AI, playing tennis 🎾, and bringing innovative ideas to life 💡."
      ],
      speed: 38,
      waitUntilVisible: true,
      startDelay: 600,
      cursor: false,
      afterComplete: function(instance) { instance.destroy(); }
    }).go();
  }
} 