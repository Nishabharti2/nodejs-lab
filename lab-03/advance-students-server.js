const http = require("http");

const students = [
    // BCA Students
    { id: 1, name: "Aditya", course: "BCA" },
    { id: 2, name: "Ayush", course: "BCA" },
    { id: 3, name: "Bhaskar", course: "BCA" },
    { id: 4, name: "Gauri", course: "BCA" },
    { id: 5, name: "Kanak", course: "BCA" },
    { id: 6, name: "Nisha", course: "BCA" },
    { id: 7, name: "Pragya", course: "BCA" },
    { id: 8, name: "Rishab", course: "BCA" },
    { id: 9, name: "Sudhanshu", course: "BCA" },
    { id: 10, name: "Shreya", course: "BCA" },
    { id: 11, name: "Mikki", course: "BCA" },
    { id: 12, name: "Yadev", course: "BCA" },
    { id: 13, name: "Shreya Kashyap", course: "BCA" },

    // BIT Students
    { id: 14, name: "Dolly", course: "BIT" },
    { id: 15, name: "Pragya Maurya", course: "BIT" },
    { id: 16, name: "Akansha", course: "BIT" },
    { id: 17, name: "Sneha", course: "BIT" },
    { id: 18, name: "Sakshi", course: "BIT" },
    { id: 19, name: "Minakshi", course: "BIT" },
    { id: 20, name: "Gaurav", course: "BIT" },
    { id: 21, name: "Sanskriti", course: "BIT" },
    { id: 22, name: "Saroj", course: "BIT" },
    { id: 23, name: "Amit", course: "BIT" },

    // Yoga Students
    { id: 24, name: "Muskan", course: "Yoga" },
    { id: 25, name: "Himani", course: "Yoga" },
    { id: 26, name: "Saloni", course: "Yoga" },
    { id: 27, name: "Vasundhara", course: "Yoga" },
    { id: 28, name: "Anamika", course: "Yoga" },
    { id: 29, name: "Pallavi", course: "Yoga" },
    { id: 30, name: "Jyoti", course: "Yoga" },
    { id: 31, name: "Riya", course: "Yoga" },
    { id: 32, name: "Hina", course: "Yoga" },
    { id: 33, name: "Mina", course: "Yoga" },
    { id: 34, name: "Tina", course: "Yoga" },
    { id: 35, name: "Mohan", course: "Yoga" },
    { id: 36, name: "Rakesh", course: "Yoga" },
    { id: 37, name: "Sonu", course: "Yoga" }
];

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    // Show all students
    if (req.url === "/students") {
        res.end(JSON.stringify(students));
    }

    // Search students
    else if (req.url.startsWith("/search")) {

        const url = new URL(req.url, "http://localhost:3000");
        const searchQuery = url.searchParams.get("q");

        if (!searchQuery) {
            res.writeHead(400);
            res.end(JSON.stringify({
                error: "Please provide a search query."
            }));
            return;
        }

        const query = searchQuery.toLowerCase();

        const results = students.filter(student =>
            student.name.toLowerCase().includes(query) ||
            student.course.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            res.end(JSON.stringify(results));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({
                error: "No students found."
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
    console.log("Advanced Student Directory running on port 3000");
});