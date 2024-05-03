/*
	Sources: https://github.com/007killer2/WebDevelopmentLearn
	Website: https://007killer2.github.io/WebDevelopmentLearn/
*/

const rejectBtn = document.querySelector("#reject_btn");
const acceptBtn = document.querySelector("#accept_btn");
const cookiesPage = document.querySelector(".coockie_page");

const isCookieEnabled = localStorage.getItem("isCookieEnabled") || "false";

if (isCookieEnabled === "true") {
  console.log(isCookieEnabled);
  let cookiesPageClassList = cookiesPage.classList;
  cookiesPageClassList.add("hidden", "hidden_coockie");
}

if (cookiesPage != null) {
  rejectBtn.addEventListener("click", () => {
    let cookiesPageClassList = cookiesPage.classList;
    cookiesPageClassList.add("hidden", "hidden_coockie");
    localStorage.setItem("isCookieEnabled", "true");
    console.log(`Reject All: Hide cookies`);
  });

  acceptBtn.addEventListener("click", () => {
    let cookiesPageClassList = cookiesPage.classList;
    cookiesPageClassList.add("hidden", "hidden_coockie");
    localStorage.setItem("isCookieEnabled", "true");
    console.log(`Accept: Hide cookies`);
  });
}

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

// const faqList = document.querySelectorAll(".faq_question");
const arrow = document.querySelectorAll(".arrow");
const qestion = document.querySelector(".faq_question");
const faqList = document.querySelector(".faq_list");

const acc = document.querySelectorAll(".faq_question_btn");
acc.forEach((el) => {
  el.addEventListener("click", () => {
    el.children[1].classList.toggle("hidden_answer");
    el.children[1].classList.toggle("hidden");
    let panel = el.children[1];
    if (panel.classList.contains("hidden_answer")) {
      el.children[0].children[1].classList.toggle("arrow_up");
    } else {
      el.children[0].children[1].classList.toggle("arrow_up");
    }
  });
});
