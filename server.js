const express = require('express');

const app = express();

app.use(express.json());

const userRouter = require('./routes/user');
app.use("/api/users", userRouter);

app.listen(4000);