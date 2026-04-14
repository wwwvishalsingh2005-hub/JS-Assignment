var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

var foundX = -1;

for (var x = 0; x <= 10000; x++) {
    var sum = N + x;
    
    if (sum % K === 0) {
        var strNum = sum.toString();
        var reversedStr = "";
        for (var i = strNum.length - 1; i >= 0; i--) {
            reversedStr += strNum[i];
        }
        
        if (strNum === reversedStr) {
            foundX = x;
            break;
        }
    }
}

alert(foundX);