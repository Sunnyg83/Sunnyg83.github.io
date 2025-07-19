window.onload = function() {
  if (window.particlesJS) {
    particlesJS.load('particles-js', 'particles.json', function() {
      // callback
    });
  }
  
  // Slide-in animation for intro text
  const nameElement = document.getElementById('typed-name');
  const introElement = document.getElementById('typed-intro');
  
  if (nameElement) {
    nameElement.style.opacity = '0';
    nameElement.style.transform = 'translateY(20px)';
    nameElement.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    setTimeout(() => {
      nameElement.textContent = "Hi! I'm Sankeerth Gandhari 👋 |";
      nameElement.style.opacity = '1';
      nameElement.style.transform = 'translateY(0)';
    }, 300);
  }
  
  if (introElement) {
    introElement.style.opacity = '0';
    introElement.style.transform = 'translateY(20px)';
    introElement.style.transition = 'opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s';
    
    setTimeout(() => {
      introElement.innerHTML = "I'm a Mathematics and Computer Science student at UCLA with a passion for <span style='color: #2774AE;'>building</span> <span class='no-wrap'>innovative solutions💡</span>. Other hobbies include <span style='color: #2774AE;'>competing</span> <span class='no-wrap'>in racket sports 🏓</span>, <span style='color: #2774AE;'>playing</span> the guitar🎸, <span style='color: #2774AE;'>coaching</span> tennis 🎾, and <span style='color: #2774AE;'>making</span> you laugh 😄.";
      introElement.style.opacity = '1';
      introElement.style.transform = 'translateY(0)';
    }, 800);
  }
} 