import dotnev from 'dotenv';
import express from 'express';
import session from 'express-session';
import LoginS from './routes/login.js';
console.clear();
dotnev.config();

const Api = express();
const key = JSON.parse(process.env.MY_KEY);
Api.use(express.json());
Api.use(express.urlencoded({extended : false}));
Api.use(session({
    secret : key.KeyDiscord,
    resave : false,
    saveUninitialized : false
}))
// Endpoints
// ════════ ⋆★⋆ ════════
Api.use("/login", LoginS);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
Api.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})