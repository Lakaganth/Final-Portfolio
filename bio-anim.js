// let tlFirstScroll = new TimelineMax();

// tlFirstScroll
//   .set(".lap-mob-image-wrapper", {
//     scale: 0,
//     transformOrigin: " center ",
//     y: "-50%"
//   })
//   .set(".inner-lap", { x: "-5vw" })
//   .set(".inner-mob", { x: "-5vw" })
//   .to(".lap-mob-image-wrapper", 1, { scale: 0.5, y: "-50vh" })
//   .to(".lap-mob-image-wrapper", 1, {
//     scale: 1,
//     y: "-20vh"
//   });

// let controller1 = new ScrollMagic.Controller();

// let scene1 = new ScrollMagic.Scene({
//   triggerElement: ".second-page",
//   triggerHook: 0,
//   duration: "100%"
// })
//   .setTween(tlFirstScroll)
//   .setPin(".second-page")
//   .addIndicators()
//   .addTo(controller1);

// let tlSecondScroll = new TimelineMax();

// tlSecondScroll

//   .set(".second-lap-layer-1", { height: "8vh", x: "-15vw" })

//   .set(".second-lap-layer-2", {
//     height: "8vh",
//     x: "-20vw",
//     y: "15vh",
//     opacity: 1
//   })

//   .set(".second-mob-layer-1", {
//     height: "8vh",
//     y: "-15vh",
//     x: "-10vw",
//     opacity: 1
//   })

//   .set(".second-mob-layer-2", {
//     height: "8vh",
//     y: "-15vh",
//     x: "15vw",
//     opacity: 1
//   });

// let scene22 = new ScrollMagic.Scene({
//   triggerElement: ".second-page",
//   triggerHook: 0,
//   duration: "100%"
// })
//   .setTween(tlSecondScroll)
//   .setPin(".second-page")
//   .addIndicators()
//   .addTo(controller1);

function myFunction(x) {
  if (x.matches) {
    console.log("matches desktop");
    // If media query matches
    let tlFirstScroll = new TimelineMax();

    tlFirstScroll
      .set(".lap-mob-image-wrapper", {
        scale: 0,
        transformOrigin: " center ",
        y: "-50%"
      })
      .set(".inner-lap", { x: "5vw" })
      .set(".inner-mob", { x: "-5vw" })
      .to(".lap-mob-image-wrapper", 3, { scale: 0.5, y: "-50vh" })
      .to(".lap-mob-image-wrapper", 3, {
        scale: 1,
        y: "-20vh"
      });
    //   .to(".inner-lap", 1, { x: "-1.5vw" })
    //   .to(".inner-mob", 1, { x: "1.5vw" });

    let controller1 = new ScrollMagic.Controller();

    let scene1 = new ScrollMagic.Scene({
      triggerElement: ".second-page",
      triggerHook: 0,
      duration: "100%"
    })
      .setTween(tlFirstScroll)
      .addIndicators()
      .addTo(controller1);

    let tlSecondScroll = new TimelineMax();

    tlSecondScroll
      .to(".inner-lap", 2, { x: "-2vw" }, "-=2")
      .to(".inner-mob", 2, { x: "2vw" }, "-=2")
      .set(".second-lap-layer-1", { height: "10vh" })

      .to(".second-lap-layer-1", 3, { x: "-5vw", opacity: 1 }, "-=3")

      .set(".second-lap-layer-2", { height: "10vh" })
      .to(".second-lap-layer-2", 1, { x: "-15vw", opacity: 1 }, "-=1")

      .set(".second-lap-layer-3", { height: "10vh" })
      .to(".second-lap-layer-3", 1, { x: "-25vw", opacity: 1 }, "-=1")

      .set(".second-mob-layer-1", { height: "10vh", y: "-5vh" })
      .to(".second-mob-layer-1", 1, { x: "10vw", opacity: 1 }, "-=1")
      .set(".second-mob-layer-2", { height: "10vh", y: "-5vh" })
      .to(".second-mob-layer-2", 1, { x: "18vw", opacity: 1 }, "-=1");

    let scene22 = new ScrollMagic.Scene({
      triggerElement: ".second-page",
      triggerHook: 0,
      duration: "100%"
    })
      .setTween(tlSecondScroll)
      .setPin(".second-page")
      .addIndicators()
      .addTo(controller1);
  } else {
    console.log("mobile version");

    let tlFirstScroll = new TimelineMax();

    tlFirstScroll
      .set(".lap-mob-image-wrapper", {
        scale: 0,
        transformOrigin: " center ",
        y: "-50%"
      })
      .set(".inner-lap", { x: "-5vw" })
      .set(".inner-mob", { x: "-5vw" })
      .to(".lap-mob-image-wrapper", 1, { scale: 0.5, y: "-50vh" })
      .to(".lap-mob-image-wrapper", 1, {
        scale: 1,
        y: "-20vh"
      });

    let controller1 = new ScrollMagic.Controller();

    let scene1 = new ScrollMagic.Scene({
      triggerElement: ".second-page",
      triggerHook: 0,
      duration: "100%"
    })
      .setTween(tlFirstScroll)
      .setPin(".second-page")
      .addIndicators()
      .addTo(controller1);

    let tlSecondScroll = new TimelineMax();

    tlSecondScroll

      .set(".second-lap-layer-1", { height: "8vh", x: "-15vw" })

      .set(".second-lap-layer-2", {
        height: "8vh",
        x: "-20vw",
        y: "15vh",
        opacity: 1
      })

      .set(".second-mob-layer-1", {
        height: "8vh",
        y: "-15vh",
        x: "-10vw",
        opacity: 1
      })

      .set(".second-mob-layer-2", {
        height: "8vh",
        y: "-15vh",
        x: "15vw",
        opacity: 1
      });
  }
}

var x = window.matchMedia("(min-width: 800px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
