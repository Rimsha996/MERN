const express = require('express');

const app = express();

app.get('/', (req,res) => res.send('API Running'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`server started on port ${PORT}` )) // do something you want to do on server start