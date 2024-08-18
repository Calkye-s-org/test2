const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');

//Import the Routes
const ReceiveDataRoute = require('./routes/ReceiveData.cjs')
const RemoveDataRoute = require('./routes/RemoveData.cjs')



const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 50 // limit each IP to 50 requests per windowMs
});
//Setup Middle Wear
const cors = require('cors')
app.use(limiter);

app.use(express.json()); // Allows JSON data to be sent to the endpoints
app.use(cors()) // Allows Data to be sent to all the endPoints 

//Setup the Routes
app.use('/receive-data', ReceiveDataRoute)
app.use('/remove-data', RemoveDataRoute)


//Setup the server
port = 3001
app.listen(port, () => console.log(`App is running on port ${port}`));
