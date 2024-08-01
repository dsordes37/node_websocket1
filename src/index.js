const WebSocket=require('ws');
const http=require('http');

const server=http.createServer();
const wsServer= new WebSocket.Server({server})

wsServer.on('connection', (ws)=>{
    console.log('conectado')
    
    ws.on('message', (message)=>{
        console.log(`${message}`);

        wsServer.clients.forEach((client)=>{
            if(client.readyState===WebSocket.OPEN){
                ws.send(message)
            }
        })
    })

    ws.on('close', ()=>{
        console.log('desconectou.')
    })
    
})



server.listen(8080, ()=>{
    console.log('o server está escutando na porta 8080.')
})