const nav = document.getElementById('nav-links');
const isLoggedIn = localStorage.getItem('isLoggedIn');

const allAudios = document.querySelectorAll('audio');

if (isLoggedIn === 'true') {
  nav.innerHTML = `<a href="#" id="logout">Logout</a>`;

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  });
} else {
  nav.innerHTML = `
    <a href="login.html">Login</a>
    <a href="signup.html">Sign Up</a>
  `;

  allAudios.forEach(audio => {
    audio.controls = false;
    const warning = document.createElement('div');
    warning.textContent = '🔒 Login to play this song';
    warning.style.color = 'red';
    warning.style.fontSize = '14px';
    warning.style.marginTop = '8px';
    warning.style.cursor = 'pointer';
    warning.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
    audio.parentElement.appendChild(warning);
  });
}

// 🔄 Auto-play next track
allAudios.forEach((audio, index) => {
  audio.addEventListener('ended', () => {
    const nextAudio = allAudios[index + 1];
    if (nextAudio) {
      nextAudio.play();
      window.scrollTo({
        top: nextAudio.parentElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// 🔇 Ensure only one audio plays at a time
allAudios.forEach(audio => {
  audio.addEventListener('play', () => {
    allAudios.forEach(otherAudio => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
  });
});
