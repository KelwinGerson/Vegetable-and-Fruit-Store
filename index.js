const fs = require('fs')
const http = require('http');
const url  = require('url');
const replaceTemplate = require('./modules/replaceTemplate')

const pathTxt = 'C:/Users/Kelwi/OneDrive/2022/Estudos/Udemy/Node.js,Express,MongoDB,etc/complete-node-bootcamp/1-node-farm/starter' // PATH DATA

const tempOverview = fs.readFileSync(`${pathTxt}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${pathTxt}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${pathTxt}/templates/template-product.html`, 'utf-8')

// LOAD THE DATA IN METHOD SYNC
const data = fs.readFileSync('C:/Users/Kelwi/OneDrive/2022/Estudos/Udemy/Node.js,Express,MongoDB,etc/complete-node-bootcamp/1-node-farm/starter/dev-data/data.json', 'utf-8'); 

// /* ------------------------------------------------- SERVER ------------------------------------------------- */ //

const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
  
    // Overview page
    if (pathname === '/' || pathname === '/overview') {
      res.writeHead(200, {
        'Content-type': 'text/html'
      });
  
      const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
      const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
      res.end(output);
  
      // Product page
    } else if (pathname === '/product') {
      res.writeHead(200, {'Content-type': 'text/html'});
      // Retrieving an element based on a query string
      const product = dataObj[query.id];
      const output = replaceTemplate(tempProduct, product);
      res.end(output);
  
      // API
    } else if (pathname === '/api') {
      res.writeHead(200, {
        'Content-type': 'application/json'
      });
      res.end(data);
  
      // Not found
    } else {
      res.writeHead(404, {
        'Content-type': 'text/html' ,
        'my-own-header': 'hello-world',
      });
      res.end('<h1>Page not found!</h1>');
    }
  });
  
  server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
  });