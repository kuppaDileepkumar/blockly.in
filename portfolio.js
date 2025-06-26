document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('darkToggle');
  const toggleIcon = document.getElementById('toggleIcon');
  const body = document.body;
  const socialIcons = document.querySelectorAll('.icon');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (toggleIcon) toggleIcon.src = 'images/sun.png';
    socialIcons.forEach(icon => {
      if (icon.dataset.dark) icon.src = icon.dataset.dark;
    });
  } else {
    if (toggleIcon) toggleIcon.src = 'images/moon.png';
    socialIcons.forEach(icon => {
      if (icon.dataset.light) icon.src = icon.dataset.light;
    });
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    if (toggleIcon) {
      toggleIcon.src = isDark ? 'images/sun.png' : 'images/moon.png';
    }

    socialIcons.forEach(icon => {
      icon.src = isDark ? icon.dataset.dark : icon.dataset.light;
    });

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
