# Calculating the number π

This project approximates π using polygons.

## Procedure
* Sweep the first quarter of the circumference.
* Iterate over Y axis and calculate the corresponding X using the Pythagorean theorem.
* Calculate and accumulate the distance between the current point and the previous point.

```
circumference = quarter * 4
pi = circumference / diameter
```

## How to use

```sh
$ sudo npm install -g typescript@latest
$ npm install
$ npm run build
$ node ./pi.js <diameter>
```

* **`diameter`**: Diameter of the circumference. Default: 100000

The larger the diameter, the better the accuracy.

## Example

```sh
$ node ./dist/pi.js 1000000000
Pi (calculated) = 3.1415926535954846
Pi (predefined) = 3.1415926535897931
     difference = 0.0000000000056914

```

## Tests

```sh
$ sudo npm install -g typescript@latest
$ npm install
$ npm test
```