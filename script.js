// Show welcome alert ONLY on index.html or root path
window.addEventListener("load", function () {
  const path = window.location.pathname;

  if (path.includes("index.html") || path === "/" || path === "/index.html") {
    alert("Welcome to Musa Iliasu College!");
  }

  updateClock(); // always update clock
});

// Live clock update
function updateClock() {
  const now = new Date();
  const clockElement = document.getElementById("clock");
  if (clockElement) {
    clockElement.textContent = "Current Time: " + now.toLocaleTimeString();
  }
}
setInterval(updateClock, 1000);

// Show/hide admission notice (used only on admission.html)
function toggleAdmission() {
  const text = document.getElementById("admissionText");
  if (text) {
    text.style.display = text.style.display === "none" ? "block" : "none";
  }
}

// Scroll-to-top logic
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide top button on scroll
window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  if (!topBtn) return;

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Form validation (only runs on form.html)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("applicationForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    if (phone.length < 10) {
      alert("Please enter a valid phone number.");
      e.preventDefault();
      return;
    }

    if (!gender) {
      alert("Please select your gender.");
      e.preventDefault();
      return;
    }

    alert("Your application has been submitted successfully!");
  });
});
