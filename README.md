# Note-Taking API

## Overview
A RESTful API for a note-taking application with tag management and complex querying functionality.

## Setup

1. Clone the repository.
   **git clone <repository_url>**
   **cd server**
2. Install Dependencies:
    **npm install**
3. Start the server
    **nodemon**
   

## Endpoints

### Basic Note Operations

- **POST http://localhost:3000/api/notes**
  - Create a new note.
    
- **GET http://localhost:3000/api/notes**
  - Retrieve all notes.
 
- **DELETE http://localhost:3000/api/notes/:id**
  - Delete a note by its ID.
  
- **GET http://localhost:3000/api/notes/:id**
  - Retrieve a single note by its ID.
    
- **PUT http://localhost:3000/api/notes/:id**
  - Update a note by its ID.


### Tag Management

- **PUT http://localhost:3000/api/notes/:id**
  - Add tags to a note.
   
- **DELETE http://localhost:3000/api/notes/:id**
  - Remove tags from a note.

### Querying
- **GET http://localhost:3000/api/query**
  - Retrieve notes based on a logical tag query.
