// Function to open a modal by project ID
function openModal(projectId) {
  const modal = document.getElementById(projectId);
  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close a modal by project ID
function closeModal(projectId) {
  const modal = document.getElementById(projectId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
/* ---- Background Animation with tsParticles----- */
tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 120,
      density: { enable: true, value_area: 800 }
    },
    color: { value: ["#ff004f", "#ffffff", "#ff80bf"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: { default: "out" }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff004f",
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  background: { color: "#000" }
});
// Navbar toggle for mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
