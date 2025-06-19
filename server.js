const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let users = [];


//api to add user
app.post("/users", (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.json({
        success: false,
        message: "Name and email are required",
      });
    }
    const latestUser = {
      id: uuidv4(),
      name,
      email,
    };
    users.push(latestUser);
     res.json(users);
  } 
  catch (error)
   {
    res.json({ error: "error" });
  }
});

//api to get user details

app.get("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    const getUser = users.find((user) => user.id === id);
    if (!getUser) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json(getUser);
  } catch (error) {
    res.json({ error: "error" });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
