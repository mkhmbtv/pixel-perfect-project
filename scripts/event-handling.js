window.addEventListener('DOMContentLoaded', () => {
  console.log('event-handling.js script was successfully loaded');
  const lang = document.getElementById('lang-menu')
  lang.addEventListener('click', event => {
    console.log('lang clicked')
    event.stopPropagation();
    const dropup = document.querySelector('.dropup');
    dropup.classList.remove('dropup--hidden');
  });

  window.addEventListener('click', () => {
    console.log('HTML document clicked');
    document.querySelector('.dropup').classList.add('dropup--hidden');
  });
})