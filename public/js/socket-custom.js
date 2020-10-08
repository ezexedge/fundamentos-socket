
        var socket = io()

        socket.on('connect',function(){
            console.log('conectado con el server')
        })

        socket.on('disconnect',function(){
            console.log('perdimos conexion  con el server')
        })

        socket.emit('enviarMensaje',{
            usuario: 'fernando',
            mensaje: 'hola mundo'
        },function(response){
            console.log('respuesta server', response)
        })

        socket.on('enviarMensaje',function(mensaje){
            console.log(mensaje)
        })