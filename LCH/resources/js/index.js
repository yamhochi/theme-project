import {WCAG_ratio} from "./WCAG.js"
import pkg from '../../node_modules/hsluv/hsluv.js';
const {rgbToHsluv, rgbToLch, hsluvToLch} = pkg;

// this is where you input the value
// let BIT_R = 15;
// let BIT_G = 122;
// let BIT_B = 199;
//tm
let BIT_R = 255;
let BIT_G = 56;
let BIT_B = 56;

const HSLUV = rgbToHsluv([BIT_R/255, BIT_G/255, BIT_B/255])
const LCH = hsluvToLch([HSLUV[0], HSLUV[1], HSLUV[2]])
const LCH2 = rgbToLch([BIT_R/255, BIT_G/255, BIT_B/255])
// console.log(HSLUV, LCH, LCH2)

var source = document.getElementsByClassName("source_colour");
const contrast = WCAG_ratio(BIT_R, BIT_G, BIT_B).toFixed(2);
source[0].style.backgroundColor="rgb(" + BIT_R + "," + BIT_G + "," + BIT_B + ")";
source[0].innerHTML=contrast + "</br>" + LCH[2]

export {LCH} // potentially just export HCL to scales.js
