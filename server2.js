import { createServer } from 'http';

const PORT = process.env.PORT;

const users = [
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


// JSON Midleware

const jsonMiddleware = (req, res, next) => {
    if (req.headers['content-type'] === 'application/json') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            req.body = JSON.parse(body);
            next();
        });
    } else {
        next();
    }
}


const getUsersHandler = (req, res) => {
res.write(JSON.stringify(users));
    res.end();
}

const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        res.write(JSON.stringify(user));
        res.end();
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }));
        res.end();
    }
}

// not found user handler

const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
}


const server = createServer((req, res) => {

    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/users') {
                getUsersHandler(req, res);
            } else if (req.url.startsWith('/users/')) {
                getUserByIdHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        }) 
    })
});

server.listen(PORT, () => {
    console.log('Server is running on port 8000');
});
