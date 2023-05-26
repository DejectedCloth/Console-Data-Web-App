const app = require('./app');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 8000; 
const db = process.env.DATABASE; 

mongoose.connect(db, {
}).then(connection => {
    console.log(`db is successful`); 
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});