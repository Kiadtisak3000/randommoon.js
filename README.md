# randommoon.js
A simple JavaScript library for generating random values.

[![license](https://img.shields.io/badge/license-MIT_license%20-darkgreen?style=flat-square)](/LICENSE)

## Installation:

**npm:**

[![npm version](https://img.shields.io/badge/npm-v1.0.12-blue?style=flat-square)](https://www.npmjs.com/package/randommoon.js)
```bash
npm i randommoon.js
```
How to use:

Import specific functions:

CommonJS:
```javascript
const {Zeros} = require("randommoon.js");
```
import Statement:

```javascript
import {Zeros} from "randommoon.js";
```
*Also import All functions with default as randommoon:
```javascript
const randommoon = require("randommoon.js");
```


## Array And 2d Array structure:
```javascript
const shape = [rows,cols] // 2D Array structure
const shape = [rows] // 1D Array structure
```
example:
```javascript
const var1 = Zeros(3); 
console.log(var1.data); // Output: [0, 0, 0]
console.log(var1.shape) // Output: [3,0]
```
With 2D array:
```javascript
const var2 = Zeros([3, 2]); 
console.log(var2.data); // Output: [[0, 0], [0, 0], [0, 0]]
console.log(var1.shape) // Output: [3,2]
```
