const express = require('express')
var cors = require('cors')

const app = express()

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  
  const todos = [
    {
      "userId": 1,
      "id": 1,
      "title": "Clean Room",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Teach Class",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Wash Dishes",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "Do Homework",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "Watch TV",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    
  ];
  
  res.json(todos);
})

app.get('/api', function (req, res) {
  res.send('Hello World at API')
})

const port = 3000;
app.listen(port, () => {
  console.log('API Listening on PORT: ' + port);
});