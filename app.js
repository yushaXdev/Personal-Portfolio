// REGISTER PLUGINS
gsap.registerPlugin(ScrollTrigger);

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
      tl.to(word, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(word, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        delay: 0.6 
      });
    } else {

      tl.to(word, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(word, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        delay: 1.2 
      });
    }
  });

  tl.to(preloader, {
    opacity: 0,
    duration: 0.9,
    ease: "power2.inOut"
  });
});
// Custom Cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

// Hover States
const luxuryElements = document.querySelectorAll('a, button, .project-card, .nav-links');
luxuryElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    elem.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// 2. ABOUT SECTION 
gsap.fromTo(".about-content", 
    { 
        opacity: 0, 
        y: 60,
        scale: 0.95
    }, 
    { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        scrollTrigger: {
            trigger: "#about", 
            start: "top 80%",
            end: "top 30%",
            scrub: 1 
        }
    }
);


// 3. EDUCATION TIMELINE
gsap.fromTo(".timeline-item", 
    { 
        opacity: 0, 
        y: 80,
        rotationY: 25 
    }, 
    { 
        opacity: 1, 
        y: 0, 
        rotationY: 0,
        stagger: 0.3, 
        duration: 1,
        ease: "back.out(1.4)", 
        scrollTrigger: {
            trigger: "#education",
            start: "top 75%",
            end: "bottom 15%",
            toggleActions: "play reverse restart reverse" 
        }
    }
);


// 4. SKILLS SECTION 
gsap.fromTo(".skill-card", 
    { 
        opacity: 0, 
        scale: 0.7,
        y: 100
    }, 
    { 
        opacity: 1, 
        scale: 1,
        y: 0,
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#skills", 
            start: "top 85%",
            end: "top 20%",
            scrub: 1.2 
        }
    }
);




// 5. PROJECTS SECTION 
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


// 6. GRAPHICS CREATIVE GALLERY
gsap.fromTo(".graphic-card", 
    { 
        opacity: 0, 
        scale: 0.8,
        rotation: (i) => i % 2 === 0 ? -4 : 4 
    }, 
    { 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        duration: 0.6,         
        stagger: 0.12,          
        ease: "power2.out",     
        scrollTrigger: {
            trigger: ".graphics", 
            start: "top 80%",    
            toggleActions: "restart none none none" 
        }
    }
);


// 7. CONTACT SECTION
gsap.fromTo(".contact-container", 
    { 
        opacity: 0, 
        y: 50 
    }, 
    { 
        opacity: 1, 
        y: 0,
        scrollTrigger: {
            trigger: "#contactme", // ID Back!
            start: "top 85%",
            toggleActions: "play reverse restart reverse"
        }
    }
);
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 65,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#FFC300"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.85,
      "random": true
    },
    "size": {
      "value": 2.5,
      "random": true
    },
    "line_linked": {
      "enable": false,
      "distance": 120,
      "color": "#FFC300",
      "opacity": 0.02,
      "width": 0
    },
    "move": {
      "enable": true,
      "speed": 3.0,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 150,
        "line_linked": {
          "opacity": 0.9
        }
      }
    }
  },
  "retina_detect": true
});


// Skills circles
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
      
      if (currentCount >= target) {
        clearInterval(counter);
      }
    }, stepTime);
  };

  // Intersection Observer
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