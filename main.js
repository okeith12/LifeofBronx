// NAV CHANGE
const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = { rootMargin: "-200px 0px 0px 0px" };

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else if (
      entry.isIntersecting &&
      header.classList.contains("nav-scrolled")
    ) {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
