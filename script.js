// Initialize particles.js for animated network background
particlesJS.load('particles-js', 'particles.json', function() {
  // callback
});

// Typing animation for name and intro using TypeIt.js
new TypeIt('#typed-name', {
  strings: ["Hi! I'm Sankeerth Gandhari 👋"],
  speed: 60,
  waitUntilVisible: true,
  cursor: true,
  afterComplete: function(instance) {
    instance.destroy();
  }
}).go();

new TypeIt('#typed-intro', {
  strings: [
    "I'm a Mathematics and Computer Science student at UCLA with a passion for building innovative solutions. Other sidequests include AI research, competing in racket sports 🎾, and bringing ideas to life 💡."
  ],
  speed: 38,
  waitUntilVisible: true,
  startDelay: 1200,
  cursor: false,
  afterComplete: function(instance) {
    instance.destroy();
  }
}).go(); 