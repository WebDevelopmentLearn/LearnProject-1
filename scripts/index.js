const rejectBtn = document.querySelector("#reject_btn");
const acceptBtn = document.querySelector("#accept_btn");
const cookiesPage = document.querySelector(".coockie_page");
if (cookiesPage != null) {
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
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */

    el.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = el.children[1];
    console.log(panel);
    if (panel.classList.contains("hidden_answer")) {
      panel.classList.toggle("hidden_answer");
      panel.classList.toggle("hidden");
      el.children[0].children[1].classList.toggle("arrow_up");
    } else {
      panel.classList.toggle("hidden_answer");
      panel.classList.toggle("hidden");
      el.children[0].children[1].classList.toggle("arrow_up");
    }
  });
});

// arrow.forEach((el) => {
//   el.addEventListener("click", () => {
//     faqList.forEach((el, id) => {
//       switch (id) {
//         case 0:
//           console.log(el);
//           return;
//         case 1:
//           console.log(el);
//           return;
//       }
//     });
//   });
// });
