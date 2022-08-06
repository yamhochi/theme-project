//WIP
//contrast checker
// 0 - 255 ;
let R = 1
let G = 1
let B = 1

// Y = luminance
let text_Y = (((R/255)**2.4)*0.2126)+(((G/255)**2.4)*0.7152) + (((B/255)**2.4)*0.0722)

let white_BG = (((255/255)^2.4)*0.2126) + (((255/255)^2.4)*0.7152) + (((255/255)^2.4)*0.0722)




// Determine if Ytext or Ybackground is brighter (higher luminance, for contrast polarity)

// if(Y<0.022){

// }              