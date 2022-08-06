import {chroma_range} from "./chroma.js"

// test values
        // OKlch c is beteween (0-0.322) 
        let l = 0.752770087596105;
        let c = 0.23324626498072495; 
        let h = 26.62;

        const results = (chroma_range(l,0.322, h))
        console.log(results.ok_c_min)