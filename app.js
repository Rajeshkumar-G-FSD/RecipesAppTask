const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', recipeRoutes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/recipes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 100000, // 30 seconds
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
