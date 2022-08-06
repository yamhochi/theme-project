
import { WCAG_ratio } from "./WCAG.js"
import { generate_hues } from "./hue.js";
import { converter, formatHex } from '../../node_modules/culori/src/index.js'

// this is where you input the value

const hex_form = document.getElementById("input-base-hex");
let input_hex;

hex_form.addEventListener('submit', (event) => {

    // handle the form data
    event.preventDefault();
    input_hex = hex_form.elements["hex"].value;
    
    //start here
    //grab the oklch, rgb converter from culori
    let oklch = converter('oklch');
    let rgb = converter('rgb')

    //create the LCH values for generating scales
    var LCH = oklch(input_hex);

    //create the RGB values for WCAG and display
    var RGB = rgb(input_hex);
    console.log(RGB)

    var source = document.getElementsByClassName("source_colour");
    var contrast = WCAG_ratio(255*RGB.r, 255*RGB.g, 255*RGB.b).toFixed(2);
    source[0].style.backgroundColor = "rgb(" + 255*RGB.r + "," + 255*RGB.g + "," + 255*RGB.b + ")";
    source[0].innerHTML = contrast

    
    // Finally, use the LCH value from here and define how many hues to generate
    generate_hues(LCH, 3)

});

//slider event listener{}








