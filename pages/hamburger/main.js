const buttons = document.querySelectorAll('.anim-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const state = button.getAttribute('data-state');

    if (!state || state === 'false') {
      button.setAttribute('data-state', 'true');
      button.setAttribute('aria-expanded', 'true');
    } else {
      button.setAttribute('data-state', 'false');
      button.setAttribute('aria-expanded', 'false');
    }
  });
});
