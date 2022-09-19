export function alarm(rutaAlarm, alarmStart, alarmStop) {
  const d = document
  const audioHTML = d.createElement('audio')
  audioHTML.setAttribute('src', rutaAlarm)
  d.addEventListener('click', e=>{
    if (e.target.matches(alarmStart)) {
      audioHTML.play();
      d.querySelector(alarmStart).setAttribute("disabled", true);
      d.querySelector(alarmStop).removeAttribute("disabled");
    }
    if (e.target.matches(alarmStop)) {
      audioHTML.pause();
      audioHTML.currentTime = 0
      d.querySelector(alarmStart).removeAttribute("disabled");
      d.querySelector(alarmStop).setAttribute("disabled", true);
    }
  })
}