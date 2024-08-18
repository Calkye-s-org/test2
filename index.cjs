const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');

//Import the Routes
const ReceiveDataRoute = require('./routes/ReceiveData.cjs')
const RemoveDataRoute = require('./routes/RemoveData.cjs')
//Setup Middle Wear
const cors = require('cors')



const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 50 // limit each IP to 50 requests per windowMs
});

app.use(limiter);

app.use(express.json()); // Allows JSON data to be sent to the endpoints
app.use(cors()) // Allows Data to be sent to all the endPoints 

//Setup the Routes
app.use('/receive-data', ReceiveDataRoute)
app.use('/remove-data', RemoveDataRoute)


//Setup the server
app.listen(3000, () => console.log('App is running on port 3000'));
