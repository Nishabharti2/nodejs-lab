const http = require('http');
const url = require('url');

const students = [
    { id: 1, name: "Aman", course: "BCA", marks: 72 },
    { id: 2, name: "Chandan", course: "BCA", marks: 85 },
    { id: 3, name: "Sanya", course: "BBA", marks: 91 },
    { id: 4, name: "Priya", course: "BCA", marks: 58 },
    { id: 5, name: "Rahul", course: "BBA", marks: 64 },
    { id: 6, name: "Anjali", course: "BCA", marks: 78 },
    { id: 7, name: "Rohan", course: "BBA", marks: 45 },
    { id: 8, name: "Neha", course: "BCA", marks: 95 },
    { id: 9, name: "Arjun", course: "BBA", marks: 69 }
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Support /students and /students/course/BCA
    let results = [...students];
    let courseFilter = query.course;

    // Bonus route: /students/course/BCA
    const courseRouteMatch = pathName.match(/^\/students\/course\/([^\/]+)$/);

    if (courseRouteMatch) {
        courseFilter = courseRouteMatch[1];
    }

    // Check valid route
    if (pathName !== '/students' && !courseRouteMatch) {
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: "Route not found"
        }));
        return;
    }

    // Course filter
    if (courseFilter) {
        results = results.filter(student =>
            student.course.toLowerCase() === courseFilter.toLowerCase()
        );
    }

    // Validate minMarks
    if (query.minMarks !== undefined) {
        const minMarks = Number(query.minMarks);

        if (isNaN(minMarks)) {
            res.statusCode = 400;
            res.end(JSON.stringify({
                error: "minMarks must be a number"
            }));
            return;
        }

        results = results.filter(student => student.marks >= minMarks);
    }

    // Search by name
    if (query.search) {
        const searchText = query.search.toLowerCase();

        results = results.filter(student =>
            student.name.toLowerCase().includes(searchText)
        );
    }

    // Validate sorting field
    if (query.sort !== undefined) {
        if (query.sort !== 'name' && query.sort !== 'marks') {
            res.statusCode = 400;
            res.end(JSON.stringify({
                error: "sort must be either 'name' or 'marks'"
            }));
            return;
        }

        const order = query.order ? query.order.toLowerCase() : 'asc';

        if (order !== 'asc' && order !== 'desc') {
            res.statusCode = 400;
            res.end(JSON.stringify({
                error: "order must be either 'asc' or 'desc'"
            }));
            return;
        }

        results.sort((a, b) => {
            let comparison;

            if (query.sort === 'name') {
                comparison = a.name.localeCompare(b.name);
            } else {
                comparison = a.marks - b.marks;
            }

            return order === 'desc' ? -comparison : comparison;
        });
    }

    res.statusCode = 200;
    res.end(JSON.stringify(results, null, 2));
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});