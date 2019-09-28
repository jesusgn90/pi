import { Pi } from './pi';
const instance = new Pi();

if (process.argv.length > 2) {
  if (process.argv[2] === '--help') {
    instance.help();
    process.exit(0);
  }

  const diameter: number = parseInt(process.argv[2]);

  if (diameter <= 0) {
    throw new Error(
      `Bad diameter: ${diameter}. Expecting positive integer number.\n`
    );
  }
}

const pi = instance.calculatePi();

console.log(`Pi (calculated) = ${pi.toFixed(16)}`);
console.log(`Pi (predefined) = ${Math.PI.toFixed(16)}`);
console.log(`     difference = ${Math.abs(pi - Math.PI).toFixed(16)}`);
process.exit(0);
