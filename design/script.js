// Configure Toastr options
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-center",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "200",
  timeOut: "1300",
  extendedTimeOut: "300",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form elements
    const firstName = document
      .querySelector('input[name="first-name"]')
      .value.trim();
    const lastName = document
      .querySelector('input[name="last-name"]')
      .value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector("textarea").value.trim();
    const queryType = document.querySelector('input[name="button1"]:checked');
    const consent = document.querySelector('input[name="consent"]').checked;

    // Check if required fields are filled
    if (
      !firstName ||
      !lastName ||
      !email ||
      !message ||
      !queryType ||
      !consent
    ) {
      // Show error toast
      toastr.error("Please fill the form", "Incomplete");
    } else {
      // Show success toast
      toastr.success(
        "Thanks for completing the form. we'll be in touch soon",
        "Message Sent"
      );

      // Clear the form
      document.getElementById("contactForm").reset();
    }
  });
