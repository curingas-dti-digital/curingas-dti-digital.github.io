var slideIndex = 0;
const slides = [
  {
    name: 'Ritos Tribo',
    page:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pubhtml?gid=2092766634&single=true',
    seconds: 60
  },
  {
    name: 'Diagnóstico',
    page:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpC_x6FOQi7QOG4-gFFZzgIp_BCHZEKLHy8PoJpA9twqOAsRVMUerK9BEhglaI92K58qjW4DOFFkMC/pubhtml?gid=890090851&single=true',
    seconds: 60
  },
  {
    name: '1-1',
    page: 'https://curingas-dti-digital.github.io/curingas-dti-gestao-a-vista',
    seconds: 60
  }
];

var i = -1;
showSlides();

function showSlides() {
  if (i == slides.length - 1) {
    i = -1;
  }
  i++;
  document.getElementById('slideshow-viewport').src = slides[i].page;
  document.getElementById('slideshow-viewport').contentWindow.location.href = slides[i].page;
  // $('#slideshow-viewport').attr('src', slides[i].page);
  setTimeout(showSlides, slides[i].seconds * 1000); // Change image every 2 seconds
}
