// import express from 'express';
const express = require('express');

const app = express()

app.listen(3001, () => console.log("api running on 3001"))

app.get('/', (req, res) => res.json('my API Running 👾'))