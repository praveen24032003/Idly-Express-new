import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Logic
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');
  const mobileLinks = document.querySelectorAll('#mobile-menu a');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Navbar Scroll Effect
  const navbar = document.querySelector('#navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-cream/95', 'backdrop-blur-md', 'shadow-md');
      // Update logo or text colors if needed, but current design works with brown text
    } else {
      navbar.classList.remove('bg-cream/95', 'backdrop-blur-md', 'shadow-md');
    }
  });

  // Order Form Handling
  const orderForm = document.querySelector('#order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.querySelector('#name').value;
      const items = document.querySelector('#items').value;
      const location = document.querySelector('#location').value;

      const message = `*New Order Request*%0A%0A*Name:* ${name}%0A*Items:* ${items}%0A*Location:* ${location}%0A%0APlease confirm my order.`;
      const phoneNumber = '919345756552'; // Format: CountryCodePhoneNumber

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

      // Open in new tab
      window.open(whatsappUrl, '_blank');
    });
  }

  // Intersection Observer for fade-in animations (simple)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections or headings
  document.querySelectorAll('section h2, section h3, .group').forEach(el => {
    el.classList.add('opacity-0'); // Initial state handled by CSS usually, but we can do it here or just add a class
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // Add the animation class dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    .animate-fade-in-up {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
      } else {
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
