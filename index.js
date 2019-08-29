import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/index';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
