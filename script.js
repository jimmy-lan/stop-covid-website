// Selectors
const bodyElement = document.querySelector("body");
const faceElements = document.querySelectorAll("div.face");

// Eye ball following
bodyElement.addEventListener("mousemove", (event) => {
  const eyeBalls = document.querySelectorAll(".eye");
  eyeBalls.forEach((eyeBall) => {
    const { left, top } = eyeBall.getBoundingClientRect();
    const width = eyeBall.clientWidth;
    const height = eyeBall.clientHeight;
    const x = left + width / 2;
    const y = top + height / 2;
    const radian = Math.atan2(event.pageX - x, event.pageY - y);
    const rotate = radian * (180 / Math.PI) * -1 + 270;
    eyeBall.style.transform = `rotate(${rotate}deg)`;
  });
});

// Scared faces on hover
faceElements.forEach((faceElement) => {
  faceElement.addEventListener("mouseenter", () => {
    faceElements.forEach((el) => {
      if (el !== faceElement) {
        el.classList.add("scared");
      }
    });
  });
  faceElement.addEventListener("mouseleave", () => {
    faceElements.forEach((el) => {
      el.classList.remove("scared");
    });
  });
});
