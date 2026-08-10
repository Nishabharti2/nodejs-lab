const http = require('http');

const students = [
    { id: 1, name: "Aman", course: "BCA" },
    { id: 2, name: "Nandani", course: "BCA" },
    { id: 3, name: "Abhishek", course: "BIT" }
];

const items = [
    { id: 1, name: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, name: "Atomic Habits", author: "James Clear" },
    { id: 3, name: "Ikigai", author: "Hector Garcia" },
    { id: 4, name: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { id: 5, name: "The Psychology of Money", author: "Morgan Housel" }
];

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');

    // Task 2: Get all students
    if (req.url === '/students') {
        res.end(JSON.stringify(students));
    }

    // Bonus: Get students by course
    else if (req.url === '/students/course/BCA') {
        const bcaStudents = students.filter(s => s.course === 'BCA');
        res.end(JSON.stringify(bcaStudents));
    }

    // Task 2 + Bonus: Get student by ID
    else if (req.url.startsWith('/students/')) {

        const idText = req.url.split('/')[2];
        const id = Number(idText);

        // Check for non-numeric ID
        if (isNaN(id)) {
            res.writeHead(400);
            res.end(JSON.stringify({
                error: "Invalid student ID. ID must be a number."
            }));
            return;
        }

        const student = students.find(s => s.id === id);

        if (student) {
            res.end(JSON.stringify(student));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({
                error: "Student not found"
            }));
        }
    }

    // Task 3: Get all items
    else if (req.url === '/items') {
        res.end(JSON.stringify(items));
    }

    // Task 3: Get item by ID
    else if (req.url.startsWith('/items/')) {

        const idText = req.url.split('/')[2];
        const id = Number(idText);

        // Check for non-numeric ID
        if (isNaN(id)) {
            res.writeHead(400);
            res.end(JSON.stringify({
                error: "Invalid item ID. ID must be a number."
            }));
            return;
        }

        const item = items.find(i => i.id === id);

        if (item) {
            res.end(JSON.stringify(item));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({
                error: "Item not found"
            }));
        }
    }

    // Unknown route
    else {
        res.writeHead(404);
        res.end(JSON.stringify({
            error: "Route not found"
        }));
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});