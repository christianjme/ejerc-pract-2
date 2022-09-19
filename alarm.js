export function alarm(alarm, alarmStart, alarmStop) {
  const d = document
  const audioHTML = document.createElement('audio')
  audioHTML.setAttribute('src', alarm)
  d.addEventListener('click', e=>{
    if (e.target.matches(alarmStart)) {
      audioHTML.play();
      d.querySelector(alarmStart).setAttribute("disabled", true);
      d.querySelector(alarmStop).removeAttribute("disabled");
    }
    if (e.target.matches(alarmStop)) {
      audioHTML.pause();
      d.querySelector(alarmStop).setAttribute("disabled", true);
      d.querySelector(alarmStart).removeAttribute("disabled");
    }
  })
}