export function initAnimations() {
    // Add animation class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('fade-in');
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Trigger initial animation
    setTimeout(animateOnScroll, 100);
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
  }
  
  function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }