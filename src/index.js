import sansSerif from './NotoSans-Medium.woff2?inline';
import serif from './SourceSerifPro-Regular.woff2?inline';
import handwriting from './handlee-regular.woff2?inline';
import marker from './Knewave.woff2?inline';
import curly from './Griffy-Regular.woff2?inline';
import pixel from './Grand9K-Pixel.woff2?inline';
import scratch from './Scratch.woff2?inline';

// Synchronously load TTF fonts.
// First, have Webpack load their data as Base 64 strings.
let FONTS;

const getFonts = function () {
    if (FONTS) return FONTS;
    FONTS = {
        'Sans Serif': sansSerif,
        'Serif': serif,
        'Handwriting': handwriting,
        'Marker': marker,
        'Curly': curly,
        'Pixel': pixel,
        'Scratch': scratch
    };

    // For each Base 64 string,
    // 1. Replace each with a usable @font-face tag that points to a Data URI.
    // 2. Inject the font into a style on `document.body`, so measurements
    //    can be accurately taken in SvgRenderer._transformMeasurements.
    for (const fontName in FONTS) {
        const fontData = FONTS[fontName];
        FONTS[fontName] = '@font-face {' +
            `font-family: "${fontName}";src: url("${fontData}");}`;
    }

    if (!document.getElementById('scratch-font-styles')) {
        const documentStyleTag = document.createElement('style');
        documentStyleTag.id = 'scratch-font-styles';
        for (const fontName in FONTS) {
            documentStyleTag.textContent += FONTS[fontName];
        }
        document.body.insertBefore(documentStyleTag, document.body.firstChild);
    }

    return FONTS;
};

export default getFonts;
