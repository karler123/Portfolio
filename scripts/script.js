document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href="#home"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const params = new URLSearchParams(formData);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyHKWBbHPzhtk0VULxK02GYXsylG28WyeyL2LreF8ATZzb7Ht0GI4wTSuEWsKVfOn7_Vg/exec", {
        method: "POST",
        body: params,
      });

      const result = await response.json();

      if (result.success) {
        showSuccessAlertAndRedirect("Form submitted successfully! Redirecting...", 4000, "https://your-live-site.com/");
        window.location.href = "https://portfolio-six-theta-s166fsnuri.vercel.app/";
      } else {
        alert("Submission failed. Please try again.");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    }
  });
});

function showSuccessAlertAndRedirect(message, delay = 4000, redirectUrl = "/") {
  // Check if an alert already exists and remove it
  const existing = document.getElementById("success-alert");
  if (existing) existing.remove();

  // Create alert div
  const alertBox = document.createElement("div");
  alertBox.id = "success-alert";
  alertBox.textContent = message;

  // Style it
  Object.assign(alertBox.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "16px 24px",
    borderRadius: "8px",
    zIndex: "9999",
    fontFamily: "sans-serif",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    opacity: "1",
    transition: "opacity 0.5s ease",
  });

  // Add to body
  document.body.appendChild(alertBox);

  // Hide after a short time
  setTimeout(() => {
    alertBox.style.opacity = "0";
  }, delay - 1000); // fade out early

  // Redirect after full delay
  setTimeout(() => {
    window.location.href = redirectUrl;
  }, delay);
}


