const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', recipeRoutes);
const URL = process.env.DB || "mongodb://localhost:27017";
mongoose.connect(URL);
console.log(URL);

// MongoDB Connection
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 100000, // 30 seconds
    tls: true,
  tlsAllowInvalidCertificates: false, // Set to true only for testing with self-signed certificates
  loggerLevel: 'debug',
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
