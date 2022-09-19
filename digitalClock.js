export function digitalClock(reloj, btnRelojStart, btnRelojStop) {
  let timer;
  const d = document
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnRelojStart)) {
      timer = setInterval(() => {
        let time = new Date().toLocaleTimeString();
        d.querySelector(reloj).textContent = time;
      }, 1000);
      d.querySelector(btnRelojStart).setAttribute("disabled", true);
      d.querySelector(btnRelojStop).removeAttribute("disabled");
    }

    if (e.target.matches(btnRelojStop)) {
      clearInterval(timer);
      d.querySelector(btnRelojStop).setAttribute("disabled", true);
      d.querySelector(btnRelojStart).removeAttribute("disabled");
    }
  });
}