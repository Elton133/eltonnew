/*document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".destination-container");
  container.classList.add("reveal");
});*/

document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");

  let currentIndex = 0;

  function showNextSection() {
    sections[currentIndex].classList.remove("visible");
    currentIndex = (currentIndex + 1) % sections.length;
    sections[currentIndex].classList.add("visible");
  }
  sections[currentIndex].classList.add("visible");

  setInterval(showNextSection, 10000);
});

document.addEventListener("DOMContentLoaded", function () {
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const image3 = document.getElementById("image3");

  image1.addEventListener("click", function () {
    this.style.flex = "3";
    image2.style.flex = "1";
    image3.style.flex = "1";
    image4.style.flex = "1";
    image5.style.flex = "1";
  });

  image2.addEventListener("click", function () {
    this.style.flex = "3";
    image1.style.flex = "1";
    image3.style.flex = "1";
    image4.style.flex = "1";
    image5.style.flex = "1";
  });

  image3.addEventListener("click", function () {
    this.style.flex = "3";
    image1.style.flex = "1";
    image2.style.flex = "1";
    image4.style.flex = "1";
    image5.style.flex = "1";
  });

  image4.addEventListener("click", function () {
    this.style.flex = "3";
    image1.style.flex = "1";
    image2.style.flex = "1";
    image3.style.flex = "1";
    image5.style.flex = "1";
  });

  image5.addEventListener("click", function () {
    this.style.flex = "3";
    image1.style.flex = "1";
    image2.style.flex = "1";
    image3.style.flex = "1";
    image4.style.flex = "1";
  });
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

function showDetails(regionId) {
  const details = document.getElementById("details");
  let regionDetails;

  switch (regionId) {
    case "greater-accra":
      regionDetails = "Details and tourist sites of region Greater-Accra";
      break;
    case "ashanti":
      regionDetails = "Details and tourist sites of region Ashanti";
      break;
    case "western":
      regionDetails = "Details and tourist sites of region Western";
      break;
    case "eastern":
      regionDetails = "Details and tourist sites of region Eastern";
      break;
    case "northern":
      regionDetails = "Details and tourist sites of region Northern";
      break;
    case "upper-west":
      regionDetails = "Details and tourist sites of region Upper-West";
      break;
    case "upper-east":
      regionDetails = "Details and tourist sites of region Upper-East";
      break;
    case "central":
      regionDetails = "Details and tourist sites of region Central";
      break;
    case "volta":
      regionDetails = "Details and tourist sites of region Volta";
      break;
    case "bono":
      regionDetails = "Details and tourist sites of region Bono";
      break;
    case "bono-east":
      regionDetails = "Details and tourist sites of region Bono-east";
      break;
    case "ahafo":
      regionDetails = "Details and tourist sites of region Ahafo";
      break;
    case "western-north":
      regionDetails = "Details and tourist sites of region Western-North";
      break;
    case "oti":
      regionDetails = "Details and tourist sites of region Oti";
      break;
    case "north-east":
      regionDetails = "Details and tourist sites of region North-East";
      break;
    case "savannah":
      regionDetails = "Details and tourist sites of region Savannah";
      break;

    default:
      regionDetails = "Select a region to see details";
  }
  details.textContent = regionDetails;
}

document.addEventListener("DOMContentLoaded", function () {
  const mapContainer = document.querySelector(".map-container");

  mapContainer.addEventListener("wheel", function (event) {
    event.preventDefault();
    mapContainer.scrollLeft += event.deltaY;
  });
});
