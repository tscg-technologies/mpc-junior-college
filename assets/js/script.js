/**
 * MPC JUNIOR COLLEGE — STATIC FRONTEND SCRIPT
 * Vanilla JavaScript for Navigation, Modals, Accordions, and Forms
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initActiveNav();
  initAccordions();
  initTabs();
  initScrollTop();
  initForms();
});

/* --- 1. STICKY HEADER --- */
function initStickyHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --- 2. MOBILE NAVIGATION & DROPDOWNS --- */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile menu when a direct link is clicked
    const navLinks = navMenu.querySelectorAll('a:not(.dropdown-toggle)');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('open');
          toggleBtn.classList.remove('active');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Handle dropdown toggle
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        if (toggle.getAttribute('href') === '#' || toggle.getAttribute('role') === 'button') {
          e.preventDefault();
        }
        if (window.innerWidth <= 768) {
          dropdown.classList.toggle('open');
        }
      });
    }
  });
}

/* --- 3. ACTIVE NAV LINK HIGHLIGHT --- */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      // If dropdown item is active, highlight the parent dropdown toggle as well
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });
}

/* --- 4. ACCORDIONS (FAQ) --- */
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    const items = acc.querySelectorAll('.accordion-item');

    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const body = item.querySelector('.accordion-body');

      if (!header || !body) return;

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Optional: close other sibling items in the same accordion
        items.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBody = otherItem.querySelector('.accordion-body');
            if (otherBody) otherBody.style.maxHeight = null;
          }
        });

        if (isActive) {
          item.classList.remove('active');
          body.style.maxHeight = null;
        } else {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  });
}

/* --- 5. TABS COMPONENT --- */
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');

  tabContainers.forEach(container => {
    const tabButtons = container.querySelectorAll('.tab-btn');
    const tabPanes = container.querySelectorAll('.tab-pane');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');

        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const activePane = container.querySelector(target);
        if (activePane) {
          activePane.classList.add('active');
        }
      });
    });
  });
}

/* --- 6. SCROLL TO TOP BUTTON --- */
function initScrollTop() {
  let scrollTopBtn = document.querySelector('.scroll-top-btn');

  if (!scrollTopBtn) {
    scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top of page');
    scrollTopBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    `;
    document.body.appendChild(scrollTopBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --- 7. FORM VALIDATION & DEMO SUBMISSION --- */
function initForms() {
  const forms = document.querySelectorAll('form[data-demo-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

      inputs.forEach(input => {
        input.classList.remove('is-invalid');
        const val = input.value.trim();

        if (!val) {
          isValid = false;
          input.classList.add('is-invalid');
        } else if (input.type === 'email') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(val)) {
            isValid = false;
            input.classList.add('is-invalid');
          }
        } else if (input.type === 'tel') {
          // generic 10 digit check
          const cleanPhone = val.replace(/[\s-]/g, '');
          if (cleanPhone.length < 10) {
            isValid = false;
            input.classList.add('is-invalid');
          }
        }
      });

      if (isValid) {
        // Show success alert or replace form with success state
        let successBanner = form.querySelector('.form-success-banner');
        if (!successBanner) {
          successBanner = document.createElement('div');
          successBanner.className = 'form-success-banner active';
          successBanner.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div>
              <strong>Enquiry Registered Successfully!</strong>
              <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem;">This is an illustrative frontend demonstration. No personal data has been transmitted or stored.</p>
            </div>
          `;
          form.prepend(successBanner);
        } else {
          successBanner.classList.add('active');
        }

        form.reset();

        // Scroll to success message
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Auto hide success banner after 8 seconds
        setTimeout(() => {
          successBanner.classList.remove('active');
        }, 8000);
      }
    });

    // Remove invalid styling on user input
    form.addEventListener('input', (e) => {
      if (e.target.classList.contains('is-invalid')) {
        e.target.classList.remove('is-invalid');
      }
    });
  });
}
