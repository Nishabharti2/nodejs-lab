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