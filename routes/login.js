import dotenv from 'dotenv';
import mysql from 'mysql2';
import {Router} from 'express';
const LoginS= Router();
dotenv.config();
let con = undefined
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
LoginS.get('/', (req,res)=>{
    res.redirect('/perfil');
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default LoginS;