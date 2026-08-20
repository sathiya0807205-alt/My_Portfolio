// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all the fields.");

      return;
    }

    const subject = encodeURIComponent("Portfolio Contact from " + name);

    const body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message,
    );

    window.location.href = `mailto:sathiya0807205@gmail.com?subject=${subject}&body=${body}`;
  });
}

// ========================================
// CLOSE MOBILE NAVBAR AFTER CLICK
// ========================================

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});
