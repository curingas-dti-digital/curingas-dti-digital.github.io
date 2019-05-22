var slideIndex = 0;
const slides = [
  'https://curingas-dti-digital.github.io/curingas-dti-gestao-a-vista/',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNdMwLmKshoFx0i8LKIpuPhOiSEorQBMtUKt6LPWVRnCDWtJQCQ_WKxSQP_91ZZUdvHs635VDehn9H/pubhtml?gid=1986555468&single=true',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNdMwLmKshoFx0i8LKIpuPhOiSEorQBMtUKt6LPWVRnCDWtJQCQ_WKxSQP_91ZZUdvHs635VDehn9H/pubhtml?gid=1795008378&single=true',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNdMwLmKshoFx0i8LKIpuPhOiSEorQBMtUKt6LPWVRnCDWtJQCQ_WKxSQP_91ZZUdvHs635VDehn9H/pubhtml?gid=1042978375&single=true'
];

let i = -1;
showSlides();

function showSlides() {
  if (i == slides.length - 1) {
    i = -1;
  }
  let page = slides[++i];
  document.getElementById('slideshow-viewport').src = page;
  setTimeout(showSlides, 30 * 1000); // Change image every 2 seconds
}
