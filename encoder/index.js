import { convert } from "./rotor_01.js";
import process from 'node:process';

let out = "";

process.argv[2].split('').forEach((e, i) => {
    out += convert(i, e);
});

console.log(`Clear text:\t${process.argv[2]}\nChyper text:\t${out}`);