import { WCAG_ratio } from './WCAG.js';
import pkg from '../../node_modules/hsluv/hsluv.js';
const { lchToRgb } = pkg;

// **** Step 2 **** //
//using the master HSL, find the scale based on that colour's L value

export function scale(l, c, h) {

    const array_Ln = []
    let i = 0
    var Ln = l

    //how many?
    let steps = 12 

    //what's the max luminmance?
    let max_luminance = 100
    let stepper = max_luminance/steps

    console.log(stepper)
    while(i<steps){
        array_Ln.push(Ln)
        Ln = Ln + stepper
        if(Ln>max_luminance){
            Ln=Ln-max_luminance
        }
        i=i+1
    }

    // while(Ln<100 & i<10){
    //     array_Ln.push(Ln)
    //     Ln = Ln + 10
    //     if(Ln > 100){
    //         Ln=Ln-100
    //     }
    //     i=i+1
    // }

    array_Ln.sort((a, b) => a - b);
    console.log(array_Ln)

    let item
    let scales = []
    //create an object for each with step:100, hsluv:[], rgb:[r,g,b], wcagratio:num
    for (item of array_Ln) {
        const each_cell_object = {
            lch: [item, c, h],
            rgb: lchToRgb([item, c, h]) //returns a % value
        }
        scales.push(each_cell_object)
        console.log(each_cell_object)
    }

    // const row_hues = document.getElementsByClassName("hues") replace with
    const row_hues=[]
    
    let rgb, r, g, b, contrast
    scales.forEach(function (value, key) {
        // need to convert the rgbs to css rgb (0-255)
        // r = value.rgb[0] * 255;
        // g = value.rgb[1] * 255;
        // b = value.rgb[2] * 255;

        // r = value.rgb[0] * 255 < 0 ? 0 : value.rgb[0] * 255;
        // g = value.rgb[1] * 255 < 0 ? 0 : value.rgb[1] * 255;
        // b = value.rgb[2] * 255 < 0 ? 0 : value.rgb[2] * 255;

        r = value.rgb[0] * 255 < 0 ? 0 : value.rgb[0] * 255 > 255 ? 255 : value.rgb[0]*255
        g = value.rgb[1] * 255 < 0 ? 0 : value.rgb[1] * 255 > 255 ? 255 : value.rgb[1]*255
        b = value.rgb[2] * 255 < 0 ? 0 : value.rgb[2] * 255 > 255 ? 255 : value.rgb[2]*255
        
        rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        console.log(rgb)

        //find the contrast
        contrast = WCAG_ratio(r, g, b).toFixed(2);

        // create the cell element
        const cell = document.createElement("div");
        cell.className = "cell spread";
        cell.style.backgroundColor = rgb;
        cell.innerHTML = contrast;
        // row_hues[0].appendChild(cell) replace with
        row_hues.push(cell)
    })
    // console.log(row_hues)
    return(row_hues)
}
