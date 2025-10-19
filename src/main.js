// Import CSS first
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

// Then JS
import 'bootstrap';
import $ from 'jquery';
import * as Popper from '@popperjs/core';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin);

// Make globals available
window.$ = $;
window.jQuery = $;
window.Popper = Popper;

// Import your custom JS
import { initNavigation, handleScroll } from './js/navigation.js';
import { initContactForm } from './js/contact-form.js';
import { initAnimations } from './js/animations.js';
import { initProjectCards } from './js/project-cards.js'; 

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  dom.watch();
  initProjectCards();
  initNavigation();
  initContactForm();
  initAnimations();
  
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  // Add scroll event listener for navigation highlighting
  window.addEventListener('scroll', handleScroll);
});