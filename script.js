const cursor = document.querySelector(".followCursor");
const body = document.querySelector("body");
const openMenuIcon = document.querySelector(".ri-menu-3-line");
const closeMenuIcon = document.querySelector(".ri-close-large-fill");
const allMenu = document.querySelector(".menu");

body.addEventListener("mousemove", (duts) => {
  gsap.to(cursor, {
    x: duts.x,
    y: duts.y,
    duration: 0.2
  });
});

let tl = gsap.timeline();

tl.from("header", {
  y: -100,
  opacity: 0,
  duration: 1
});
tl.from("ul a", {
  y: -50,
  opacity: 0,
  stagger: 0.2
});

openMenuIcon.addEventListener("click", () => {
  gsap.from(allMenu, {
    x: "100%",
    duration: 1
  });

  allMenu.style.display = "block";
  closeMenuIcon.style.display = "block";
  openMenuIcon.style.display = "none";

  gsap.from(closeMenuIcon, {
    x: "10rem",
    duration: 1,
    rotate: 360
  });
});

closeMenuIcon.addEventListener("click", () => {
  tl.to(allMenu, {
    x: "100%",
    duration: 1
  });

  allMenu.style.display = "block";
  closeMenuIcon.style.display = "none";
  openMenuIcon.style.display = "block";

  tl.to(closeMenuIcon, {
    x: "10rem",
    rotate: 360
  });
  tl.from(openMenuIcon, {
    x: "10rem",
    rotate: 360
  });
});

function splitChar() {
  const textVal = document.querySelector(".main h2").textContent;

  const splitArray = textVal.split("");
  const getHalfChar = Math.floor(splitArray.length / 2);
  let charSet = "";
  splitArray.forEach((i, index) => {
    if (splitArray[index] === " ") {
      charSet += " ";
    } else if (index < getHalfChar) {
      charSet += `<span class="halfLeftSapn">${i}</span>`;
    } else {
      charSet += `<span class="halfRightSapn">${i}</span>`;
    }
  });
  document.querySelector(".main h2").innerHTML = charSet;
}
splitChar();

gsap.from(".main h2 .halfLeftSapn", {
  y: 80,
  scale: 2,
  opacity: 0,
  stagger: 0.1
});
gsap.from(".main h2 .halfRightSapn", {
  y: 80,
  scale: 2,
  opacity: 0,
  stagger: -0.1 // reverse
});
