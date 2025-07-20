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
