# Simple REST API

A simple REST API for adding user and getting user by id .

## Technologies Used
- **Programming Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **UUID Generation**: uuid package for unique id generation



## How to Run
1.   open vs code
2.  open terminal
3. Clone the repository:
git clone https://github.com/altodevelop/REST-API.git
5. type npm install to install dependencies 
6. type npm run dev to run server.js file

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}

curl http://localhost:3000/users/2fcd8ab9-3f00-455f-a037-7cbef5c1cc67