
import { WCAG_ratio } from "./WCAG.js"
import { generate_hues } from "./hue.js";
import { update_scale } from "./scale.js";
import { converter, formatHex } from '../../node_modules/culori/src/index.js'

// this is where you input the value

const hex_form = document.getElementById("input-base-hex");
let input_hex, number_hues;

var result = hex_form.addEventListener('submit', (event) => {

    // handle the form data
    event.preventDefault();
    input_hex = hex_form.elements["hex"].value;
    number_hues = hex_form.elements["hue_no"].value;

    //start here
    //grab the oklch, rgb converter from culori
    let oklch = converter('oklch');
    let rgb = converter('rgb')

    //create the LCH values for generating scales
    var LCH = oklch(input_hex);

    //create the RGB values for WCAG and display
    var RGB = rgb(input_hex);
    // console.log(RGB)

    var source = document.getElementsByClassName("source_colour");
    var contrast = WCAG_ratio(255 * RGB.r, 255 * RGB.g, 255 * RGB.b).toFixed(2);
    source[0].style.backgroundColor = "rgb(" + 255 * RGB.r + "," + 255 * RGB.g + "," + 255 * RGB.b + ")";
    source[0].innerHTML = contrast


    // Finally, use the LCH value from here and define how many hues to generate
    generate_hues(LCH, number_hues)

    //Get all the sliders
    var sliders = document.getElementsByClassName("slider");
    //the obj.keys method is to ensure we only return slider objects
    var slider_keys = Object.keys(sliders)
    // console.log(loop)
    // slider_keys is an array of [0,1,2]. This loops through each slider
    slider_keys.forEach(function (value, key) {
        sliders[key].oninput = function () {
            var parent = sliders[key].parentElement
            var l = parent.getAttribute('data-l')
            var c = parent.getAttribute('data-c')
            var h = this.value
            var id = parent.getAttribute('id')
            
            // 
            
            // console.log(sliders[key], this.value, id);
            update_scale(l, c, h, id)
            parent.getElementsByClassName("metadata")[0].innerHTML = 
            "H"+h+"</br>"+
            "C"+c+"</br>"+
            "L"+l

        }
    })





});


