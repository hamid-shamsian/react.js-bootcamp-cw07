const player = new Plyr("audio");
const playerControls = document.querySelector(".plyr__controls");

const ffSVG =
   '<svg class="ffsvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m5.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"/></svg>';
const rwSVG =
   '<svg class="rwsvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81zm1.66-3.25l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07a1 1 0 0 0 0 1.64z"/></svg>';

const audioTag = document.querySelector("audio");
audioTag.addEventListener("loadedmetadata", () => {
   const minute = Math.floor(audioTag.duration / 60);
   const second = Math.floor(audioTag.duration % 60);
   playerControls.insertAdjacentHTML("beforeend", `<span class="total-time">0${minute}:${second}</span>`);
});

playerControls.insertAdjacentHTML("beforeend", rwSVG);
playerControls.insertAdjacentHTML("beforeend", ffSVG);

document.querySelector(".rwsvg").addEventListener("click", () => (audioTag.currentTime -= 10));
document.querySelector(".ffsvg").addEventListener("click", () => (audioTag.currentTime += 10));
