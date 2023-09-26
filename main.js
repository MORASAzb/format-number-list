function formatIntegers(integers) {


  if (!integers.length) {
      return '';
  }

  let result = [];
  let currentRange = [integers[0]];

  for (let i = 1; i < integers.length; i++) {
      if (integers[i] === integers[i - 1] + 1) {
          currentRange.push(integers[i]);
      } else {
          if (currentRange.length >= 3) {
              result.push(`${currentRange[0]}-${currentRange[currentRange.length - 1]}`);
          } else {
              result.push(...currentRange.map(String));
          }
          currentRange = [integers[i]];
      }
  }

  if (currentRange.length >= 3) {
      result.push(`${currentRange[0]}-${currentRange[currentRange.length - 1]}`);
  } else {
      result.push(...currentRange.map(String));
  }

  return result.join(',');
}

const inputString = prompt("Enter a list of integers in increasing order (comma-separated): ");
const integers = inputString.split(',').map(Number);
console.log(formatIntegers(integers));
