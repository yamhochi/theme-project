//simple function to calculate wcag ratio
export function WCAG_ratio(BIT_R, BIT_G, BIT_B) {
    let  R, G, B
    let SRGB_R = BIT_R / 255;
    let SRGB_G = BIT_G / 255;
    let SRGB_B = BIT_B / 255;
    // if R sRGB <= 0.03928 then R = R sRGB /12.92 else R = ((R sRGB +0.055)/1.055) ^ 2.4
    if (SRGB_R <= 0.03928) {
        R = SRGB_R / 12.92
    } else {
        R = ((SRGB_R + 0.055) / 1.055) ** 2.4

    }
    // if G sRGB <= 0.03928 then G = G sRGB /12.92 else G = ((G sRGB +0.055)/1.055) ^ 2.4
    if (SRGB_G <= 0.03928) {
        G = SRGB_G / 12.92
    } else {
        G = ((SRGB_G + 0.055) / 1.055) ** 2.4
    }

    // if B sRGB <= 0.03928 then B = B sRGB /12.92 else B = ((B sRGB +0.055)/1.055) ^ 2.4
    if (SRGB_G <= 0.03928) {
        B = SRGB_B / 12.92
    } else {
        B = ((SRGB_B + 0.055) / 1.055) ** 2.4
    }

    // L = 0.2126 * R + 0.7152 * G + 0.0722 * B where R, G and B are defined as:
    let L2 = 0.2126 * R + 0.7152 * G + 0.0722 * B

    //Here we only compare it against white background first. L1 is the lighter of the 2. 1 is white (lightest)
    let L1 = 1

    // (L1 + 0.05) / (L2 + 0.05), where
    return (L1 + 0.05) / (L2 + 0.05)
}

