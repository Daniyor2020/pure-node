import {createServer} from 'http';

const PORT = process.env.PORT;

const  users = [
    {
        id: 1,
        name: 'Daniyor'
    },
    {
        id: 2,
        name: 'Bob'
    },
    {
        id: 3,
        name: 'Alice'
    }
];

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}



const server = createServer((req, res) => {
 
   logger(req, res, () => {
    if(req.url === "/api/users"&& req.method === "GET") {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
}else if (req.url.match(/\/api\/users\/\d+/) && req.method === "GET") {
    const id = req.url.split('/')[3];
    const user = users.find(user => user.id === parseInt(id));
    if(user) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
    }else{
        res.setHeader('Content-Type', 'text/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
        res.end();
    }
}

else{
    res.setHeader('Content-Type', 'text/json');
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end();
}
   })
});

server.listen(PORT, () => {
    console.log('Server is running on port 8000');
});
