import dotnev from 'dotenv';
import express from 'express';

console.clear();
dotnev.config();

const Api = express();
Api.use(express.json());

// Endpoints
// ════════ ⋆★⋆ ════════

// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
Api.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})