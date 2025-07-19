    // Populate DOB fields
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");

    for (let d = 1; d <= 31; d++) {
      const opt = document.createElement("option");
      opt.value = d;
      opt.textContent = d;
      daySelect.appendChild(opt);
    }

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    months.forEach((month, index) => {
      const opt = document.createElement("option");
      opt.value = index + 1;
      opt.textContent = month;
      monthSelect.appendChild(opt);
    });

    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y >= 1900; y--) {
      const opt = document.createElement("option");
      opt.value = y;
      opt.textContent = y;
      yearSelect.appendChild(opt);
    }

    // Simple form validation
    function validateForm() {
      const firstName = document.getElementById("first-name").value.trim();
      const surname = document.getElementById("surname").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const day = document.getElementById("day").value;
      const month = document.getElementById("month").value;
      const year = document.getElementById("year").value;

      if (!firstName || !surname || !email || !password || !day || !month || !year) {
        alert("Please fill in all fields including date of birth.");
        return false;
      }

      // Redirect to index.html after successful sign up
      window.location.href = "index.html";
      return false; // prevent default form submit
    }
