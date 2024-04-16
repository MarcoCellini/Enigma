import { third_convertion } from "./rotor_03.js";

let out = "";

"ahbb".split('').forEach((e, i) => {
    out += third_convertion(i, e);
});

console.log(out);