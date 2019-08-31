import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './server/routes/index';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
