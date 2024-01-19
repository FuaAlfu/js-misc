require('dotenv').config();
const express = requier('express')
const mongoose = requier('mongoose');
const cors = requier('cors');
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017//mern.todo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connected to database"))
.catch(console.error);

app.get("/",(req, res) => {
    res.send("starter page");
});

app.listen(port, () => console.log(`Servering on ${port}`));