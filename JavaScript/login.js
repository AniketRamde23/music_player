  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
      alert('Please enter both email and password.');
      return;
    }

    // Simulate login
    localStorage.setItem('isLoggedIn', 'true'); // 👈 Save login status
    window.location.href = 'index.html';
  });