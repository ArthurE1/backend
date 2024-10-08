const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const { 
  createContac,
  getAllContacts,
  findContact,
  getContact
} = require('./controlers/contacts.controller');


//Metodo get 
app.get('/contactos', getAllContacts);

//Metodo GET PARAMS
app.get('/contactos', getContact )

//Metodo GET QUERY
app.get('/searchcontactos/id:', findContact)

// Método POST
app.post('/contactos', createContac)

//app.post('/', (req, res) => {
  //console.log(req.body);
  //res.send('ok');
//});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
