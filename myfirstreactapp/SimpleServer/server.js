const express = require('express');
const app = express();

app.get('/hey', (res, req) => res.send('GOTEM!'));
app.listen(3001);
