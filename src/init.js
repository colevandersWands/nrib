import { init as initShare } from "./shareon.js";

const urlFromCode = (code = "") =>
  `https://res.cloudinary.com/dmbutdgsi/${decodeURIComponent(atob(code))}.png`;

const imgSrc = urlFromCode(
  new URLSearchParams(window.location.search).get("you")
);

document.getElementById("fake-download").src = imgSrc;

initShare(imgSrc);
