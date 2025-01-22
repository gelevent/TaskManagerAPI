const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
require('dotenv').config();

const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 

// Port
const PORT = process.env.PORT || 5000; 

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, // Menggunakan parser URL baru untuk koneksi yang lebih stabil
    useUnifiedTopology: true, // Mengaktifkan engine koneksi terbaru
}).then(() => {
    console.log('Connected to MongoDB'); // Log saat koneksi berhasil
}).catch((err) => {
    console.error('Database connection error:', err); // Log jika terjadi kesalahan
});