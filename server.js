const  http = require('http');
const url = require('url');
let Bank = require('./bank.js');
let accounts = [];

let bank = new Bank();

bank.addaccount("juan",1000);
bank.addaccount("pedro",1000);

let server = http.createServer((req, res) => {

   let urlData = url.parse(req.url, true);
   let datetime = new Date();
   let amount =  urlData.query.amount;
   let user =  urlData.query.user;
   if(urlData.pathname === "/api/deposit"){
    bank.dooperation(user,"deposito",amount);    
   }else if (urlData.pathname === "/api/withdraw"){
    bank.dooperation(user,"extraccion",amount);        
   }
   res.writeHead(200);       
   res.end();
});

server.listen(9000);

module.exports = server
