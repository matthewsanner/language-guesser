//Enter some text and will attempt to determine and return the language the text is in

import {createRequire} from "module";
const require= createRequire(import.meta.url);
import {franc} from "franc";
const langs = require("langs");
const input = process.argv[2];
const langCode= franc(input);
const language= langs.where("3", langCode);
if (language === undefined){
    console.log ("Couldn't determine a language match");
} else {
    console.log (`Best guess: ${language.name}`);
}
