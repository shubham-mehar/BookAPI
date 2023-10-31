# Book API

## Video demonstration

https://youtu.be/bhAvIb4dtH0

## API Endpoints and Usage

- `POST /books`: Create a new book
  - Request Body: { "title": "Book Title", "author": "Author Name", "summary": "Book Summary" }

- `GET /books`: Get a list of all books

- `GET /books/:id`: Get details of a specific book by ID

- `PUT /books/:id`: Update a book's details
  - Request Body: { "title": "Updated Title", "author": "Updated Author", "summary": "Updated Summary" }

- `DELETE /books/:id`: Delete a book

## Setup and Run Locally

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB Atlas connection string
4. Run the application: `npm start`
