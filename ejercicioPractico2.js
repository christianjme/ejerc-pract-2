import {digitalClock} from "./digitalClock.js"
import {alarm} from "./alarm.js"

addEventListener("DOMContentLoaded", (e) => {
  digitalClock("#reloj", "#reloj-start", "#reloj-stop");
  alarm("./alarma.mp3", "#alarm-start", "#alarm-stop")
});