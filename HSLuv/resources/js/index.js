import {WCAG_ratio} from "./WCAG.js"
import pkg from '../../node_modules/hsluv/hsluv.js';
const {rgbToHsluv} = pkg;

// this is where you input the value
// let BIT_R = 15;
// let BIT_G = 122;
// let BIT_B = 199;
//tm
let BIT_R = 255;
let BIT_G = 56;
let BIT_B = 56;

const HSL = rgbToHsluv([BIT_R/255, BIT_G/255, BIT_B/255])

var source = document.getElementsByClassName("source_colour");
const contrast = WCAG_ratio(BIT_R, BIT_G, BIT_B).toFixed(2);
source[0].style.backgroundColor="rgb(" + BIT_R + "," + BIT_G + "," + BIT_B + ")";
source[0].innerHTML=contrast + "</br>" + HSL[0]

export {HSL} // potentially just export HCL to scales.js
