// const http = require('http');
// const cors = require('cors')

// const PORT = 3000;

// const server = http.createServer((req, res,next) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//     if (req.method === 'POST' && req.url === '/') {
//         let data = '';
//         req.on('data', chunk => {
//             data += chunk;
//         });

//         req.on('end', () => {
//             try {
//                 let jsonData = JSON.parse(data);
//                 myname =jsonData
//                 console.log()
//                 console.log(jsonData);
//                 res.writeHead(200, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({ data:jsonData,message: 'Data received successfully' }));
//             } catch (error) {
//                 console.error('Error parsing JSON:', error);
//                 res.writeHead(400, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({ error: 'Invalid JSON data' }));
//             }
//         });
//         // next()
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }})

//     server.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//       });

const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };
  console.log("req.method", req.method);
  // if (req.method === "OPTIONS") {
  //   res.writeHead(204, headers);
  //   res.end();
  //   return;
  // }

  if (req.method === "POST" && req.url === "/") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        let jsonData = JSON.parse(data);
        console.log("jsonData", jsonData);
        res.writeHead(200, headers);
        res.end(
          JSON.stringify({
            data: jsonData,
            message: "Data received successfully",
          })
        );
        return;
      } catch (error) {
        console.error("Error parsing JSON:", error);
        res.writeHead(400, headers);
        res.end(JSON.stringify({ error: "Invalid JSON data" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
