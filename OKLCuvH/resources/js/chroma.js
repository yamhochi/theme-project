import {converter, convertOklabToRgb, convertLchToLab}  from '../../node_modules/culori/src/index.js'

//make my life easier pls
export function okLchToRgb(l,c,h){
    //first convert oklch to oklab
    let oklab = convertLchToLab({ l: l, c: c, h: h, mode: 'lch'})
    //then convert oklab to rgb
    let rgb =  convertOklabToRgb({ l: oklab.l, a: oklab.a, b: oklab.b, mode: 'oklab'})
    return rgb    
}


export function chroma_range(l,c,h){

        // test values
        //OKlch c is beteween (0-0.322) 
        // let l = 0.752770087596105;
        // let c = 0.23324626498072495; 
        // let h = 26.62;
        let min, max
        let min_ci = 0
        let max_ci = c //0.322

        //while the okcmin is not found:
        while(min == undefined){
            
            // keep doing this
            let rgb = okLchToRgb(l,min_ci,h);
            // console.log(rgb)
            // is rgb in range (0-255)?
            if(rgb.r > 255.00 || rgb.g > 255.00 || rgb.b > 255.00){
                // console.log("min too high")
                min_ci = min_ci + 0.001
            } else if (rgb.r < 0 || rgb.g < 0 || rgb.b < 0){
                // console.log("min has negative")
                min_ci = min_ci + 0.001
            } else { 
                
                min = min_ci
                // console.log( min_ci, min,  "min is found")
            }
        }

        //while the okcmax is not found:
        while(max == undefined){

            // keep doing this
            let rgb = okLchToRgb(l,max_ci,h);

            // is rgb in range (0-255)?
            if(rgb.r > 255 || rgb.g > 255 || rgb.b > 255){
                // console.log("max too high")
                max_ci = max_ci - 0.001
            } else if (rgb.r < 0 || rgb.g < 0 || rgb.b < 0){
                // console.log("max has negative")
                max_ci = max_ci - 0.001
            } else { 
                // console.log("max is found")
                max = max_ci
            }
        }
    
        // console.log("here", min, ok_c_max)
        return {min, max} ; 
        
}

