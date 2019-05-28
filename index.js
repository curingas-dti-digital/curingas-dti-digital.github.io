var slideIndex = 0;
const slides = [
  { page: 'https://curingas-dti-digital.github.io/curingas-dti-gestao-a-vista', seconds: 90 },
  {
    page:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNdMwLmKshoFx0i8LKIpuPhOiSEorQBMtUKt6LPWVRnCDWtJQCQ_WKxSQP_91ZZUdvHs635VDehn9H/pubhtml?gid=1795008378&single=true',
    seconds: 30
  }
];

let i = -1;
showSlides();

function showSlides() {
  if (i == slides.length - 1) {
    i = -1;
  }
  i++;
  document.getElementById('slideshow-viewport').src = slides[i].page;
  setTimeout(showSlides, slides[i].seconds * 1000); // Change image every 2 seconds
}
