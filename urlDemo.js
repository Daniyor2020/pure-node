import url from 'url';

const myURL = new URL('https://www.google.com/search?q=javascript');

// console.log(myURL);

// console.log(myURL.host);
// console.log(myURL.pathname);
// console.log(myURL.search);

// console.log(myURL.searchParams.get('q'));

// console.log(url.parse('https://www.google.com/search?q=javascript'));

// console.log(url.format({
//     protocol: 'https',
//     host: 'www.google.com',
//     pathname: '/search',
//     query: {
//         q: 'javascript'
//     }
// }));


console.log(url.fileURLToPath(import.meta.url));

const  params = new URLSearchParams('https://www.google.com/search?q=javascript');
console.log(params.get('id'));