setTimeout(function () {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
}, 10000);

document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");

  let currentIndex = 0;

  function showNextSection() {
    section[currentIndex].classList.remove("visible");
    currentIndex = (currentIndex + 1) % sections.length;
    sections[currentIndex].classList.add("visible");
  }
  section[currentIndex].classList.add("visible");

  setInterval(showNextSection, 10000);
});

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about-section");
  const missionStatement = document.getElementById("mission-statement");
  const teamSection = document.getElementById("team-section");

  aboutSection.addEventListener("click", function () {
    this.style.flex = "3";
    missionStatement.style.flex = "1";
    teamSection.style.flex = "1";
  });

  missionStatement.addEventListener("click", function () {
    this.style.flex = "3";
    aboutSection.style.flex = "1";
    teamSection.style.flex = "1";
  });

  teamSection.addEventListener("click", function () {
    this.style.flex = "3";
    aboutSection.style.flex = "1";
    missionStatement.style.flex = "1";
  });
});
