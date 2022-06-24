const darkToggle = () => {
  document.body.classList.toggle("dark");
};

let toggle = (e) => {
  console.log(e.currentTarget);
  e.currentTarget.parentElement.classList.toggle("text-emerald-500");
  e.currentTarget.querySelector(".plus").classList.toggle("hidden");
  e.currentTarget.querySelector(".minus").classList.toggle("hidden");
  e.currentTarget.parentElement.querySelector("ul").classList.toggle("!block");
};

document.querySelectorAll("#sideList .hasDrop button").forEach((element) => {
  element.addEventListener("click", toggle);
});

document.querySelector("#sideNavTog").addEventListener("click", () => {
  document.querySelector("#sideBar").classList.toggle("-top-full");
  document.querySelector("#sideBar").classList.toggle("top-0");
  document.querySelector("#sideBar").classList.toggle("opacity-0");
  if (!document.querySelector("#sideBar").classList.contains("opacity-0")) {
    document
      .querySelectorAll("#sideList .hasDrop button")
      .forEach((element) => {
        element.parentElement.classList.remove("text-emerald-500");
        element.querySelector(".plus").classList.remove("hidden");
        element.querySelector(".minus").classList.add("hidden");
        element.parentElement.querySelector("ul").classList.remove("!block");
        console.log(element);
      });
  }
});
