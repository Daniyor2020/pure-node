import fs from 'fs/promises'


// read file
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// readFileSync
// try {
//     console.log(" readFileSync=",fs.readFileSync('./test.txt', 'utf-8'));
// } catch (error) {
//     console.log(error);
// }


// readFile() with promises

// fs.readFile('./test.txt', 'utf-8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// async await
async function main() {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);

    } catch (error) {
        console.log(error);
    }
   
}

// writeFile() 

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello World');
    } catch (error) {
        console.log(error);
    }
}


// appendFile()

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\n new text added to the file');
    } catch (error) {
        console.log(error);
    }
}


// writeFile();
appendFile();
main(); 
