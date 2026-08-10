const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.writeHead(200, { 
            "Content-Type": "text/plain" 
        });

        res.end(
`Welcome to My First Node.js Server

Name: Nisha Bharti
Scholar Number: 23145012
Course: BCA VII`
        );

    }

    else if (req.url === "/about") {

        res.writeHead(200, { 
            "Content-Type": "text/plain" 
        });

        res.end(
"Hello! I am Nisha Bharti, a BCA VII Semester student learning Node.js."
        );

    }

    else if (req.url === "/college") {

        res.writeHead(200, { 
            "Content-Type": "text/plain" 
        });

        res.end(
`College: Dev Sanskriti Vishwavidyalaya
Semester: VII`
        );

    }

    else if (req.url === "/profile") {

        const profile = {
            name: "Nisha Bharti",
            scholarNumber: "23145012",
            course: "BCA",
            semester: "VII",
            college: "Dev Sanskriti Vishwavidyalaya"
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(profile));

    }

    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Page Not Found");

    }

});


server.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});