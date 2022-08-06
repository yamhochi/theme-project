import {convertOklabToRgb, convertLchToLab}  from '../../node_modules/culori/src/index.js'

// const hex = formatHex({ mode: 'oklch', l: 10.652770087596105, c: 0.23324626498072495, h: 26.62});
// color({mode: 'oklch', l:10.65277008759610, c: 0.23324626498072495, h: 26.62})

// convertOklabToRgb(color) 
const ok_l = 20.652770087596105
const ok_c = 0.23324626498072495
const ok_h = 26.62*0.0174533 // converts to radians

const ok_a= ok_c*Math.cos(ok_h)
const ok_b= ok_c*Math.sin(ok_h)

console.log('lab', 'a', ok_a , 'b' , ok_b)


const y = convertLchToLab({ l: 0.752770087596105, c: 0.23324626498072495, h: 26.62, mode: 'lch'})
// const x = convertOklabToRgb({ l: y.l, a: y.a, b: y.b, mode: 'oklab'})
const x = convertOklabToRgb({ l: y.l, a: y.a, b: y.b, mode: 'oklab'})
console.log(y)
console.log(x)

// lab a 0.2085216467576428 b 0.10451097052912389
// {
//   mode: 'lab',
//   l: 10.652770087596105,
//   a: 0.20852166756777005,
//   b: 0.1045109290084772
// }
// {
//   mode: 'rgb',
//   r: 21.378644228214597,
//   g: 19.86816956339082,
//   b: 19.66818863988187
// }