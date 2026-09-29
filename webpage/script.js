/* =========================================
   LAB DATA
========================================= */

const labs = {

    lab01: {

        number: "LAB 01",

        title: "Getting Started with Node.js",

        description:
            "Introduction to Node.js, npm, JavaScript execution and basic Node.js concepts.",

        objective:
            "The objective of this lab is to understand the basic environment of Node.js, verify the installation, execute JavaScript outside the browser and learn the basic Node.js workflow.",

        concepts: [
            "Node.js",
            "npm",
            "JavaScript",
            "Variables",
            "Data Types"
        ],

        tasks: [

            "Install and verify Node.js.",

            "Check the installed Node.js and npm versions.",

            "Create the Node.js laboratory project.",

            "Initialize the project using npm.",

            "Create and execute the first Node.js program.",

            "Practice JavaScript variables and data types.",

            "Understand Browser JavaScript vs Node.js.",

            "Document the laboratory work."
        ],

        files: [
            "app.js",
            "package.json",
            "README.md"
        ],

        code: `console.log("Welcome to Node.js");

const name = "Nisha Bharti";
const course = "BCA";
const semester = "VII";

console.log("Name:", name);
console.log("Course:", course);
console.log("Semester:", semester);`,

        output: `Welcome to Node.js

Name: Nisha Bharti
Course: BCA
Semester: VII`

    },


    lab02: {

        number: "LAB 02",

        title: "Building Your First Node.js Server",

        description:
            "Creating an HTTP server using Node.js core modules and handling different routes.",

        objective:
            "The objective of this lab is to create a basic HTTP server using Node.js and understand requests, responses, routes and status codes.",

        concepts: [
            "HTTP",
            "Server",
            "Routes",
            "Request",
            "Response"
        ],

        tasks: [

            "Create a Node.js server using the HTTP module.",

            "Start the server on port 3000.",

            "Create the home route.",

            "Create the /about route.",

            "Create the /college route.",

            "Create a JSON profile route.",

            "Handle unknown routes using HTTP 404.",

            "Test the server using a browser."
        ],

        files: [
            "server.js",
            "package.json",
            "README.md"
        ],

        code: `const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.end("Welcome to my Node.js Server");

    }

    else if (req.url === "/about") {

        res.end("I am learning Node.js");

    }

    else if (req.url === "/college") {

        res.end("Dev Sanskriti Vishwavidyalaya");

    }

    else {

        res.statusCode = 404;

        res.end("Page Not Found");

    }

});

server.listen(PORT, () => {

    console.log("Server running on port 3000");

});`,

        output: `Server running on port 3000

GET /
→ Welcome to my Node.js Server

GET /about
→ I am learning Node.js

GET /college
→ Dev Sanskriti Vishwavidyalaya

Unknown route
→ 404 Page Not Found`

    },


    lab03: {

        number: "LAB 03",

        title: "Student Directory API",

        description:
            "Creating a Student Directory API using dynamic routes and JSON responses.",

        objective:
            "The objective of this lab is to create an API for student information and understand dynamic routing, JSON responses and handling missing resources.",

        concepts: [
            "API",
            "JSON",
            "Dynamic Routes",
            "Array.find()",
            "404"
        ],

        tasks: [

            "Create student data using JavaScript objects.",

            "Create the /students endpoint.",

            "Return all students as JSON.",

            "Create a dynamic student ID route.",

            "Find a student using Array.find().",

            "Handle a student ID that does not exist.",

            "Return HTTP 404 for missing students.",

            "Test the API endpoints."
        ],

        files: [
            "advance-students-server.js",
            "README.md"
        ],

        code: `const students = [

    {
        id: 1,
        name: "Dolly",
        course: "BCA"
    },

    {
        id: 2,
        name: "Pragay Maurya",
        course: "BCA"
    },

    {
        id: 3,
        name: "Akansha",
        course: "BCA"
    }

];

const student = students.find(
    student => student.id === Number(id)
);`,

        output: `GET /students

→ Returns all students


GET /students/2

→ Returns student with ID 2


GET /students/999

→ 404 Student Not Found`

    },


    lab04: {

        number: "LAB 04",

        title: "Advanced Search, Filter & Sort API",

        description:
            "Implementing search, filtering, sorting, query parameters and validation.",

        objective:
            "The objective of this lab is to create a more advanced API using query parameters for filtering, searching, sorting and validation.",

        concepts: [
            "Query Parameters",
            "Search",
            "Filter",
            "Sort",
            "Validation"
        ],

        tasks: [

            "Create the advanced Node.js server.",

            "Create student records with marks.",

            "Filter students by course.",

            "Filter students using minimum marks.",

            "Combine filters using AND logic.",

            "Search students by partial name.",

            "Sort students by name.",

            "Sort students by marks.",

            "Support ascending and descending order.",

            "Validate invalid query parameters."
        ],

        files: [
            "advanced-server.js",
            "index.html",
            "style.css",
            "script.js"
        ],

        code: `const parsedUrl = url.parse(
    req.url,
    true
);

const query = parsedUrl.query;

let result = [...students];

if (query.course) {

    result = result.filter(
        student =>
        student.course.toLowerCase()
        === query.course.toLowerCase()
    );

}

if (query.minMarks) {

    result = result.filter(
        student =>
        student.marks >= Number(query.minMarks)
    );

}

if (query.search) {

    result = result.filter(
        student =>
        student.name
        .toLowerCase()
        .includes(
            query.search.toLowerCase()
        )
    );

}`,

        output: `/students?course=BCA

→ Students filtered by course


/students?minMarks=70

→ Students with marks ≥ 70


/students?search=an

→ Partial name search


/students?sort=marks&order=desc

→ Marks sorted from high to low


Invalid query

→ HTTP 400`

    },


    lab05: {

        number: "LAB 05",

        title: "Async JavaScript — Food Delivery Tracker",

        description:
            "Understanding asynchronous JavaScript using callbacks, Promises and async/await.",

        objective:
            "The objective of this lab is to understand asynchronous JavaScript through a food delivery example and learn callbacks, Promises and async/await.",

        concepts: [
            "Callbacks",
            "Promises",
            "async/await",
            "Event Loop"
        ],

        tasks: [

            "Create a food delivery scenario.",

            "Understand asynchronous operations.",

            "Implement callback-based execution.",

            "Implement Promise-based execution.",

            "Use async/await.",

            "Observe asynchronous execution order.",

            "Understand how the Event Loop handles asynchronous tasks."
        ],

        files: [
            "JavaScript source files",
            "README.md"
        ],

        code: `function orderFood() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(
                "Order placed successfully."
            );

        }, 1000);

    });

}


async function trackDelivery() {

    console.log(
        "Tracking food delivery..."
    );

    const message =
        await orderFood();

    console.log(message);

    console.log(
        "Delivery process completed."
    );

}

trackDelivery();`,

        output: `Tracking food delivery...

Order placed successfully.

Delivery process completed.`

    },


    lab06: {

        number: "LAB 06",

        title: "Working With The File System (fs) Module",

        description:
            "Reading, writing, appending, deleting and copying files using Node.js fs module.",

        objective:
            "The objective of this lab is to learn how Node.js works with files using the File System module and to understand synchronous, asynchronous and async/await based file operations.",

        concepts: [
            "fs",
            "readFile",
            "writeFile",
            "appendFile",
            "unlink",
            "async/await"
        ],

        tasks: [

            "Read sample.txt asynchronously.",

            "Read sample.txt synchronously.",

            "Write data to output.txt.",

            "Append data to output.txt.",

            "Delete output.txt.",

            "Copy file content using async/await.",

            "Create the add-note.js notes application.",

            "Add timestamped notes.",

            "Read notes using read-notes.js.",

            "Write the required reflection.",

            "Prepare the README file."
        ],

        files: [

            "sample.txt",

            "read-async.js",

            "read-sync.js",

            "write-file.js",

            "append-file.js",

            "delete-file.js",

            "async-await-version.js",

            "add-note.js",

            "read-notes.js",

            "reflection-notes.txt",

            "README.md"

        ],

        code: `// read-async.js

const fs = require("fs");

fs.readFile(
    "sample.txt",
    "utf8",
    (err, data) => {

        if (err) throw err;

        console.log(data);

    }
);

console.log(
    "This line runs BEFORE the file content is printed."
);


// read-sync.js

const data =
    fs.readFileSync(
        "sample.txt",
        "utf8"
    );

console.log(data);

console.log(
    "This line runs AFTER the file has been fully read."
);


// async-await-version.js

const fsPromises =
    require("fs").promises;

async function copyContent() {

    try {

        const data =
            await fsPromises.readFile(
                "sample.txt",
                "utf8"
            );

        await fsPromises.writeFile(
            "copy.txt",
            data
        );

        console.log(
            "Copied successfully."
        );

    }

    catch (err) {

        console.error(
            "Something went wrong:",
            err.message
        );

    }

}

copyContent();`,

        output: `read-async.js

This line runs BEFORE the file content is printed.

Node.js File System Module
This is Lab 06 of BCA VII.
I am learning how Node.js works with files.


read-sync.js

Node.js File System Module
This is Lab 06 of BCA VII.
I am learning how Node.js works with files.

This line runs AFTER the file has been fully read.


async-await-version.js

Copied successfully.`

    }

};


/* =========================================
   OPEN LAB
========================================= */

function openLab(labId) {

    const lab = labs[labId];

    const detailsSection =
        document.getElementById("labDetails");

    const content =
        document.getElementById("labContent");


    content.innerHTML = `

        <div class="lab-title">

            <div class="number">
                ${lab.number}
            </div>

            <h1>
                ${lab.title}
            </h1>

            <p>
                ${lab.description}
            </p>

        </div>


        <div class="detail-grid">


            <!-- OBJECTIVE -->

            <div class="detail-box">

                <h2>
                    Objective
                </h2>

                <p>
                    ${lab.objective}
                </p>

            </div>


            <!-- CONCEPTS -->

            <div class="detail-box">

                <h2>
                    Concepts Covered
                </h2>

                <div class="tags">

                    ${lab.concepts.map(
                        concept =>
                        `<span>${concept}</span>`
                    ).join("")}

                </div>

            </div>


            <!-- TASKS -->

            <div class="detail-box full">

                <h2>
                    Tasks Completed
                </h2>

                <ul class="task-list">

                    ${lab.tasks.map(
                        task =>
                        `<li>${task}</li>`
                    ).join("")}

                </ul>

            </div>


            <!-- FILES -->

            <div class="detail-box">

                <h2>
                    Files
                </h2>

                <div class="file-list">

                    ${lab.files.map(
                        file =>
                        `<span class="file">${file}</span>`
                    ).join("")}

                </div>

            </div>


            <!-- OUTPUT -->

            <div class="detail-box">

                <h2>
                    Output
                </h2>

                <div class="output-box">
                    ${lab.output}
                </div>

            </div>


            <!-- CODE -->

            <div class="detail-box full">

                <h2>
                    Important Code
                </h2>

                <div class="code-box">

                    <pre><code>${escapeHtml(
                        lab.code
                    )}</code></pre>

                </div>

            </div>


        </div>

    `;


    detailsSection.classList.add("show");


    detailsSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   CLOSE LAB
========================================= */

function closeLab() {

    const detailsSection =
        document.getElementById("labDetails");

    detailsSection.classList.remove("show");

    document
        .getElementById("labs")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHtml(text) {

    return text

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}