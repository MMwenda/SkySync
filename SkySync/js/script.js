// document.getElementById('shrinkButton').addEventListener('click', function() {
//     this.classList.add('scale-75');
//     setTimeout(() => this.classList.remove('scale-75'), 1000);
//   });

const contactLink = document.querySelector('a[href="#contact"]');
const contactPopup = document.querySelector('#contact');
const close = document.querySelector('#x_icon');

contactLink.addEventListener('click', (e) => {
  e.preventDefault(); // prevent the default link behavior
  contactPopup.style.display = contactPopup.style.display === "none" ? "flex" : "none";
});

close.addEventListener('click', () => {
  contactPopup.style.display = "none";
})