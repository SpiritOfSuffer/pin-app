import express from 'express';
import mongoose from 'mongoose';
import * as db from '../utils/db';

const router = express.Router();

db.makeConnection();

router.get('/pins', async (req, res) =>
{
    await db.getPins().then(data => 
    {
        res.send(data);
    });
});

router.post('/pins', async (req, res) =>
{
    await db.createPin(req.body).then(data =>
    {
        res.send(data);
    });
});

router.delete('/pins/:id', async (req, res) =>
{
    await db.deletePin(req.params.id).then(data =>
    {
        res.send(data);
    });
});

export default router;