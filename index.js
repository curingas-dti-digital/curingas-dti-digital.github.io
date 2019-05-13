var slideIndex = 0;
const slides = [
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNdMwLmKshoFx0i8LKIpuPhOiSEorQBMtUKt6LPWVRnCDWtJQCQ_WKxSQP_91ZZUdvHs635VDehn9H/pubhtml?gid=116497499&single=true',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNdMwLmKshoFx0i8LKIpuPhOiSEorQBMtUKt6LPWVRnCDWtJQCQ_WKxSQP_91ZZUdvHs635VDehn9H/pubhtml?gid=1986555468&single=true',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNdMwLmKshoFx0i8LKIpuPhOiSEorQBMtUKt6LPWVRnCDWtJQCQ_WKxSQP_91ZZUdvHs635VDehn9H/pubhtml?gid=1795008378&single=true',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNdMwLmKshoFx0i8LKIpuPhOiSEorQBMtUKt6LPWVRnCDWtJQCQ_WKxSQP_91ZZUdvHs635VDehn9H/pubhtml?gid=1042978375&single=true',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSvu0yJzvhUaYgOo-DEbuog5DaOGiMuY0JtTC4UqsAZ0-IVdNPa8_ieAwdSUTkc1EKak8xGeDGYTzya/pubhtml?gid=1731783516&single=true',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGnRoRw6L1DdRMYjAvaTESfAMnUHa_MMlcS6kd-WanmZikSNnkBQw1CqPXQDg90-KvxVYyDW0sDf2l/pubhtml?gid=1227500108&single=true',
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR-JPygtO61VSMXmqsxQ9WMUU2zpQ7rSx173wb2zLpWU4zUdOAXFnRoukH8zdGTZ2Xzg2M1zIs3eCu5/pubhtml?gid=1227500108&single=true'
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
