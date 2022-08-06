import {BIT_R, BIT_G, BIT_B} from "./index.js"
import pkg from '../../node_modules/hsluv/hsluv.js';
const {rgbToHsluv} = pkg;

// **** Step 1 **** //
//this step converts the inputted rgb into the desired colour space, which we need it to generate the scales in step 2
console.log("foo")
//TODO convert this to function

//for now we are using the HSLUV colour space
let SRGB_R = BIT_R/255;
let SRGB_G = BIT_G/255;
let SRGB_B = BIT_B/255;

const HSL = rgbToHsluv([SRGB_R, SRGB_G, SRGB_B])

export {HSL}
