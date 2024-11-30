let express = require("express");
let app = express();
let cors = require("cors");

const { log } = require("console");

app.use(express.json());


app.use(cors());

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
app.get("/get", (req, res) => {
  let arr = [
    { name: "anand", age: 25, class: "mcom" },
    { name: "suresh", age: 15, class: "10th" },
    { name: "amit", age: 20, class: "bcom" },
    { name: "omkar", age: 25, class: "mcom" },
  ];
  res.json(arr);
  res.end();
});
