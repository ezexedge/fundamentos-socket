const {io} = require('../server')

io.on('connection',(client)=>{
    console.log('usuario conectado')

    client.emit('enviarMensaje',{
        usuario: 'administrador',
        mensaje: 'bienvenido al chat'
    })

    client.on('disconnect', ()=>{
        console.log('usuario desconectod')
    })

    client.on('enviarMensaje', (data,callback)=> {
        console.log(data)

        
        //le envio a todos el mensjae con esta funcion
        client.broadcast.emit('enviarMensaje',data)

        //if(mensaje.usuario){
          //  callback({
            //    response: 'todo salio bien'
           // })
        //}else{
         //   response: 'todo salio mal'
       // }
    })
})
