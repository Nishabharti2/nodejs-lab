# Node.js Lab 02 - Building Your First Node.js Server

## Student Details

Name: Nisha Bharti  
Scholar Number: 23145012  
Course: BCA  
Semester: VII  
College: Dev Sanskriti Vishwavidyalaya  

## Lab Number

02

## Date

07 August 2026


## Objective

To understand how Node.js handles HTTP requests using the core http module and create a basic server with multiple routes.


## Routes

| Route | Response |
|------|----------|
| / | Displays welcome message with name, scholar number and course |
| /about | Displays a short introduction |
| /college | Displays college name and semester |
| /profile | Returns student details in JSON format |
| Other routes | Returns 404 Page Not Found |


## How to Run

1. Open terminal inside lab-02 folder.

2. Run:

node server.js

3. Open browser:

http://localhost:3000


## Files

- server.js
- package.json
- README.md
- architecture-notes.txt
- server-running.png
- routes-output.png


## Problems Faced

Task No.: npm initialization

Issue:
PowerShell blocked npm.ps1 execution.

Solution:
Used npm.cmd init -y to create package.json successfully.