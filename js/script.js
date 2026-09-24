/* ===========================================================
   IronVault Fitness — Custom JavaScript
   =========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  /* --- Mobile Navigation: close menu after clicking a link --- */
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });

  /* --- Navbar scroll behaviour: background transition --- */
  const navbar = document.getElementById('mainNavbar');
  const toggleNavbarBackground = function () {
    const scrolled = window.scrollY > 50;
    if (scrolled) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('initial');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('initial');
    }
  };

  // Initialize navbar state on page load
  toggleNavbarBackground();

  // Listen to scroll
  let scrollTimeout;
  window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(toggleNavbarBackground, 10);
  });

  /* --- Active navigation link highlighting --- */
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -30% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector('.nav-link[href="#' + id + '"]');

      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
        });
        if (navLink) {
          navLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* --- Contact Form Validation --- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      // Reset validation states
      const inputs = contactForm.querySelectorAll('input, select, textarea');
      inputs.forEach(function (input) {
        input.classList.remove('is-invalid');
      });

      // Check validity
      if (contactForm.checkValidity()) {
        // Form is valid: show success message
        contactForm.reset();

        // Reset the subject select placeholder
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect) {
          subjectSelect.value = '';
        }

        // Show success message
        if (formSuccess) {
          formSuccess.classList.remove('d-none');
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Hide success message after 6 seconds
        setTimeout(function () {
          if (formSuccess) {
            formSuccess.classList.add('d-none');
          }
        }, 6000);
      } else {
        // Form is invalid: show validation feedback
        inputs.forEach(function (input) {
          if (!input.checkValidity()) {
            input.classList.add('is-invalid');
          }
        });
      }

      contactForm.classList.add('was-validated');
    });
  }

  /* --- Newsletter Form --- */
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== '') {
        alert('Thank you! You\'ll receive IronVault updates soon.');
        emailInput.value = '';
      }
    });
  }

  /* --- Bootstrap Accordion Enhancement --- */
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      // Allow collapsing when clicking an already-open item
      if (expanded) {
        // Bootstrap 5 allows toggle only if data-bs-parent is not set per-item
        // We allow close by removing 'show' from the collapse element
        const collapseEl = document.querySelector(this.getAttribute('data-bs-target'));
        if (collapseEl) {
          collapseEl.classList.remove('show');
          this.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
});

/* --- Window resize handler: ensure mobile nav closes on route change --- */
window.addEventListener('resize', function () {
  const navbarCollapse = document.getElementById('navbarNav');
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (window.innerWidth >= 992 && navbarCollapse && navbarCollapse.classList.contains('show')) {
    navbarToggler.click();
  }
});
