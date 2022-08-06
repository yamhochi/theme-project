import { scale } from "./scale.js";

export function generate_hues(LCH, number_of_hues) {
    // let h = HSL[0]
    var l = LCH.l;
    var c = LCH.c;
    var h = LCH.h;

    //how many hues you want to generate?
    var hues = number_of_hues
    //how many degrees to increase
    var degrees = 360 / hues
    let i = 1;
    let hn = h;
    const hue_array = []
    while (i <= hues) {
        hue_array.push(hn.toFixed(2))
        hn = hn + degrees
        if (hn > 360) {
            hn = hn - 360
        }
        i = i + 1
    }

    //get the parent div you want to create into
    const col = document.getElementsByClassName("col");
    const y = document.getElementsByClassName("hues_container");
    //determine if this element already has stuff in it;
    if(y[0] !== undefined){
        //already has stuff
        console.log("already has stuff, drop it")
        y[0].remove()
    }else{
        console.log("ok safe to proceed")
    }
    var x = col[0]
    // console.log(y[0])
    const hues_container = document.createElement("div");
    hues_container.className = "hues_container";
    
    console.log("huearray", hue_array)
    hue_array.forEach(function (key, value) {
        console.log(key, value)
        // create the row element for each hue
        const row = document.createElement("div");
        row.className = "row hues";
        row.id=value
        row.innerHTML = "<span classname=\"metadata\" style= \"width:200px\">h" + value + " , c" + c + ", l" + l + "</span>"

        //now add the cells created into the row
        var cells = scale(l, c, key)
        cells.forEach(function (value) {
            // console.log(value)
            row.appendChild(value)
        })


        //create the slider
        const hue_slider = document.createElement("input");
        hue_slider.type = "range";
        hue_slider.min = "0";
        hue_slider.max = "360";
        hue_slider.value = key;
        hue_slider.id = value;
        row.append(hue_slider)

        //finally add it to the document  
        hues_container.appendChild(row);
        col[0].appendChild(hues_container);
    })   

}

//hue slider
//get the div with the same value
//get the hcl value of 