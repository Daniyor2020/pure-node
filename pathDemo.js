import path from 'path';
import url from 'url';

// const filePath = './dir1/dir2/file.txt';

// basename - returns the last part of the path
// console.log(path.basename(filePath));

// dirname - returns the directory name
// console.log(path.dirname(filePath));

// extname - returns the file extension
// console.log(path.extname(filePath));

// parse - returns an object with all the parts of the path
// console.log(path.parse(filePath));

// join - returns the joined path
// console.log(path.join('dir1', 'dir2', 'file.txt'));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// join()
const filePath = path.join(__dirname, 'public', 'index.html');
console.log(filePath);