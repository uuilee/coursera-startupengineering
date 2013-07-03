var fs = require('fs');
var outfile = "part2.out";
var out = "";

var multiples = [];
var primes = [];
var num = 0;
var curr = 2;

while (num < 100) {
  if (multiples[curr] != undefined) {
    var primeFactors = multiples[curr];
    for (var i = 0; i < primeFactors.length; i++) {
      var nextMultiple = curr + primeFactors[i];
      if (multiples[nextMultiple] == undefined) {
        multiples[nextMultiple] = [];
      }
      multiples[nextMultiple].push(primeFactors[i]);
    }
  } else {
     multiples[curr * 2] = [curr];
     primes.push(curr);
     num++;
  }
  curr++;
}

out += primes[0];
for (var i = 1; i < primes.length; i++) {
  out += "," + primes[i];
}

fs.writeFileSync(outfile, out);
