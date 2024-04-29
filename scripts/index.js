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
