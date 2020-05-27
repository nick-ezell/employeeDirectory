const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Listening for deployment env variable to send built app
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}
//React app init
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
  );
}

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
