const rejectBtn = document.querySelector("#reject_btn");
const acceptBtn = document.querySelector("#accept_btn");
const cookiesPage = document.querySelector(".coockie_page");
rejectBtn.addEventListener("click", () => {
  let cookiesPageClassList = cookiesPage.classList;
  cookiesPageClassList.add("hidden");
  console.log(`Reject All: Hide cookies`);
});

acceptBtn.addEventListener("click", () => {
  let cookiesPageClassList = cookiesPage.classList;
  cookiesPageClassList.add("hidden");
  console.log(`Accept: Hide cookies`);
});

const videoFrame = document.querySelector("#video_frame");
const videosList = [
  "IKXrzTmug_E?si=pSiYkRmy72fKecKM",
  "QZWrJKalV1o?si=Gk8WQP3QFBetSaPr",
  "vdtDyAevSU0?si=q2KLEBiv3ZTeD7bD",
  "mnOrDCSr2XA?si=65uQY-ll6BGXl1fD",
  "lJyxWQPHotw?si=kQOjx_02DO3A0ufA",
];

let currentVideo = Math.floor(videosList.length * Math.random());
// console.log(
//   `RandomValue: ${currentVideo}` + `\n` + `Link: ${videosList[currentVideo]}`
// );
videoFrame.setAttribute(
  "src",
  `https://www.youtube.com/embed/` + `${videosList[currentVideo]}`
);
