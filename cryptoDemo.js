 import crypto from 'crypto';
//  const hash = crypto.createHash('sha256');
//  hash.update('Hello World');
//  console.log(hash.digest('hex'));

//  crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
//     console.log(derivedKey.toString('hex'));
//   });

//   crypto.randomBytes(16, (err, buf) => {
//     console.log(buf.toString('hex'));
//   });


const algorithm = 'aes-256-ctr';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);   

let encrypted = cipher.update('Hello World');
encrypted = Buffer.concat([encrypted, cipher.final()]);

console.log(encrypted.toString('hex')); 

const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = decipher.update(encrypted);
decrypted = Buffer.concat([decrypted, decipher.final()]);

console.log(decrypted.toString());