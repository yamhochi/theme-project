import { WCAG_ratio } from './WCAG.js';
import { okLchToRgb ,chroma_range } from './chroma.js';
import {converter, convertOklabToRgb, convertLchToLab}  from '../../node_modules/culori/src/index.js'

// **** Step 2 **** //
//using the master HSL, find the scale based on that colour's L value

export function scale(l, c, h) {
    console.log(l,c,h,"scales.js")
    //what is the c% for this initial colour? 
    // cproportion is c-cmin/cmax-cmin
    var crange = chroma_range(l, 0.322, h);
    if(c > crange.max){
        c = crange.max;
    }else if (c< crange.min){
        c = crange.min
    }     
    var c_proportion = (c-crange.min)/(crange.max-crange.min)
    // console.log("this", c_proportion, crange.max, crange.min,c)

    //setup your luminance array
    var array_Ln = []
    let i = 0
    var Ln = l

    //how many?
    let steps = 12

    //what's the max luminmance?
    let max_luminance = 0.99
    let stepper = max_luminance/steps

    // console.log(stepper)
    while(i<steps){
        array_Ln.push(Ln)
        Ln = Ln + stepper
        if(Ln>max_luminance){
            Ln=Ln-max_luminance
        }
        i=i+1
    }

    //the lightness scale object (ie. 0.xxx, 1.xxx, 2.xxx)
    array_Ln.sort((a, b) => a - b);
    let item
    let scales = []

    //create an object for each with step:100, hsluv:[], rgb:[r,g,b], wcagratio:num
    for (item of array_Ln) {

        
        // For itemL of array_Ln        
        var item_crange = chroma_range(item, 0.322, h)
        // returns a min and max
        // this means that the Citem of this item is
        // C%(is a value from 0-1)*(Cmax-Cmin)   +    Cmin
        var item_c = item_crange.min + c_proportion*(item_crange.max-item_crange.min)
        // console.log(item_c)


        //convert to RGB
        var converted_rgb = okLchToRgb(item, item_c, h)
        // const oklab = convertLchToLab({ l: item, c: c, h: h, mode: 'lch'})
        // const converted_rgb = convertOklabToRgb({ l: oklab.l, a: oklab.a, b: oklab.b, mode: 'oklab'})

        var each_cell_object = {
            lch: [item, c, h],
            rgb: [converted_rgb.r, converted_rgb.g, converted_rgb.b] 
        }
        scales.push(each_cell_object)
        // console.log(each_cell_object.rgb)
    }

    // const row_hues = document.getElementsByClassName("hues") replace with
    var row_hues=[]
    
    let rgb, r, g, b, contrast
    scales.forEach(function (value, key) {
 
        r = value.rgb[0] * 255
        g = value.rgb[1] * 255
        b = value.rgb[2] * 255
        
        // need to convert the rgbs to css rgb (0-255)
        // r = value.rgb[0] * 255 < 0 ? 0 : value.rgb[0] * 255 > 255 ? 255 : value.rgb[0]*255
        // g = value.rgb[1] * 255 < 0 ? 0 : value.rgb[1] * 255 > 255 ? 255 : value.rgb[1]*255
        // b = value.rgb[2] * 255 < 0 ? 0 : value.rgb[2] * 255 > 255 ? 255 : value.rgb[2]*255

        rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        // console.log(rgb)

        //find the contrast
        contrast = WCAG_ratio(r, g, b).toFixed(2);

        // create the cell element
        var cell = document.createElement("div");
        cell.className = "cell spread";
        cell.style.backgroundColor = rgb;
        cell.innerHTML = contrast;
        row_hues.push(cell)
    })
    // console.log(row_hues)
    return(row_hues)
}

