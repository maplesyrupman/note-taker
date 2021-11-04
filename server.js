const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3002;
const app = express();

//add routes here
const noteRoutes = require('./routes/notesRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// use routes
app.use(noteRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})

