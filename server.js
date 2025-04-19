import  http from 'http';
const port = process.env.PORT;
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("port=",port);
const server = http.createServer(async(req, res) => {




    try {
        console.log(req.url);

        if(req.method === "GET"){
            let filePath;

            if(req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');

               
            }else if(req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            }else{
                throw new Error('Page not found');
            
            }
            const data  = await fs.readFile(filePath, 'utf-8');

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }else{
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end(error.message);
       
    }
  

 

});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});