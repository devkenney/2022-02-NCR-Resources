# Week One Day Two Notes

## Table of Contents:

- [Variables](#variables)
  - [const](#const)
  - [let](#let)
  - [var](#var)
- [Data Types](#data-types)
  - [Number](#number)
  - [String](#string)
  - [Boolean](#boolean)
  - [Null](#null)
  - [Undefined](#undefined)
  - [NaN](#nan)
- [Mathematical Operators](#mathematical-operators)
  - [Addition](#addition)
  - [Subtraction](#subtraction)
  - [Multiplication](#multiplication)
  - [Division](#division)
  - [Modulus](#modulus)
- [Boolean Operators](#boolean-operators)
  - [Strict versus Loose](#strict-equality-versus-loose-equality)
    - [Loose](#loose)
    - [Strict](#strict)
  - [Less than](#less-than)
    - [Less than or Equal to](#less-than-or-equal-to)
  - [Greater than](#greater-than)
    - [Greater than or Equal to](#greater-than-or-equal-to)
  - [Adding Strict Equality](#adding-strict-equals--and)
  - [NOT](#not)
- [Logical Operators](#logical-operators)
  - [AND](#and)
  - [OR](#or)
- [Conditionals](#conditionals)
  - [IF](#if)
  - [ELSE](#else)
  - [ELSE IF](#else-if)

---

# Variables

## const
this variable type is used to denote a **constant** variable. That is to say, something that **can not** be changed.
### example:
```
const thisIsAConstant = "Example"
```

---

## let
this variable type is used to denote a variable that **can be changed**.
### example:
```
let thisIsALet = "Example"
```

---

## var
this is a variable type that is used **NEVER**. It is old syntax and should not be used in modern applications. You **will** see this in legacy code, however it is not best practice to use currently because there are a number of issues with it.
### example:
```
var thisIsAVar = "Example"
```

---

# Data Types

## Number
this is a type of data that is used to denote, you guessed it, a **NUMBER**! This data type does **not** use quotation marks (" ") and can be used with mathematical operators. This also includes decimals, which do not use quotations either.
### example:
```
const thisIsAnInteger = 20
const thisIsADecimal = 19.5
```

---

## String
this is a type of data that can include **numbers**, **letters**, and **symbols** such as question marks and other punctuation. This data type **does** use quotation marks (" ").
### example:
```
const thisIsAString = "Letters Numb3r5 and @#$% (Symbols)
```

---

## Boolean
this is a type of data that is used to represent the values of `true` and `false`. These are equivalent to **yes** or **no**, **on** or **off**. They are able to be used with **Boolean Operators**.
### example:
```
const thisIsABoolean = true
const thisIsAlsoABoolean = false
```

---

## Null
this is a type of data that is used to represent the **absence** of data. It is very similar to the `undefined` data type; however, `null` is typically assigned by the programmer when it is needed and `undefined` is typically assigned by the computer when it sees that something does not exist.
### example:
```
const thisIsNull = null
```

---

## Undefined
this is a type of data that is used to represent the **absence** of data. It is very similar to the `null` data type; however, `undefined` is typically assigned by the computer when it sees that something does not exist, and `null` is typically assigned by the programmer when it is needed.
### example:
```
const thisIsUndefined = undefined
```

---

## NaN
this is a type of data that you never want to see pop up in your code. It represents the output of some sort of operation where one of the variables you were using is not actually a number, when it really needed to be.
### example:
```
const thisIsNaN = NaN
```

---

# Mathematical Operators

## Addition (+)
this is the type of mathematical operator associated with addition. It functions identically to how you would use it in math!
### example:
```
const addedNums = 3 + 5
```
the value of `addedNums` would be equal to `8`.

---

## Subtraction (-)
this is the type of mathematical operator associated with subtraction. It functions identically to how you would use it in math!
### example:
```
const subtractedNums = 5 - 3
```
the value of `subtractedNums` would be equal to `2`

---

## Multiplication (*)
this is the type of mathematical operator associated with multiplication. It functions identically to how you would use it in math!
### example:
```
const multipliedNums = 5 * 3
```
the value of `multipliedNums` would be equal to `15`

---

## Division (/)
this is the type of mathematical operator associated with division. It functions identically to how you would use it in math!
### example:
```
const dividedNums = 15 / 3
```
the value of `dividedNums` would be equal to `5`

---

## Modulus (%)
this is the type of mathematical operator associated with modulus. It functions by first dividing the two numbers provided, and then using the remainder left over after they are divided!
### example:
```
const modulusNums = 16 % 3
```
the value of `modulusNums` would be equal to `1`

---

# Boolean Operators
Boolean Operators always resolve to either `true` or `false`. They **compare** two pieces of data, and spits out a `true` or a `false` depending on what operator is used.
 
 ---

## Strict Equality versus Loose Equality

### Loose (==):
Loose equality takes the two pieces of data and sees if the **content** of the data is equivalent. This means that in the following example:
```
const looseExample = "5" == 5
```
`looseExample` would resolve to `true`.

---

### Strict (===):
Strict equality takes the **type** of data into account when determining equality. If the two pieces of data are the same thing, but different types of data, then the outcome is false. For the following example:
```
const strictExample = "5" === 5
```
`strictExample` would resolve to `false` because the first value is a `String` and the second value is a `Number`.

---

## Greater than (>)
The 'greater than' sign is used to check whether the **first number** is **greater than** the **second number**. The sign goes in between the two numbers and compares them.
### example:
```
const greaterThan = 3 > 2
```
the value of `greaterThan` would resolve to `true` because `3` is **greater than** `2`.

---

## Less Than (<)
Similar to 'greater than', the 'less than' operator does the opposite. It checks if the **first number** is **less than** the **second number**. The sign goes in between the two numbers and compares them.
### example:
```
const lessThan = 2 < 3
```
the value of `lessThan` would resolve to `true` because `2` is **less than** `3`.

---

## Greater than or Equal to (>=)
this operator is nearly identical to normal **greater than**, except that it has an **equal sign** tacked on to the end of it. This just means that when the two numbers are compared, the first must be either **greater than** the second number **OR** **the same as** the second number.
### example:
```
const greaterOrEqual1 = 3 >= 2
const greaterOrEqual2 = 3 >= 3
```
the value of **both** of these variables would resolve to `true` because `3` is **greater than** `2`. `3` is also **the same as** or **equal to** `3`, so the second part of the operator comes into play.

---

## Less than or Equal to (<=)
this operator is nearly identical to normal **less than**, except that it has an **equal sign** tacked on to the end of it. This just means that when the two numbers are compared, the first must either be **less than** the second number **OR the same as** the second number.
### example:
```
const lessOrEqual1 = 2 <= 3
const lessorEqual2 = 2 <= 2
```
the value of **both** of these variables would resolve to `true` because `2` is **less than** `3`. `2` is also **the same as** or **equal to** `2`, so the second part of the operator comes into play.

---

## Adding Strict Equals (<== and >==)
these operators function identically to the ones shown above, **EXCEPT** that they utilize the same rules as loose and strict equals operators in that they look at **data type** as well as **value**. You should always try and use **strict equality** operators when possible!

---

## NOT (!)
this operator (also referred to as **bang**) is used to represent the word **"Not"**. You can add this to the **strict** and **loose equals** operators to flip them around. For instance, **is equal to** would become **is not equal to**.
### example:
```
const notExample = 3 !== 2
```
the value of `notExample` would resolve to `true` because `3` is **not equal** to `2`


---

# Logical Operators
**Logical Operators** are used to chain together **Boolean Operator Expressions** to achieve certain things.

---

## AND (&&)
this operator is used to chain together two **Boolean Operator Expressions** and checks if **BOTH** operations evaluate to `true`. If only one evaluates to `true`, then the whole thing resolves to `false`. This can be chained as many times as you would like, and all of them would have to be true.
### example:
```
const andExample = 2 <== 3 && 3 >== 2
```
the value of `andExample` would resolve to `true` because `2` is **less than** `3` **AND** `3` is **greater than** `2`

---

## OR (||)
this operator (often referred to as **"pipes"**) is used to chain together two **Boolean Operator Expressions** and checks if **EITHER** of the operations evaluate to `true`. If only one evaluates to `true`, the whole check passes. If **BOTH** evaluate to `true`, the check passes. if **NONE** evaluate to `true`, the whole thing is `false`.
### example:
```
const orExample = 2 <== 3 || 2 >== 3
```
the value of `orExample` would resolve to `true` because **AT LEAST ONE** of the expressions evaluates to true, that being that `2` is **less than or equal to** `3`.

---

# Conditionals
Conditionals are used together with **Boolean Operator Expressions** and **Logical Operators** to check if something is `true` or `false`. If said thing resolves to `true`, it performs an action.

---

## IF
This is the basic piece you will need to create any conditional. When you give it an expression, it runs the code in front of it if the conditions inside of it resolve to `true`. If they resolve to `false`, it skips it and moves on.
### example:
```
if (2 < 3) {
  // do some stuff in here
}
```
this code will run the contents of the `if` statement, because we know that `2` is in fact **less than** `3`

---

## ELSE
This is the second most important piece of a conditional. This piece is not used with any expression, and instead just runs if what you give your `if` statement returns `false`. It is always recommended to have an `else` at the end of your `if` statements.
### example:
```
if (2 > 3) {
  // this WILL NOT run
} else {
  // this WILL run
}
```
this code will run the contents of the `else` because we know that `2` is **not greater than** `3`.

---

## ELSE IF
This is the final piece you will need to construct complex `if` statements. `else if` is not required on all `if` statements, as you will not always need them. However, they do require an expression be passed to them and will run **in order** from the top of the `if` until the bottom.
### example 1:
```
if (2 > 3) {
  // This WILL NOT run.
} else if (2 < 3) {
  // This WILL run.
} else {
  // This WILL NOT run.
}
```
this code will run the contents of the `else if` because the first expression (`2` **is not greater than** `3`) resolves to `false`.
### example 2:
```
if (2 > 3) {
  // This WILL NOT run.
} else if (3 < 4) {
  // This WILL run.
} else if (2 < 3) {
  // This WILL NOT run.
} else {
  // This WILL NOT run.
}
```
this code will **ONLY** run the contents of the **FIRST** `else if` because `if` statements will **STOP** after they find the first piece that evaluates to `true`. Once the `if` statement has dont **ONE** thing, it stops and continues the code.