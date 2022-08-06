import { scale } from "./scale.js";
//get Hue of input
import { HSL } from './index.js'

//generate 6 equally spaced hues
// let h = HSL[0]
var h = HSL[0];
var s = HSL[1];
var l = HSL[2];

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
    // var slider = "<input type=\"range\" min=\"1\" max=\"100\" value=\"50\">"
    row.innerHTML="<span style= \"width:60px\">"+value+"</span>"

    //now add the cells created into the row
    const cells = scale(value,s,l)
    cells.forEach(function(value){
        // console.log(value)
        row.appendChild(value)
    })
    
    // row.append(slider)
    //finally add it to the document    
    col[0].appendChild(row)

    
})
