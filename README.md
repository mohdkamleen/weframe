# Wefreame task assignment 

## Credential of my task 

- Technology (node js)
- Libs (express, cors, mongoose, nodemon, dotenv)
- Tools (Vs code, Chrome) 

## Installation

- Clone repo from github or download zip file
- install the packages 
```sh
npm install
npm run dev
(or)
npm start
after that open  127.0.0.1:8000
```
    
    
## Api's for task
 
| Title | URL |
| ------ | ------ |
| Landing | [https://weframe.onrender.com] |
| GetAll | [https://weframe.onrender.com/api/task][get] |
| GetById | [https://weframe.onrender.com/api/task/{id}][get] |
| Add | [https://weframe.onrender.com/api/task/add][post] | 
| Update | [https://weframe.onrender.com/api/task/{id}][patch] | 
| UpdateStatus | [https://weframe.onrender.com/api/task/updateStatus/{id}][patch] | 
| Delete | [https://weframe.onrender.com/api/task/{id}][delete] | 

# Add Task
## request 

```sh
{
  "title":"Create html page",
  "description":"Make simple about page thats includes multiple images and some content.",
  "assignedUser":"User xyz",
  "dueTo" : "30 Nov 2023",
  "status":[{"title":"Created","date":"1 hour ago"}]
}
```
## response
```sh
{
  "title": "Create html page",
  "description": "Make simple about page thats includes multiple images and some content.",
  "assignedUser": "User xyz",
  "dueTo": "30 Nov 2023",
  "status": [
    {
      "title": "Created",
      "date": "1 hour ago"
    }
  ],
  "_id": "656335d39b6f9df4ea612576"
}
```
# Update Task

## request
```sh 
{ 
  "description":"Make simple about page also contact thats includes multiple images and some content.", 
  "dueTo" : "02 dec 2023"
}
```

## response 
```sh
{
  "_id": "656335d39b6f9df4ea612576",
  "title": "Create html page",
  "description": "Make simple about page thats includes multiple images and some content.",
  "assignedUser": "User xyz",
  "dueTo": "30 Nov 2023",
  "status": [
    {
      "title": "Created",
      "date": "1 hour ago"
    }
  ],
  "createdAt": "2023-11-26T12:10:59.861Z",
  "updatedAt": "2023-11-26T12:10:59.861Z",
  "__v": 0
}
```
 
 # Update Task Status
 ## request
```sh
  {
      "title": "Running",
      "date": "5 min ago"
  } 
```

## response
```sh
{
  "_id": "656335d39b6f9df4ea612576",
  "title": "Create html page",
  "description": "Make simple about page also contact thats includes multiple images and some content.",
  "assignedUser": "User xyz",
  "dueTo": "02 dec 2023",
  "status": [
    {
      "title": "Created",
      "date": "1 hour ago"
    },
    {
      "title": "Running",
      "date": "5 min ago"
    }
  ],
  "createdAt": "2023-11-26T12:10:59.861Z",
  "updatedAt": "2023-11-26T12:44:15.769Z",
  "__v": 0
}
```
 
