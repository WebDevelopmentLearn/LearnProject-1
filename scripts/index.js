/*
	Sources: https://github.com/WebDevelopmentLearn/LearnProject-1
	Website: https://webdevelopmentlearn.github.io/LearnProject-1/
*/

const rejectBtn = document.querySelector("#reject_btn");
const acceptBtn = document.querySelector("#accept_btn");
const cookiesPage = document.querySelector(".coockie_page");
const isCookieEnabled = localStorage.getItem("isCookieEnabled") || "false";
const acc = document.querySelectorAll(".faq_question_btn");
const videoFrame = document.querySelector("#video_frame");
const videosList = [
  "IKXrzTmug_E?si=pSiYkRmy72fKecKM",
  "QZWrJKalV1o?si=Gk8WQP3QFBetSaPr",
  "vdtDyAevSU0?si=q2KLEBiv3ZTeD7bD",
  "mnOrDCSr2XA?si=65uQY-ll6BGXl1fD",
  "lJyxWQPHotw?si=kQOjx_02DO3A0ufA",
];
let currentVideo = Math.floor(videosList.length * Math.random());
videoFrame.setAttribute(
  "src",
  `https://www.youtube.com/embed/` + `${videosList[currentVideo]}`
);
let cookiesPageClassList = cookiesPage.classList;
const btn = document.querySelectorAll("button");


if (isCookieEnabled === "true") {
  // cookiesPageClassList.add("hidden", "hidden_coockie");
  hide();
}

if (cookiesPage) {
  rejectBtn.addEventListener("click", () => {
    hide();
    console.log(`Reject All: Hide cookies`);
  });

  acceptBtn.addEventListener("click", () => {
    hide();
    console.log(`Reject All: Hide cookies`);
  });
}

function hide() {
  cookiesPageClassList.add("hidden", "hidden_coockie");
  localStorage.setItem("isCookieEnabled", "true");
}

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

function convertRGBtoHEX(rgb) {
    const rgbArr = rgb.match(/\d+/g);
    const hex = rgbArr.reduce((acc, curr) => {
        return acc + (parseInt(curr).toString(16).length < 2 ? "0" + parseInt(curr).toString(16) : parseInt(curr).toString(16));
    }, "#");
    return hex;
    
}
btn.forEach((el, id, arr) => {
  const defaultBcgColor = el.style.backgroundColor;
  
  el.addEventListener("pointerover", (event) => {
    const btnElement = event.target;
    const bcgColor = convertRGBtoHEX(getComputedStyle(btnElement).backgroundColor);
    // console.log(bcgColor);
    switch (bcgColor) {
      case "#ff3c00":
        btnElement.style.backgroundColor = "#ef901a";
        break;
      case "#323232":
        btnElement.style.backgroundColor = "#29b0e3";
        break;
      case "#f0f0f0":
        btnElement.style.backgroundColor = "#91d3d3";
        break;
      case "#ffffff0004":
        btnElement.style.backgroundColor = "#fcfcfc00194";
        break;
        case "#ffffff":
        btnElement.style.backgroundColor = "#8c8c8c";
        break;
      case "#324fbe":
        btnElement.style.backgroundColor = "#323c81";
        break;
    }
    // console.log("Hover");
  });

  el.addEventListener("pointerout", (event) => {
    const btnElement = event.target;
    btnElement.style.backgroundColor = defaultBcgColor;
    // console.log("Out");
  });
})
