import { scale } from "./scale.js";
//get Hue of input
import { LCH } from './index.js'

//generate 6 equally spaced hues
// let h = HSL[0]
var l = LCH.l;
var c = LCH.c;
var h = LCH.h;

// if(c>132){
//     c=132
// }

//how many hues you want to generate?
var hues = 12
//how many degrees to increase
var degrees = 360/hues

let i=1;
let hn=h;
const hue_array = []
while(i<=hues){
    hue_array.push(hn.toFixed(2))
    hn=hn+degrees
    if(hn>360){
        hn=hn-360
    }   
    i = i+1
}

//get the parent div you want to create into
const col = document.getElementsByClassName("col")
hue_array.forEach(function(value){
    

    // create the row element for each hue
    const row = document.createElement("div");
    row.className = "row hues";
    row.style.backgroundColor = "#fffff0";
    row.innerHTML="<span classname=\"metadata\" style= \"width:200px\">h"+value+" , c"+c+", l"+l+"</span>"

    //now add the cells created into the row
    const cells = scale(l,c,value)
    cells.forEach(function(value){
        // console.log(value)
        row.appendChild(value)
    })
    
    // row.append(slider)
    //finally add it to the document    
    col[0].appendChild(row)

    
})
