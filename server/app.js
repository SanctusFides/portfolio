import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { Resend } from "resend";

const api_key = import.meta.env.VITE_RESEND_API_KEY;
const sender = import.meta.env.VITE_SENDER;
const receiver = import.meta.env.VITE_RECEIVER;
// Initialize Resend using Api Key from above

const resend = new Resend(api_key);


const app = express();
app.use(morgan('tiny'));
// Middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/test', async (req, res) => {
  res.send({
    messsage: `API HIT`
  })
  console.log('API HIT');
  console.log(req.body);
  try {
    const {data, error} = await resend.emails.send({
      from: `${sender}`,
      to:[`${receiver}`],
      subject: '! Contact Form Request !',
      html: 'test',
    })

    if (error) {
      return console.error({ error });
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


