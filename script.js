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
