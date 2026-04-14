var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

var count = 0;

for (var i = L; i < R; i++) {
    if (i % K === 0) {
        var num = i;
        var sum = 0;
        var hasZero = false;
        var temp = num;

        while (temp > 0) {
            var digit = temp % 10;
            if (digit === 0) {
                hasZero = true;
                break;
            }
            sum += digit;
            temp = Math.floor(temp / 10);
        }

        if (!hasZero && sum > 1) {
            var isPrime = true;
            for (var j = 2; j <= Math.sqrt(sum); j++) {
                if (sum % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                count++;
            }
        }
    }
}

alert(count);