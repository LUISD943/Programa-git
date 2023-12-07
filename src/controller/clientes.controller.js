const Cliente = require("./../models/Cliente");

exports.obtenerClientes = async (req, res)=>{
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.json(error)
    }
};

exports.agregarClientes = async(req, res) =>{
    try {
        const {nombre, correo} = req.body;
        console.log(nombre)

        if(nombre && correo){
            const nuevoCliente = new Cliente({ nombre, correo })
            await nuevoCliente.save();
            res.json({
                status: 'ok',
                code: 200,
                message: 'Documento insertado correctamente', id: nuevoCliente._id
            });
        }else{
            res.json({
                status: 'error',
                code: 400,
                message: 'Los datos son requeridos'
            })
        }

    }catch (error) {
        res.json(error)
    }
};

exports.actualizarClientes = async (req, res) =>{
    try {
        const id = req.params.id;
        const data = req.body;

    if(id && data){
        await Cliente.findByIdAndUpdate(id, data);
        res.json({
            status: 'ok',
            code: 200,
            message: 'Cliente actualizado'
        });
    }else{
        res.json({
            status: 'error',
            code: 400,
            message: 'El Cliente no se pudo actualizar'
        })
    }
   } catch (error) {
    res.json({
        status: 'error',
        code: 400,
        message: 'El Cliente no se pudo actualizar'
    })
}
};

exports.eliminarClientes = async (req, res) =>{
    try {
        const id = req.params.id;
        const eliminado = await Cliente.findByIdAndDelete(id)
        res.json("Cliente Eliminado")
    } catch (error) {
        es.json(error)
    }

}