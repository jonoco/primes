// prime check routine
const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num >= 1;
}


const checkInput = (e) => {
  e.preventDefault();

  let input = document.getElementById('input').value
  let parsedInput = input.split(' ')

  console.log('parsedInput: ', parsedInput)

  // strip non-numbers
  let parsedNumbers = []
  for (let pi of parsedInput) {
    pi = Number(pi)
    if (!isNaN(pi) && pi > 0) {
      parsedNumbers.push(pi)
    }
  }
  console.log('parsedNumbers: ', parsedNumbers)

  // check for composites
  let composites = []
  for (let cn of parsedNumbers) {
    if (!isPrime(cn)) composites.push(cn)
  }

  // check for missing primes
  let missingPrimes = []
  for (let n = parsedNumbers[0] ; n <= parsedNumbers[parsedNumbers.length-1] ; n++) {
    if (!parsedNumbers.includes(n) && isPrime(n))
      missingPrimes.push(n)
  }

  // compose results
  let primesResults = ''
  if (missingPrimes.length != 0) {
    primesResults = '<span>Found missing primes:</span> '
    for (let p of missingPrimes) {
      primesResults += `${p} `
    }
  } else {
    primesResults = "All primes present"
  }

  let compositesResults = ''
  if (composites.length != 0) {
    compositesResults = '<span>Found composites:</span> '
    for (let c of composites) {
      compositesResults += `${c} `
    }
  } else {
    compositesResults = "No composites found"
  }

  let inputNumbers = '<span>Input checked:</span> ' + parsedNumbers.join(" ")

  document.getElementById('input').value = ''
  document.getElementById('primes').innerHTML = primesResults
  document.getElementById('composites').innerHTML = compositesResults
  document.getElementById('results').innerHTML = inputNumbers
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('submit', checkInput);
});
