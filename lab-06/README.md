# Lab Assignment – 06
## Working With The File System (fs) Module

**Semester:** BCA VII  
**Lab No.:** 06  
**Date:** 25 September 2026

## Objective

This lab demonstrates how Node.js can work with files using the File System (`fs`) module. It covers reading, writing, appending, deleting files, asynchronous and synchronous operations, async/await, and a small command-line Notes App.

## Files and Their Purpose

| File | Description |
|---|---|
| `sample.txt` | Contains sample text used for file reading operations. |
| `read-async.js` | Demonstrates asynchronous file reading using `fs.readFile()`. |
| `read-sync.js` | Demonstrates synchronous file reading using `fs.readFileSync()`. |
| `write-file.js` | Demonstrates writing and overwriting file content using `fs.writeFile()`. |
| `append-file.js` | Demonstrates adding content to an existing file using `fs.appendFile()`. |
| `delete-file.js` | Demonstrates deleting a file using `fs.unlink()`. |
| `async-await-version.js` | Demonstrates file operations using `fs.promises`, async/await, and try/catch. |
| `add-note.js` | Adds a note to `notes.txt` using a command-line argument. |
| `read-notes.js` | Reads and displays notes stored in `notes.txt`. |
| `reflection-notes.txt` | Contains reflections about asynchronous/synchronous reading and the Notes App. |

## Tasks Completed

- Read a file asynchronously using `fs.readFile()`.
- Read a file synchronously using `fs.readFileSync()`.
- Compared asynchronous and synchronous execution.
- Wrote and overwrote file content using `fs.writeFile()`.
- Appended content using `fs.appendFile()`.
- Deleted a file using `fs.unlink()`.
- Used `fs.promises` with async/await.
- Built a command-line Notes App using file storage.
- Added reflection notes about the file system operations.

## Generated Files

The following files were generated while running the programs:

- `output.txt`
- `copy.txt`
- `notes.txt`

## Screenshots

- `read-comparison.png` – Comparison of asynchronous and synchronous file reading.
- `notes-app-output.png` – Output of the command-line Notes App.

## Problems Faced

No major problems were faced while completing the lab. The `ENOENT` error in Task 6 occurred intentionally when `delete-file.js` was run a second time after `output.txt` had already been deleted. This confirmed that Node.js reports an error when trying to delete a file that does not exist.

## Conclusion

This lab helped me understand how Node.js uses the File System module to perform different file operations. I learned the difference between asynchronous and synchronous file reading, along with writing, appending, and deleting files. I also learned how to use async/await with `fs.promises` and created a simple command-line Notes App using file storage.