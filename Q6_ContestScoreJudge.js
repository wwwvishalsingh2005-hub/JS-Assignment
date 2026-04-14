var a = parseInt(prompt("Correct answers (a):"));
var b = parseInt(prompt("Partially correct (b):"));
var c = parseInt(prompt("Wrong answers (c):"));

var score = (3 * a) + b - (2 * c);

if (score < 0) {
    score = 0;
}

if ((a + b + c) > 50) {
    score -= 10;
}

var status = "FAIL";
if (score >= 60) {
    status = "PASS";
}

alert(score + ", " + status);