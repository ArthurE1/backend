//llamada a la bd 

const getAllContacts = async (req,res) => {
    //ejecuta alguna funcion 
    try {
      res.status(200).send({
      status: "ok",
      message: "obtenido correctamene ",
      data : [
        {"nombre":"jose","numero": 1234567890} 
      ]
      })
    } catch (error) {
      console.log(error)
      res.status(400).send({

        status: "No se obtuvieron Contactos",
        message: "Hubo Un Error al Obtener contactos ",
        error:error 


      })


    }
}

const createContac = async (req,res) => {}
  try {
    console.log(req.body)
    const {nombre, numero}= req.body 
    console.log(nombre,numero)

    res.status(201).send({
status:"se creo correctamente",
message: "Contacto creado correctamente "
    
    
    })

    } catch (error){
        console.log(error)
      res.status(400).send({
        status: "No se obtuvieron Contactos",
        message: "Hubo Un Error al Obtener contactos ",
        error:error 
    }   )
}

const getContact = async (req,res) => {
    //ejecuta alguna funcion 
    try {
        console.log(req.params)

      const{id}= req.params
      console.log(id)

        res.status(200).send({
          status: "Obtenido Correctamente",
          message: "se recibio correctamente ",
          data: {"nombre ":"Jose","Numero": 99972822}

        })
      
    } catch (error) { 
      res.status(400).send({
        status: "No se obtuvieron Contactos",
        message: "Hubo Un Error al Obtener contactos ",
        error:error 
      
    })
}

const findContact = async(req,res) => {
    try {
      console.log(req.query);
      res.status(200).send({
        status: "Contactos Encontrados",
        message:"Todos los contactos encontrados ",
        data:[
          {"Nombre": "Andres","numero": 99278991},
          {"Nombre": "Andrea","numero": 99278992}
        ]

      })
    } catch (error) {
      res.status(400).send({
        status: "Contactos no encontrados ",
        message: "No se encontraron contactos  ",
        error:error 
        })
  }
  
module.exports = {
    createContac, 
    getAllContacts,
    findContact,
    getContact
}}}