const player = new Plyr("video");

document.querySelector(".plyr.plyr--full-ui.plyr--video").addEventListener("mouseenter", showControls);
document.querySelector(".plyr.plyr--full-ui.plyr--video").addEventListener("mouseleave", hideControls);

const controls = document.querySelector(".plyr__controls");
controls.style.bottom = "-50px";

function showControls() {
   controls.style.bottom = "0";
}

function hideControls() {
   controls.style.bottom = "-50px";
}
