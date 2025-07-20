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

function showSuccessAlertAndRedirect(message, delay = 3000, redirectUrl = "/") {
  const alertBox = document.getElementById("success-alert");
  if (!alertBox) {
    console.warn("Alert box not found.");
    return;
  }

  alertBox.textContent = message;
  alertBox.style.display = "block";
  alertBox.style.opacity = "1";

  // Hide the alert after some time
  setTimeout(() => {
    alertBox.style.opacity = "0";
  }, delay - 1000); // Fade out before redirect

  // Redirect after delay
  setTimeout(() => {
    window.location.href = redirectUrl;
  }, delay);
}

