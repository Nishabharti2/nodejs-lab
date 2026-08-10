# Node.js Lab 01

## Student Information

**Name:** Nisha Bharti

**Scholar Number:** 23145012

**Course:** BCA

**Semester:** VII

**Subject:** Node.js Lab

**Lab Number:** 01

**Date:** 31 July 2026

---

## Practical Description

This practical was performed to learn the fundamentals of Node.js. The objectives included installing and configuring Node.js, verifying the installation using Node.js and npm commands, creating and executing the first Node.js program, understanding variables and data types, comparing Browser JavaScript with Node.js, and learning the basics of Git and GitHub for project version control.

---

## Files Included

- app.js
- package.json
- README.md
- difference.txt
- node-version.png
- output.png

---

## Tasks Completed

- Installed the latest LTS version of Node.js.
- Verified the installation using `node -v` and `npm -v`.
- Created a Node.js project using `npm init -y`.
- Created and executed the first Node.js program (`app.js`).
- Printed output using `console.log()`.
- Used variables to store and display student information.
- Created variables of different data types and displayed their types using `typeof`.
- Wrote the differences between Browser JavaScript and Node.js in `difference.txt`.
- Prepared the project for GitHub submission.

---

## Problems Faced

### Task No.: Task 3 – Initialize Node Project

### Issue 1: PowerShell Execution Policy Error

**Error:**

```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

**Cause:**

Windows PowerShell was blocking the execution of the npm PowerShell script because of the current execution policy.

**Attempted Solution:**

- Verified that Node.js and npm were installed correctly.
- Used `npm.cmd` instead of `npm` in the VS Code terminal.
- The command worked successfully without changing the execution policy.

---

### Issue 2: EISDIR Error While Creating package.json

**Error:**

```
npm ERR! EISDIR: illegal operation on a directory, open 'C:\Users\23145012\Documents\semester 7\NodeJS-Lab\lab-01\package.json'
```

**Cause:**

A folder named `package.json` had been created accidentally instead of a file.

**Attempted Solution:**

- Deleted the `package.json` folder.
- Executed the command `npm.cmd init -y` again.
- The `package.json` file was created successfully, and the project was initialized without any further issues.

---

## Conclusion

This lab helped me understand the basics of Node.js, including project initialization, writing and executing JavaScript programs using Node.js, working with variables and data types, and using GitHub for version control. It also provided practical experience in identifying and resolving common setup issues during the development process.