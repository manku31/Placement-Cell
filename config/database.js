const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect("mongodb+srv://ps1234:ps1234@cluster0.yfl43v3.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB CONNECTED SUCCESSFULLY"))
    .catch((err) => {
      console.log("DB CONNECTION FAILED"); 
      console.log(err);
      process.exit(1);
    });
};

