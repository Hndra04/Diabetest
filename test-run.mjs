import inference from "./inference.mjs";

// command prompt must be inside same dir as this file and ./inference.mjs file
let input = [30, 95, 1.80, 11, 2, 0, 12, 98];

let output = inference(input).then(
    (value) => { console.log(value) },
    (e) => { console.log("error") }
)