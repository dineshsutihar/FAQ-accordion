
const content = document.querySelectorAll('.faq');

content.forEach((item) => {
  item.addEventListener('click', () => {
    item.querySelectorAll('img').forEach((img) => {
        img.classList.toggle('hidden')
    })
    item.querySelector('p').classList.toggle('hidden')
  });
});