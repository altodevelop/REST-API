const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

let users = [];

const PORT = process.env.PORT || 3000;

app.post('/users',(req,res)=>{
     try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.json({success:false,message:'Name and email are required'  });
    }

    const newUser = {
      id: uuidv4(),
      name,
      email
    };

    users.push(newUser);
    res.json(users);
  } catch (error) {
    res.json({ error: 'error' });
  }
})

app.get('/users/:id',(req,res)=>{

    try {
    const { id } = req.params;
    const fetchUser = users.find(user => user.id === id);

    if (!fetchUser) {
      return res.json({ error: 'User not found' });
    }

    res.json(fetchUser);
  } catch (error) {
    res.json({ error: ' error' });
  }
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})