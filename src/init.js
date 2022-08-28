import initShare from "./shareon.js";

// atob so it looks even more cryptic, not for security
const imgSrc = `https://res.cloudinary.com/dmbutdgsi/${decodeURIComponent(
  atob(new URLSearchParams(window.location.search).get("you"))
)}.png`;

document.getElementById("fake-download").src = imgSrc;

initShare(imgSrc);
