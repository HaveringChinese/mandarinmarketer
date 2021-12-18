import express from "express";
import cors from "cors";
import https from "https";
import { on } from "events";
import { log } from "console";
const app = express();
const port = 3000;


app.use(cors());

const options = {
  url: "https://api.api-ninjas.com/v1/country?name=China",
  headers: {
  "X-Api-Key": "Wu/9t+LZkLLIqdMMdfD3Gw==M6OSJZzhjOM3pBBM"
  },
};

app.get("/", (req, res) {

  https.get(options, (response) => {
    console.log('statusCode', response.statusCode);
    console.log("headers", response.headers);
    console.log(response);
    res.send("Server is running, m'lord!");
  
    response.on('data', (d) => {
      process.stdout.write(d);
    });
    
    }).on('error', (e) => {
      console.error(e);
      });
  
  });
 


app.listen(port, function() {
console.log("Mandarin Marketer listening on port 3000.");
});