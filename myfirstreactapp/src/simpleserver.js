const fs = require('fs');

dataDir = './data-received/';
dataFileName = 'data-DATE';

function writeData(dir,fname, data){

	fs.writeFile(dir+fname, data, (err) => {
    	// In case of a error throw err. 
    	if (err) throw err; 
	}) 
}


var http = require('http');
http.createServer((req, res) => {
	console.log(req.method);
    if (req.method === 'POST') {
		let body = '';
		req.on('data', chunk => {
			body += chunk.toString();
		});
		req.on('end', () => {
			console.log("Data: \n"+body);
			console.log("Saving data to file:" + dataDir + dataFileName);
			writeData(dataDir, dataFileName, body);
			res.end('ok');
		});
	}else{	
	res.end(`
        <!doctype html>
        <html>
        <body>
			<h1>Whatcha doin here, friend?</h1>
        </body>
        </html>
    `);
	}	

}).listen(3001);

