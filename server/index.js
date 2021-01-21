const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("server has started on PORT 5000")
});