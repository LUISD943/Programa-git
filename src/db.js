const mongoose = require('mongoose');

const conexionDB = async () =>{
   try {
    const DB = await mongoose.connect('mongodb://localhost:27017/clientes',
    { useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Conexion exitosa a la BD", DB.connection.name);
    }catch {
        console.log(error)
    }
}

module.exports = conexionDB;
