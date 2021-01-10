const bodyElement = document.querySelector("body");
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
