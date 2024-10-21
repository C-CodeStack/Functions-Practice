# Function Practice

On all of these problems you must write the majority of your logic into `helper functions`. `Helper functions` are smaller functions that make a larger function work. Then call these helper functions to return what is required by the problem.

To help you understand please refer to the example problem. In this problem you could easily put your answer as:
```javascript
module.exports = example = (num) => {
  return (num + 1) + (num - 1)
}
```

However, to help you get an understanding of how functions work you will need to create at least 1 function that does this and then call that function in the example.

```javascript
const add1 = (num) => {
  return num + 1
}

const subtract1 = (num) => {
  return num - 1
}
```

In the above code you can see two functions `add1` and `subtract1`. These functions do what is in the parenthesis `(num  + 1)` and `(num - 1)`. Please add the above code just below your example function.

You now have the code to complete the example but your example code is currently just `return` and it will fail the test if you leave it that way. Change your example code to match the code below:

```javascript
module.exports = example = (num) => {
  return add1(num) + subtract1(num)
}
```

Now when you run the test the example code should pass.

## Example
Given 1 number return the sum of the number below and the number above

example: (5) -> 10 `(6 + 4)`

example: (3) -> 6 `(4 + 2)`

example: (10) -> 20 `(11 + 9)`


## Problem 1
Given a number count how many digits are in the number and then add that to the number. Use at least one helper function. 

example: (23) -> 25 `(23 + 2)`

example: (555) -> 558 `(555 + 3)`

hints: search "js mod" and "js operators" and "js floor"
#
## Problem 2
Given a number count how many digits are in the number and sum the digits of the number. Then add those 2 numbers together. Use at least 2 helper functions

example: (24) -> 8 `(2 + 6)` (We have 2 because there are 2 digits in 24. We have 6 because 2+4=6)

example: (200) -> 5 `(3 + 2)` (We have 3 because there are 3 digits in 200. We have 2 because 2+0+0)

hints: 
#
## Problem 3
Given an array of integers return the sum of the largest element and the smallest element. Use at least 2 helper functions

example: ([2, 45, 3, 67, 34, 567, 34, 345, 123]) -> 569 `(2 + 567)`

example: ([2, 99, 3, 67, 34, 23, 34, 67, 3]) -> 101 `(2 + 99)`

hints: 
#
## Problem 4
Given a word, use a function to count how many times the letter "i" occurs. Use another function to count how many times the letter "j" occurs. Return the product of these two numbers`(multiplication)`. Use at least 2 helper functions

example: ("apple") -> 0 `(0x0)`

example: ("jill") -> 1 `(1x1)`

example: ("jiujitsu") -> 4 `(2x2)`

...

example: ("koolaid") -> "k"

example: ("lime") -> "Past the letter k"

example: ("young") -> "Past the letter k"

hint: 
#
## Problem 5
given two numbers return the difference of their factorials. Use at least 1 helper function

example: (3,2) -> 4 `(6-2)`

example: (6,3) -> 714 `(720-6)`

hints:
#
## Problem 6
Given a number count how many digits are in the number and then add the factorial of that number. Use at least 2 helper functions.

example: (3) -> 7 `(1+6)`

example: (10) -> 3628802 `(2+3628800)`

hints:
#
## Problem 7
given a side length of a square and a radius of a circle return the sum of the areas. Use at least 2 helper functions

example: (3,3) -> 37.274

example: (2,3) -> 32.274

hints:
#
## Problem 8
given basketball 2's and 3's made return the total score. Use at least 2 helper functions.

example: (4, 2) -> 14

example: (1,1) -> 5

hints: 
#
## Problem 9
given two numbers return if they are both divisible by 5. Use at least 1 helper function

example: (5,25) -> true
example: (11,35) -> false

hints:
#
## Problem 10
given two numbers return if at least 1 is divisible by 5. Use at least 1 helper function

example: (10,11) -> true

example: (25,13) -> true

example: (29,28) -> false

hints:
#
