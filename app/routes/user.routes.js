module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    // Create a new User
    app.post("/user", user.create);
  
    // Retrieve all user
    app.get("/user", user.findAll);
  
    // Retrieve a single user with userId
    app.get("/user/:id", user.findOne);
  
    // Update a user with userid
    app.put("/user/:id", user.update);
  
    // Delete a user with userid
    app.delete("/user/:id", user.delete);
  
    // Create a new user
    app.delete("/user", user.deleteAll);
  };