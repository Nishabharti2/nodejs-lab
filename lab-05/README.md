# Lab 05 – Async JavaScript (Food Delivery Tracker)

## Lab Number
05

## Date
27 August 2026

## Objective

The objective of this lab is to understand asynchronous JavaScript using callbacks, Promises, Promise chaining, async/await, and Promise.all(). This lab also helps in understanding error handling and how asynchronous code is connected to the Node.js Event Loop.

## Files and Their Purpose

### 1. callback-version.js
Demonstrates asynchronous operations using nested callbacks for placing, tracking, and confirming a food order.

### 2. promise-version.js
Demonstrates how Promises handle successful operations using `.then()` and errors using `.catch()`.

### 3. chaining-version.js
Demonstrates Promise chaining to complete multiple order stages in sequence with one `.catch()` for error handling.

### 4. async-await-version.js
Demonstrates the same order process using `async`, `await`, and `try/catch` for easier and more readable asynchronous code.

### 5. concurrent-orders.js
Demonstrates running multiple food orders concurrently using `Promise.all()` and shows that the total time is approximately equal to the longest-running order.

## Concepts Learned

- Callbacks
- Callback nesting
- Promises
- Promise states: Pending, Fulfilled, and Rejected
- `.then()` and `.catch()`
- Promise chaining
- Async/Await
- Try/Catch error handling
- Promise.all()
- Concurrent asynchronous operations
- Node.js Event Loop

## Problems Faced

No major problems were faced while completing this lab. The main observation was that the Promise rejection in `promise-version.js` did not occur immediately because the success or failure was generated randomly. The program was run multiple times until both the fulfilled and rejected Promise paths were observed.

## Conclusion

In this lab, I learned different ways to handle asynchronous operations in JavaScript. I understood how callbacks can lead to nested code, while Promises and async/await make asynchronous code easier to manage and read. I also learned that `Promise.all()` can run independent asynchronous tasks concurrently, which can reduce the total execution time.