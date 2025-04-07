import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import posts from './routes/api/posts';

const app = express();
app.use(morgan('tiny'));
// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


