gsap.registerPlugin(ScrollTrigger);

// Preloader
window.addEventListener("load", () => {
  const words = document.querySelectorAll(".preloader-word");
  const preloader = document.querySelector("#luxury-preloader");

  const tl = gsap.timeline({
    onComplete: () => {
      preloader.style.display = "none";
    }
  });

  words.forEach((word, index) => {
    if (index < words.length - 1) {
      tl.to(word, { opacity: 1, duration: 1.5, ease: "power2.out" })
        .to(word, { opacity: 0, duration: 1.8, ease: "power2.in", delay: 0.8 });
    } else {
      tl.to(word, { opacity: 1, duration: 1.2, ease: "power2.out" })
        .to(word, { opacity: 0, duration: 1.4, ease: "power2.in", delay: 1.2 });
    }
  });

  tl.to(preloader, { opacity: 0, duration: 1.4, ease: "power2.inOut" });
});

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
  document.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(() => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  });

  const luxuryElements = document.querySelectorAll('a, button, .project-card, .nav-links');
  luxuryElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    elem.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });
}

// About Section
gsap.fromTo(".about-left",
  { opacity: 0, x: -50 },
  {
    opacity: 1, x: 0, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: "#about", start: "top 80%", toggleActions: "play none none none" }
  }
);

gsap.fromTo(".about-right",
  { opacity: 0, x: 50 },
  {
    opacity: 1, x: 0, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: "#about", start: "top 80%", toggleActions: "play none none none" }
  }
);

// Education Timeline
gsap.fromTo(".timeline-item",
  { opacity: 0, y: 80, rotationY: 25 },
  {
    opacity: 1, y: 0, rotationY: 0, stagger: 0.3, duration: 1, ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: "#education",
      start: "top 75%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reverse"
    }
  }
);

// Skills Section (FIXED TARGET)
gsap.fromTo(".skill-category",
  { opacity: 0, scale: 0.7, y: 100 },
  {
    opacity: 1, scale: 1, y: 0, stagger: 0.15,
    scrollTrigger: {
      trigger: "#skills",
      start: "top 85%",
      end: "top 20%",
      scrub: 1.2
    }
  }
);

// Projects Section
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-container",
    start: "top 85%",
    toggleActions: "play none none none",
    invalidateOnRefresh: true,
  },
  duration: 0.6,
  scale: 0.95,
  opacity: 0,
  y: 30,
  stagger: 0.1,
  ease: "power2.out",
  clearProps: "all"
});

// Graphics Gallery
gsap.fromTo(".graphic-card",
  { opacity: 0, scale: 0.8, rotation: (i) => i % 2 === 0 ? -4 : 4 },
  {
    opacity: 1, scale: 1, rotation: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
    scrollTrigger: {
      trigger: ".graphics",
      start: "top 80%",
      toggleActions: "restart none none none"
    }
  }
);

// Contact Section
gsap.fromTo(".contact-container",
  { opacity: 0, y: 50 },
  {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: "#contactme",
      start: "top 85%",
      toggleActions: "play reverse restart reverse"
    }
  }
);

// Particles
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 65, "density": { "enable": true, "value_area": 1000 } },
    "color": { "value": "#FFC300" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.8, "random": true },
    "size": { "value": 2.6, "random": true },
    "line_linked": { "enable": false, "distance": 120, "color": "#FFC300", "opacity": 0.02, "width": 0 },
    "move": { "enable": true, "speed": 5.0, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": true }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": false },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 150, "line_linked": { "opacity": 0.9 } }
    }
  },
  "retina_detect": true
});

// Skills Horizontal Bars Animation
document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skill-item");

  const animateSkills = (item) => {
    const target = parseInt(item.getAttribute("data-target"), 10) || 0;
    const progressBar = item.querySelector(".skill-progress");
    const textDisplay = item.querySelector(".skill-percent");

    if (!progressBar || !textDisplay) return;

    progressBar.style.width = target + "%";

    let currentCount = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / target), 10);

    const counter = setInterval(() => {
      currentCount++;
      textDisplay.textContent = `${currentCount}%`;
      if (currentCount >= target) {
        clearInterval(counter);
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  skillItems.forEach(item => observer.observe(item));
});

// Skills Circles Animation
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-stat-box");

  const animateCircleProgress = (card) => {
    const wrapper = card.querySelector(".skill-circle-wrapper");
    if (!wrapper) return;

    const target = parseInt(wrapper.getAttribute("data-target"), 10) || 0;
    const progressCircle = wrapper.querySelector(".circle-progress");
    const textDisplay = wrapper.querySelector(".circle-percentage-text");

    if (!progressCircle || !textDisplay) return;

    const circumference = 251.2;
    const offset = circumference - (target / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;

    if (target === 0) {
      textDisplay.textContent = "0%";
      return;
    }

    let currentCount = 0;
    const duration = 1900;
    const stepTime = Math.max(Math.floor(duration / target), 10);

    const counter = setInterval(() => {
      currentCount++;
      textDisplay.textContent = `${currentCount}%`;
      if (currentCount >= target) clearInterval(counter);
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCircleProgress(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  skillCards.forEach(card => observer.observe(card));
});

// Contact Form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";
    submitBtn.style.cursor = "not-allowed";
    submitBtn.innerHTML = "Sending...";

    formStatus.textContent = "";
    formStatus.style.color = "";

    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        formStatus.textContent = "✅ Message sent successfully! I'll get back to you soon.";
        formStatus.style.color = "#4ade80";
        contactForm.reset();

        setTimeout(() => { formStatus.textContent = ""; }, 6000);
      } else {
        formStatus.textContent = "❌ " + (data.message || "Something went wrong. Please try again.");
        formStatus.style.color = "#f87171";
      }
    } catch (error) {
      console.error("Form error:", error);
      formStatus.textContent = "❌ Network error. Please check your connection and try again.";
      formStatus.style.color = "#f87171";
    } finally {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
      submitBtn.style.cursor = "pointer";
      submitBtn.innerHTML = originalBtnHTML;
    }
  });
}

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    progressBar.style.width = scrollPercentage + '%';
  }
});

// Active Navbar Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar ul li a');

if (sections.length > 0 && navLinks.length > 0) {
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}