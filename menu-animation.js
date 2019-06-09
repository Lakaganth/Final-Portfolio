const nav = document.querySelector(".nav");

document.querySelector(".menu-bar").addEventListener("click", () => {
  if (!nav.classList.contains("active")) {
    TweenMax.fromTo(nav, 0.1, { right: "1000vh" }, { right: "0" });
    nav.classList.add("active");
  }
});

document.querySelector(".menu-close").addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    TweenMax.fromTo(nav, 0.25, { right: "0" }, { right: "1000vh" });
    nav.classList.remove("active");
  }
});

let tl = new TimelineMax({ onUpdate: updatePercentage });
let tl1 = new TimelineMax({ onUpdate: updatePercentage });
let projectTL = new TimelineMax({ onUpdate: updatePercentage });
let projectbox = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

tl.from(".laka-logo", 0.25, { y: 0, opacity: 1 });
tl.to(".laka-logo", 0.5, { y: -200, opacity: 0.5 });

tl1.from(".sub-head", 01, { opacity: 0.1, x: -200 });

projectTL.from(".project-scroll", 1, { x: -400, opactity: 1 });
projectTL.to(".project-scroll", 1, { x: 900, opactity: 01 });

const scene = new ScrollMagic.Scene({
  triggerElement: "header",
  triggerHook: 0,
  duration: "100%"
})
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".project-display",
  triggerHook: "onEnter",
  duration: "100%"
})

  .setTween(projectTL)
  .addTo(controller);

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
}
