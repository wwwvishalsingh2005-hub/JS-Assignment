# JS-Assignment
Question 1: Digit Gatekeeper

Approach: I used a for loop to iterate from L to R. For each number, I check divisibility by K. Then, I use a while loop with the modulo operator (%) to extract digits, checking for the digit 0 and calculating the sum. Finally, I use a nested forloop to determine if the sum of the digits is a prime number.

Complexity:
Time: O((R−L)×log(num)), as we check every number in the range and its digits.
Space: O(1), since we only store a few integer variables.



Question 2: Roll-Seed Lock
Approach: I implemented a for loop that runs exactly 3 times. Inside, an if-else statement checks if the current number is even or odd to apply the specific formula involving the seed value. After the loop, I verify if the number is between 100 and 999 and use integer division and modulo to extract the middle digit.

Complexity:
Time: O(1), as the loop always runs exactly 3 times.
Space: O(1).



Question 3: Mirror Corridor
Approach: I used a for loop to test values of X from 0 to 10,000. For each X, I check if N+X is divisible by K. To check if it is a palindrome, I convert the sum to a string and use a for loop to build a reversed version of that string for comparison.

Complexity:
Time: O(10000×digits), as the loop has a fixed upper bound.
Space: O(digits), to store the string representation of the number.



Question 4: Fare Calculator
Approach: This solution follows a linear sequence of conditional checks. It starts with a base fare calculation. Then, multiple if statements apply surcharges for being late, long-distance travel, and the seed value. Finally, I used Math.ceil() and simple math to round the result up to the nearest multiple of 5.

Complexity:
Time: O(1), as it is a fixed set of mathematical operations.
Space: O(1).



Question 5: Skipping Numbers
Approach: I used a while loop that continues as long as the running sum is less than N. In each iteration, I increment a counter m. If m is not divisible by seed + 2, it is added to the total sum. Once the sum reaches or exceeds N, the loop terminates and prints both m and the sum.

Complexity:
Time: O(N), because the sum grows quadratically as we add consecutive integers.
Space: O(1).



Question 6: Contest Score Judge
Approach: The script first calculates the score using the formula 3a+b−2c. I then used if statements to handle the rules for negative scores and the penalty for total submissions exceeding 50. A final if-else check determines the "PASS" or "FAIL" status based on a threshold of 60.

Complexity:
Time: O(1).
Space: O(1).
