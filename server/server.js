const express = require("express");
const app = express();
const bodyParser = require('body-parser');
require('./config/config');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
/*use son midelwers son unas funciones que se van a disparar cada que pase el código por aquí*/
app.use(bodyParser.json())

app.get("/Usuario", function (req, res) {
  res.json("get usuario");
});

app.post("/Usuario", function (req, res) {

  let body = req.body;


  if(body.nombre === undefined) {
      res.status(400).json({
          ok: false,
          mensaje:  'El nombre es necesario'
      });
  } else {
    res.json({
        usuario: body
    });
  }
  
});

app.put("/Usuario/:id", function (req, res) {
  let id = req.params.id;

  res.json({
    id,
  });
});

app.delete("/Usuario", function (req, res) {
  res.json("delete usuario");
});

app.listen(process.env.PORT, () => {
  console.log("Escuchenado puerto:", process.env.PORT);
});
