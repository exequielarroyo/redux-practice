import { compose, pipe } from "lodash/fp";

let input = " Javascript   ";
let output = `<div>${input.trim()}</div>`;

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(trim(toLowerCase(input)));

const transform = pipe(trim, toLowerCase, wrap("div"));
output = transform(input);
console.log(output);
