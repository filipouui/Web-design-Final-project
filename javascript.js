const tl = gsap.timeline(); 
tl.to(".kartica-slika", { duration: 1, x: -45 })
  .to(".kartica-slika", { duration: 1, backgroundColor: "#f38630" }, "+=0.5") 
  .to(".kartica-slika", { duration: 1, x: 0, rotation: -360, stagger: 2 }, "+=0.5")