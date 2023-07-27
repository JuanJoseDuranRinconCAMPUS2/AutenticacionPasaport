import dotnev from 'dotenv';
import express from 'express';
import session from 'express-session';
import LoginS from './routes/login.js';
import passport from './authentication/pasaport.js';
import auth from "./validators/auth.js";
console.clear();
dotnev.config();

const Api = express();
const key = JSON.parse(process.env.MY_KEY);

// Middleware
Api.use(express.json());
Api.use(express.urlencoded({extended : false}));
Api.use(session({
    secret : key.KeyDiscord,
    resave : false,
    saveUninitialized : false
}));
Api.use(passport.initialize());
Api.use(passport.session());
// Endpoints
// ════════ ⋆★⋆ ════════
Api.use("/Ingreso", (req,res)=>{
    res.sendFile('login.html', { root: './views' })
})
Api.use("/login", passport.authenticate("discord", {failureRedirect : '/', successRedirect : '/perfil'}),LoginS);
Api.use("/perfil", auth,(req, res) =>{
    res.json({
        datos_Discord : req.user
    })
})
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
Api.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})