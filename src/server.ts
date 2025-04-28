// server.ts
import express from 'express';
import cors from 'cors';
import * as careerApi from './api/careers';

const app = express();

app.use(cors());
app.use(express.json());

// Route handlers
app.get('/api/careers', (req, res) => careerApi.getAll(req, res));
app.post('/api/careers', (req, res) => careerApi.create(req, res));
app.get('/api/careers/:id', (req, res) => careerApi.getById(req, res));
app.delete('/api/careers/:id', (req, res) => careerApi.remove(req, res));

export default app;