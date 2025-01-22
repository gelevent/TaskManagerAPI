const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
require('dotenv').config();

const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 

const taskRoutes = require('./routes/taskRoutes'); 
app.use('/api', taskRoutes); 

const PORT = process.env.PORT || 5000; 

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(() => {
    console.log('Connected to MongoDB'); 
}).catch((err) => {
    console.error('Database connection error:', err); 
});