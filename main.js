import './public/style.css'
import javascriptLogo from './javascript.svg'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import {topfunction} from './public/topfunction.js'
import {startCountdown} from "./public/CountdownTimer.js";

const upBtn = document.getElementById("up-btn")

 topfunction(upBtn) 
 const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
 startCountdown(targetDate, "countdown-timer");