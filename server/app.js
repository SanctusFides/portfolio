import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
app.use(morgan('tiny'));
// Middleware
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


