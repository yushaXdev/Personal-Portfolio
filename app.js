// REGISTER PLUGINS
gsap.registerPlugin(ScrollTrigger);

// 1. INITIAL LOADER OVERLAY
gsap.to(".bar", {
    duration: 1.2,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
    onComplete: function() {
        const overlay = document.querySelector(".overlay");
        if (overlay) {
            overlay.classList.add("overlay-hidden");
        }
        ScrollTrigger.refresh();
    }
});


// 2. ABOUT SECTION (IDs Restored + Smooth Scrub)
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
            trigger: "#about", // ID Back!
            start: "top 80%",
            end: "top 30%",
            scrub: 1 
        }
    }
);


// 3. EDUCATION TIMELINE (Tumhaara Pehle Wala Style + Subtle Fadeout Fix)
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
            trigger: "#education", // ID Back!
            start: "top 75%",
            end: "bottom 15%", // Isko thoda aur neche kiya taake last card aaram se parha jaye
            // "play reverse restart reverse" ka matlab: 
            // Neche jaoge toh chalega, upar jaoge toh reverse hoga. 
            // Lekin jab dubara scroll karoge toh bilkul fresh RESTART hoga, bina refresh kiye!
            toggleActions: "play reverse restart reverse" 
        }
    }
);


// 4. SKILLS SECTION (IDs Restored + Smooth Scrub)
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
            trigger: "#skills", // ID Back!
            start: "top 85%",
            end: "top 20%",
            scrub: 1.2 
        }
    }
);


// 5. PROJECTS SECTION (Baar Baar Chalanay Ke Liye ToggleActions Updated)
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".projects-container",
        start: "top 75%",
        // "restart none none none" se jab bhi scroll karke wapas aaoge, animation fresh chalegi!
        toggleActions: "restart none none none", 
    },
    duration: 0.8,
    scale: 0.7,             
    opacity: 0,       
    y: 50,    
    rotationX: 10, // Mobile responsive safety range
    transformOrigin: "center bottom",
    stagger: 0.15,          
    ease: "back.out(1.7)", 
});


// 6. GRAPHICS CREATIVE GALLERY (Baar Baar Scroll Pe Restart Fix)
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
            toggleActions: "restart none none none" // Repeat on scroll fixed!
        }
    }
);


// 7. CONTACT SECTION (IDs Restored)
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
      "value": "#7cf03d"
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
      "color": "#7cf03d",
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



