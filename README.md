## Lab 03 – Student Directory API

### Student Routes

| Route | Description |
|---|---|
| /students | Returns all students |
| /students/1 | Returns student with ID 1 |
| /students/2 | Returns student with ID 2 |
| /students/99 | Returns "Student not found" |
| /students/course/BCA | Returns all students enrolled in BCA |
| /students/abc | Returns an error because the ID is not numeric |

### Item Routes

| Route | Description |
|---|---|
| /items | Returns all books |
| /items/1 | Returns book with ID 1 |
| /items/2 | Returns book with ID 2 |
| /items/3 | Returns book with ID 3 |
| /items/99 | Returns "Item not found" |

### req.url.split()

`req.url.split('/')` separates the URL into parts using `/` as the separator, and `[2]` extracts the ID from routes such as `/students/2`.

### Array Methods Used

- `find()` is used to find one student or item by ID.
- `filter()` is used to return all students belonging to the BCA course.

### HTTP Status Codes

- `200` – Successful request
- `400` – Invalid request, such as a non-numeric ID
- `404` – Requested student, item, or route was not found

## Problems Faced

No major problems were faced while completing Lab 03.








## Lab 04 – Advanced Search, Filter and Sort API

### Objective

The objective of this lab is to build an advanced REST API using Node.js that supports filtering, partial text searching, sorting, input validation, and the combination of route parameters with query parameters.

### Query Parameters

| Parameter  | Description                                                               | Example                           |
| ---------- | ------------------------------------------------------------------------- | --------------------------------- |
| `course`   | Filters students by course                                                | `/students?course=BCA`            |
| `minMarks` | Returns students whose marks are greater than or equal to the given value | `/students?minMarks=60`           |
| `search`   | Searches student names using a case-insensitive partial match             | `/students?search=an`             |
| `sort`     | Sorts results by `name` or `marks`                                        | `/students?sort=marks`            |
| `order`    | Controls sorting order using `asc` or `desc`                              | `/students?sort=marks&order=desc` |

### Combined Example

`/students?course=BCA&minMarks=60&search=a&sort=marks&order=desc`

The server first applies the course, minimum marks, and name search filters. It then sorts the filtered results according to the requested field and order.

### Bonus Route

The API also supports a course route parameter:

`/students/course/BCA?minMarks=60&sort=marks&order=desc`

In this request, `BCA` is obtained from the route parameter while the remaining values are obtained from the query string.

### Invalid Input Handling

The server validates query parameters before processing the request. If `minMarks` is not a valid number or an invalid sorting field/order is provided, the server returns HTTP status code 400 with a JSON error message instead of crashing or returning incorrect data.

### Problems Faced

No major problems were faced during this lab.

If an issue occurs during testing, it will be documented here with the task number, error, attempted solution, and screenshot where applicable.
