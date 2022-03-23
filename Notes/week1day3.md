# Week One Day Three Notes

## Table of Contents:
- [Functions](#functions)
  - [What is a Function?](#what-is-a-function)
  - [Function Declaration](#function-declaration)
  - [Function Invocation](#function-invocation)
  - [Parameters and Arguments](#parameters-and-arguments)
    - [Parameters](#parameters)
    - [Arguments](#arguments)
    - [Putting it Together](#putting-it-together)
  - [Return Statements](#return-statements)
  - [Arrow Functions](#arrow-functions)
- [Scope](#scope)
  - [Global Scope](#global-scope)
  - [Local/Function Scope](#localfunction-scope)
  - [Block Scope](#block-scope)
  - [Nested Scope](#block-scope)
- [Arrays](#arrays)
  - [Accessing Arrays](#accessing-arrays)
  - [Accessing Nested Arrays](#accessing-nested-arrays)
  - [Changing Values within an Array](#changing-values-within-an-array)
- [Array Methods](#array-methods)
  - [Array.length](#arraylength)
  - [Array.push()](#arraypush)
  - [Array.pop()](#arraypop)
  - [Array.sort()](#arraysort)

---

# Functions

## What is a function?
A function is a block of code that you can reuse anywhere in your program. These are generally used to contain any piece of code that needs to be run more than once, in different places.
### example:
```
// Declaration
function exampleFunction() {
  // function body goes here
}

// Invocation
exampleFunction()
```

---

## Function Declaration
To declare a function, you use the following format:
```
function functionName() {
  // function body
}
```
The word function is followed by whatever name you wish to give the function. Then you put perentheses and curly braces. Inside the curly braces is what the function is going to do. The function **MUST** be declared **BEFORE** it is invoked, or else the program won't know where to look.

---

## Function Invocation
to invoke a function, you use the following format:
```
functionName()
```
The name of the function is followed by perentheses to invoke it. The function **MUST** be declared **BEFORE** it is invoked, or else the program won't know where to look.

---

## Parameters and Arguments
**Parameters** and **Arguments** are virtually the same thing, however they exist in different places. **Parameters** (otherwise known as **params**) exist within the function **declaration**, while **Arguments** (otherwise known as **args**) exist within the function **invocation**.

### *Parameters*:
**Params** exist within the function **declaration**, inside of the **perentheses** right before the curly braces.
### example:
```
function exampleFunction (params, params2) {
  // function body goes here
}
```
These two **params** can be used the same as variables, but **only** work **within** the function.
### example:
```
function addition (num1, num2) {
  console.log(num1 + num2)
}
```
If we were to use `num1` or `num2` outside of the function, the computer wouldn't know what they are, and give you an error saying that they do not exist. This is because functions create something called **scope**, which we will go over a little later.

---

### *Arguments*:
**Args** exist within the function **invocation**, inside of the **perentheses** right after the name of the function.
### example:
```
exampleFunction(args1, args2)
```
These two **args** will be sent to the function `exampleFunction` and will correspond to the **params** that it has set up.

---

### *Putting it Together:*
Here is an example of putting together both **params** and **args** to create a function that **adds** two numbers.
### example:
```
function addition (num1, num2) {
  console.log(num1 + num2)
}

addition(3, 4)
addition(1, 2)
```
The console would then look like the following after running the above code:
```
7
3
```
The reason for this is that when the first instance of the function `addition` is **called**, (another word for **invoked**) it takes the numbers `3` and `4` and makes `num1` and `num2` **inside** of the function **declaration**'s **params** equal to them, and then runs the code within the curly braces with those numbers. Then, it does the same for `1` and `2`.

---

## Return Statements
A return statement is used within the confines of a function **declaration** to send data back to where it was **invoked**. When the function sees the word `return`, it immediately stops the function and sends whatever data you tell it back to where it was **called**. Because of that, it's completely useless to put anything **after** a `return` statement, because it will never run!
### example:
```
function additionReturn (num1, num2) {
  return (num1 + num2)
}

const addedNums = additionReturn(3, 4)
```
This would set the **constant variable** `addedNums` equal to `7`. This is because when the function is **invoked**, it sends the information of `3` and `4` to the function. The function takes that information, **adds** the two numbers, and sends back a `7` to where it was **invoked**, setting `addedNums` equal to `7`.

---

## Arrow Functions
In JavaScript there is a thing called EcmaScript, or ES. In the most recent version of EcmaScript (ES6), which is an addition to JavaScript that was not in the original version, they added **arrow functions**. These are the most modern way of writing functions and it is **HIGHLY** recommended you use these over the old way of declaring functions, which I used above.
### example:
```
const exampleFunction = (params1, params2) => {
  // function body goes here
}
```
All of the things I outlined above work with **arrow functions**, but they actually do more than the **Function Declarations** that were used above. Contrary to how it looks, **returning** something from the array will not set the name of the function equal to that value. The value `exampleFunction` is literally equal to the contents of the function.

What you **can** do with these, is use the function as a variable in other situations. You will learn more about this later on, but if you are curious you can look up **callback functions** and get a general idea of how these can usually be used.

Again, it is **HIGHLY** recommended that you use this type of function in **ALMOST** every situation within modern JavaScript. A lot of legacy code will show you the **function declarations** in the way outlined above, so it is important to know what it looks like, but most **modern** code uses **arrow functions** as they are much more versatile and can do things that the **old** of writing **functions** cannot.

---

# Scope
Scope defines what variables and functions **can** or **can not** be used at any point in the code. Scope is denoted by anything within curly brackets, whether it happens to be a function, an if statement, or anything else!

## Global Scope
Anything that is **NOT** inside any function or curly brackets of any sort can be considered in **Global Scope**. These things can be used **everywhere** in your code. The one caviat to this is that the declaration, whether a function or variable, **MUST** be declared **BEFORE** it is used elsewhere in the code. JavaScript runs **top** top **bottom** which means that if a variable is used before it is declared, the computer will not know what the variable is!

---

## Local/Function Scope
Anything that is **WITHIN** curly braces of any sort, usually applying to **functions**, is considered within **Local Scope**. Things that are within **Local Scope** can **ONLY** be accessed within things that are inside the **SAME** scope.
### example (using an [Arrow Function](#arrow-functions)):
```
const scopeExample = () => {
  const scopedVariable = 25
}

console.log(scopedVariable)
```
This example would throw an error to the console, because `scopedVariable` does not exist outside of the **function** called `scopeExample`.

---

## Block Scope
Due to EcmaScript 6 (ES6) adding `let` and `const` to the mix rather than just `var`, **Block Scope** is pretty much **identical** to [Local/Function Scope](#localfunction-scope). Local scope existed beforehand and if you used `var` inside of a function, it **COULD** be used outside of it. **HOWEVER** this can create problems down the line with naming variables, so they introduced `let` and `const` to fix the problem, which can only be accessed from within the scope they are declared in!

---

## Nested Scope
Just like **functions** in JavaScript, **scope** can be **nested**. If you have a function **declaration** **WITHIN** another function **declaration**, (Which is used more within **frontend** frameworks than basic JavaScript) the **Nested** function **WILL** be able to access values **outside** of it, however the **top level** function **WILL NOT** be able to access things inside of the **nested** function.

---

# Arrays
Arrays are **lists** of numbers usually shown in a **straight line** format. They can contain **ANY** data type, including `String`s, `Number`s, other `Array`s, and `Object`s (which you have not learned about yet.). One snag that `Array`s throw at us, however, is that computers do not count how us normal humans do. Instead of starting at `1`, they start at `0`. Which means that the first **item** in an `Array` has the **index** of `0`.
### example:
```
const arrayExample = [1, 2, "Fred", [4, 5, "Susan"]]
```
As shown, `Array`s can also contain multiple different **data types** and still work as expected!

---

## Accessing Arrays
If you want to use an entire `Array`, you can just use the variable name that is associated with it. However, if you wish to access a **single item** within an `Array`, you need to do something different. If you put a set of **square brackets** at the end of the variable name you used to declare the `Array`, you can specify an **index** that you would like to pull from the `Array`.
### example:
```
const arrayExample = ["Freedom", "Shuren", "Mariela"]
const singleIndex = arrayExample[0]
```
In this example, the value of `singleIndex` would be `Freedom`. The first part of the `Array` called `arrayExample`, denoted as the **index** of `0`, holds the value of `Freedom`, so that what it uses to set `singleIndex`.

---

## Accessing Nested Arrays
If you want to access a value from an `Array` that exists within another `Array`, all you have to do is put the index of the **second** `Array` directly **after** the first **index**
### example:
```
const nestedArray = [1, 2, [3, 4, 5]]
const nestedIndex = nestedArray[2][1]
```
In this example, the value of `nestedIndex` would be `4` because the index of the **nested `Array`** is `2` and the the index of `1` in that `Array` holds the value of `4`.

---

## Changing Values within an Array
If you want to change some of the values within an `Array` you can do so by accessing an **index** within the `Array`, and setting it equal to something new.
### example:
```
const changeableArray = ["Freedom", "Shuren", "Cynclair"]
changeableArray[2] = "Cynclaire"
```
In this example, we noticed we spelled **Cynclaire's** name incorrectly, so we added an `e` at the end of it. We accessed the **index** of `2` in the `Array` called `changeableArray`, and set it equal to the new name, with an `e` on the end. It is important to note that while `changeableArray` is set as a `const`, the values within it **CAN** be changed. **HOWEVER**, if you were to try and set the **entire** `Array` to something new, it would not work.
### example:
```
const kindaChangeableArray = ["Freedom", "Shuren", "Cynclaire"]
kindaChangeableArray = [1, 2, 3]
```
This piece of code would not work and would **probably** throw an error for trying to assign a new value to a **constant** variable.

---

# Array Methods
There are several `Array` **methods** that we can use to perform actions on an existing `Array`.

---
## Array.length
`Array.length` is used to find the length of an `Array`. It is important to note it will return the actual number of things in the array, not the value of the last index. Therefore, since the indexes of an `Array` start at `0`, the length will actually return the value of the last index plus one.
### example:
```
const exampleArray = [1, 2, 3]
const arrayLength = exampleArray.length
```
In this example, the value of `arrayLength` would be equal to `3` because there are `3` items in the `Array`.

---

## Array.push()
`Array.push()` is used to add an item to the end of an `Array`. to use it you put the item that you wish to add to the end of an **existing** `Array` within the **perentheses**, and it runs the method and adds the item to the end. It is important to note that this `Array` method does **NOT** return anything.
### example:
```
const exampleArray = ["Freedom", "Shuren", "Heran", "Monica"]
exampleArray.push("Cintia")
```
The value of `exampleArray` would then change to `["Freedom", "Shuren", "Heran", "Monica", "Cintia"]` because we used `Array.push()` to add `Cintia` to the end of the `Array`.

---

## Array.pop()
`Array.pop()` is used to remove an item from the end of an `Array`. to use it you add `.pop()` to the end of the name of the `Array`. It is important to note that it **DOES** return something, that being the item that was removed from the end of the `Array`.
### example:
```
const exampleArray = ["Monica", "Mariela", "Shuren"]
const poppedValue = exampleArray.pop()
```
The value of `poppedValue` would be equal to `Shuren`, which is the last value in the `exampleArray`. The value of `exampleArray` would also change to be `["Monica", "Mariela"]` because the last value, `Shuren`, was removed with `.pop()`.

---

## Array.sort()
`Array.sort()` does what it says on the tin, it **sorts** the data that is found in an `Array`. if you do not put anything inside the perentheses it sorts whatever is in the `Array` alphabetically.
### example:
```
const exampleArray = ["Apple", "Orange", "Banana"]
exampleArray.sort()
```
In this example, the `exampleArray` would be **mutated** to look like `["Apple", "Banana", "Orange"]`. It is important to note that `.sort()` does **NOT** return the new  `Array`, and instead just changes the original `Array`.

When used with `Number`s, sort behaves very strangely. It keeps its alphabetical sorting method.
### example:
```
const numberArray = [1, 223, 14, 134]
numberArray.sort()
```
this `.sort()` method would mutate the `numberArray` into `[1, 134, 14, 223]` because it is sorted alphabetically.