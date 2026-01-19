const hamburger = document.getElementById("hamburger");

hamburger.onclick = (e) => addClassToElement(e, "open");

const addClassToElement = (e, className) => {
  const classList = Array.from(hamburger.classList);
  const classIndex = classList.findIndex((c) => c === className);
  if (classIndex === -1) {
    hamburger.classList.add(className);
  } else {
    hamburger.classList.remove(className);
  }
};
