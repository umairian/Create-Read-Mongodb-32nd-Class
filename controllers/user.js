const connection = require("../models");
const mongodb = require("mongodb");

async function post (req, res) {
    try {
        const { name, email, phone_number } = req.body;
        if(!name || !email || !phone_number) {
            return res.status(400).send("Required fields can't be empty")
        }
        const db = await connection();
        const createdUser = await db.collection("users").insertOne({
            name: name,
            email: email,
            phone_number: phone_number
        });

        res.status(200).send({ createdUser: createdUser })
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong!")
    }
}

async function getAll(req, res) {
    try {
        const db = await connection();
        const user = await db.collection("users").findOne({
            // _id: new mongodb.ObjectId("62a893af52b8bdfcbfb012cd")
            name: "Atif"
        });
        res.status(200).send({ user })
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong!")
    }
}

function getSingle(req, res) {
    const { userId } = req.params;
    const result = users[userId];
    if(!result) {
        return res.status(400).send("Invalid user id")
    }
    res.status(200).send({ user: result })
}

function update(req, res) {
    const { name } = req.body;
    const { userId } = req.params;

    const result = users[userId]
    if(!result) {
        return res.status(400).send("invalid user id")
    }
    users[userId] = name;
    res.status(200).send({ users })
}

function deleteUser(req, res) {
    const { userId } = req.params;
    const result = users[userId]
    if(!result) {
        return res.status(400).send("invalid user id")
    }
    users.splice(userId, 1);
    res.status(200).send({ users })
}

module.exports = {
    post,
    getAll,
    getSingle,
    update,
    deleteUser
}