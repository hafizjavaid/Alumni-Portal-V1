const menue = document.querySelectorAll(".menue .member");
console.log(menue);
menue.forEach(item => {
  item.addEventListener("click", () => {
    var current = document.querySelectorAll(".active");
    current[0].classList.remove("active");
    item.classList.add("active");
  });
});

const menueOpen = document.querySelector(".open");
const menueClose = document.querySelector(".close");

menueOpen.addEventListener("click", e => {
  menueOpen.style.display = "none";
  menueClose.style.display = "block";
  const nav = document.querySelector("header nav");
  nav.classList.add("show");
});
menueClose.addEventListener("click", e => {
  menueClose.style.display = "none";
  menueOpen.style.display = "block";
  console.log(menueOpen);
  const nav = document.querySelector("header nav");
  nav.classList.remove("show");
});
function displayWindowSize() {
  // Get width and height of the window excluding scrollbars
  var w = document.documentElement.clientWidth;

  // Display result inside a div element
  // document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;
  if (w > 990) {
    const menu = document.querySelector(".menue-toggle");
    menueClose.style.display = "none";
    menueOpen.style.display = "none";
  } else {
    menueOpen.style.display = "block";
  }
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();

// upload File Content

// document.querySelectorAll(".file-upload--button").forEach((button,e) => {
//   // e.preventDefault();
//   const hiddenInput = button.parentElement.querySelector(".file-upload--input");
//   console.log(hiddenInput);
//   const label = button.parentElement.querySelector(".file-upload--label");
//   const defaultText = "No File Selected";
//   label.textContent = defaultText;
//   button.addEventListener("click", () => {
//     hiddenInput.click();
//   });
//   hiddenInput.addEventListener("change", () => {
//     //   console.log(hiddenInput.files);
//     const fileList = Array.from(hiddenInput.files).map(file => file.name);
//     console.log(fileList);
//     label.textContent = fileList || defaultText;
//   });
// });

// const submit = document.querySelector(".submit");
// submit.addEventListener("submit", e => {
//   e.preventDefault();
// });

// ----------------- Loading Animation
// preloader
window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

// ----------------- Animated Heart
const openHeart = document.querySelector(".openn");
const closeHeart = document.querySelector(".closee");

openHeart.addEventListener("click", () => {
  openHeart.style.display = "none";
  closeHeart.style.display = "block";
  closeHeart.classList.add("red");
});
closeHeart.addEventListener("click", () => {
  openHeart.style.display = "block";
  closeHeart.style.display = "none";
  closeHeart.classList.remove("red");
});
