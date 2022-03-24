# Table of Contents

- [Loops](#loops)
  - [WHILE loops](#while-loops)
  - [FOR loops](#for-loops)
  - [Iterating Over Arrays](#iterating-over-arrays)
- [Extras!](#extras)
  - [FizzBuzz](#fizzbuzz)
  - [FOR IN loops](#for-in-loops)
  - [Array.forEach()](#arrayforeach)

---

# Loops
A loop is a concept in programming that repeats a piece of code over and over again until you tell it to stop. There are generally two different types of loops: The **FOR** loop and the **WHILE** loop. In general, the **WHILE** loop is used when you need to run the loop a **variable** number of times (meaning that the number of times varies, not the other meaning of **variable**). A **FOR** loop is used when you know the number of times the loop will have to run at the beginning.

---

## WHILE Loops
As explained above, a **WHILE** loop is generally used when the number of times you will have to loop (otherwise known as **iterations**) is **NOT** known when the loop is started. The most important part of a **WHILE** loop is that it continues **WHILE** a given **condition** evaluates to `true`.
### example:
```
let counter = 0

while (counter < 5) {
  counter++
  console.log(counter)
}
```
This is a very basic example of a **WHILE** loop. It first initializes a `counter` variable as `0`, then it begins the loop. It says **WHILE** `counter` is less than `5`, do whatever is within the curly brackets. Within the curly brackets there is some code that **increases** the value of `counter` by `1` every time it loops, and then `console.log`s the value of `counter`. It is **VERY** important that you make sure there is a way for the condition within the opening perentheses to become `false` within your loop. If there is **NOT** a way for this to happen, you will create an **infinite loop** that will run forever. This usually results in your computer crashing if not caught early enough.

If you do manage to create an **infinite loop** your code can be **aborted** by clicking on the terminal that you ran the code from and pressing **CTRL + C**.

---

## FOR Loops
As explained above, a **FOR** loop is generally used when the number of times you will have to loop (otherwise known as **iterations**) **IS** known when the loop is started. It is important to note, however, that the number of times to loop **CAN** be based on a **variable** and **CAN** change, but the number of times it loops is not changed by anything while the loop is running.

Writing a **FOR** loop is a bit more complicated than writing a **WHILE** loop.
### example:
```
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```
- This example does the exact same thing that our first **WHILE** loop example did above. Inside the perentheses after the word **FOR**, you will see a few things, all separated by a semicolon (`;`).

- The **first** thing you see is `let i = 0`. This sets a variable to be used **ONLY** within the loop. If you remember our lesson about **scope** from yesterday, this is considered within **local scope**.

- It is standard practice to use `i` as the variable for your loop. However, if you have multiple **FOR** loops inside of each other, you **MUST** use different variable names, or else your loop will most certainly break.

- The **second** thing you see within the example loop is `i < 5`. This sets the **condition** for the loop to exit. As long as the variable `i` is **less than** `5`, the loop will continue.

- The **third** thing you see is `i++`. This is the same thing we put **inside** the curly braces in our **WHILE** loop example. Every time the loop **iterates**, or runs the code inside its curly brackets, it first does this statement. This means that every time the code runs, it increases the variable `i` by `1`.

- All of these things can be changed to have different effects on the way the loop functions. Some more examples will be covered at the end.

---

## Iterating over `Array`s
With **FOR** loops, one common use case is to **iterate** over an `Array`. It is fairly simple to do this, only requiring one major difference to the example loop I gave you up above.
### example:
```
const exampleArray = ["Heran", "Mariela", "Vicky"]

for (let i = 0; i < exampleArray.length; i++) {
  console.log(exampleArray[i])
}
```
- In this example we notice a few things. The first piece of the **FOR** loop is unchanged from our previous example. our `let i = 0` in this case sets `i` to the value of the first **index** of our `Array`, which is `0`.

- The second piece of our **FOR** loop is a little different than our first example. It still functions as a conditional for whent the loop should exit, **HOWEVER**, it uses the `.length` `Array` method to tell it when to stop. If we remember, the `Array.length` method gets you the actual **length** of the `Array` rather than the value of the final **index**. This means that the value of the **length** is one **more** than the value of the final **index**. This is useful to us, because we can use that to tell the loop when to stop. Once it hits the number that is the value of the final **index** plus one, it will stop the loop.

- Finally, we have `i++`. This is exactly the same as our other loop and simply adds `1` to the value of `i` when the loop executes.

- The last thing we see in this example is where we `console.log(exampleArray[i])`. We can do this because the value of `i` is always equal to some **index** value within our `exampleArray`

---

# Extras!

## FizzBuzz
| The Question: |
| ----- |
| Write a program where it will print **"FIZZ"** if the number is divisible by `3`, **"BUZZ"** if the number is divisible by `5`, and **"FIZZBUZZ"** if the number is divisible by both `3` and `5`. If a number is not divisible by either, print the number. Make this program execute for every number up to 100. |

| The Answer | 
| ----- |
| FizzBuzz is an extremely common interview question that you should definitely know the answer to before applying to companies! I'll put a couple of different potential answers below. One with a **WHILE** loop and one with a **FOR** loop. |

| example with WHILE loop |
| ----- |
```
let counter = 0

while (counter < 100) {
  counter++
  let response = ""
  if (counter % 3 === 0) {
    response += "Fizz"
  }
  if (counter % 5 === 0) {
    response += "Buzz"
  }
  if (response) {
    console.log(response)
  } else {
    console.log(counter)
  }
}
```
| example with FOR loop |
| ----- |
```
for (let i = 1; i <= 100; i++) {
  let response = ""
  if (i % 3 === 0) {
    response += "Fizz"
  }
  if (i % 5 === 0) {
    response += "Buzz"
  }
  if (response) {
    console.log(response) 
  } else {
    console.log(i)
  }
}
```
Both of these solutions are valid responses to the interview question! Use whichever type of loop you prefer.

---

## FOR IN loops
**FOR IN** loops are useful for looping specifically over `Array`s. They are much simpler than using a normal **FOR** loop, but can only loop over `Array`s.
### example:
```
const exampleArray = ["Freedom", "Monica", "Mariela"]

for (name in exampleArray) {
  console.log(name)
}
```
This example would print each name within `exampleArray` to the console. It loops over the `Array` and each time it loops it sets the item it is currently on to the first variable in the perentheses. That variable can be named **anything** you want. After the word `in` you put the name of the `Array` you are looping over. After that, you put the code that you wish to execute inside of the curly brackets, and you are done!

---

## Array.forEach()
This is a little bit more complicated of an example than a **FOR IN** loop, but it is another alternative that you can use to loop over an `Array`.
### example:
```
const exampleArray = ["Vicky", "Shuren", "Cynclaire"]

exampleArray.forEach((element, index) => {
  console.log(element)
  console.log(index)
})
```
This example would print both the individual item contained within `exampleArray` **AND** the **index** of that item within the `Array`. `Array.forEach` uses what is called a **callback function** to achieve this. a **callback function** is basically using a **function** as a **variable** within a built in method of some sort. A lot of the more complicated `Array` **methods** use **callback functions** to accomplish what they do and you will be seeing them more and more as the class goes on.

---

## Nested Loops
**FOR** loops (as well as **WHILE** loops) can be nested inside of each other! This is done as one would expect, with one key thing to remember.
### example:
```
for (let i = 0; i < 5; i++>) {
  for (let j = 0; j < 5; i++>) {
    // do stuff
  }
}
```
In this example we see that we used `j` as our variable within the nested loop. This is because the variable `i` is already being used, and if we were to edit that variable, it would throw off the counting of the loop it is inside and potentially create an **infinite loop**.

It is common practice to keep nesting to a **two loop** maximum because as you add more loops to the mix, the amount of time it takes to complete them all increases **exponentially**. In the above example if I were to just run the first loop, it would run `5` times. However, since I nested a second loop inside of it that runs 5 times itself, the loop now runs `25` times. That is **five times** the amount of iterations we had beforehand.