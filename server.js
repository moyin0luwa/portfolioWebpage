const http = require('http');
const fs = require('fs');

//Creating the portfolio server and with the routes
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'} );

    if (request.url === '/'){
        fs.readFile('./home.html', (error, data) => {
            if(error){
                response.writeHead(404)
                response.write('File not found, Kindly check the source code')
            } else {
                response.write(data)
            }
            response.end()
        })
    }

    else if (request.url === '/home'){
        fs.readFile('./home.html', (error, data) => {
            if(error){
                response.writeHead(404)
                response.write('File not found, Kindly check the source code')
            } else {
                response.write(data)
            }
            response.end()
        })
    }

    else if(request.url === '/about'){
        fs.readFile('./about.html', (error, data) => {
            if(error){
                response.writeHead(404)
                response.write('File not found, Kindly check the source code')
            } else {
                response.write(data)
            }
            response.end()
        })
    }

    else if (request.url === '/contact'){
        fs.readFile('./contact.html', (error, data) => {
            if(error){
                response.writeHead(404)
                response.write('File not found, Kindly check the source code')
            } else {
                response.write(data)
            }
            response.end()
        })
    } 

    else{
        response.writeHead(404)
        fs.readFile('./error.html', (error, data) => {
            if(error){
                response.writeHead(404)
                response.write('File not found, Kindly check the source code')
            } else {
                response.write(data)
            }
            response.end()
        })
    }


}); 


//Creating the listening port
server.listen(4000, '127.0.0.1')

//Notifies when server is created
console.log(`Server has been created `)