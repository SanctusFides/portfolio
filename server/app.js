import express from 'express';
import pkg from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import dotenv from 'dotenv';
import { Resend } from "resend";

dotenv.config(); 
const { Request, Response } = pkg;

const api_key = process.env.API_KEY;
const sender = process.env.SENDER;
const receiver = process.env.RECEIVER;
// Initialize Resend using Api Key from above
const resend = new Resend(api_key);


const app = express();
app.use(morgan('tiny'));
// Middleware
app.use(bodyParser.json());
app.use(cors());


app.post("/api/email", async (req, res) => {
  console.log(req.body);
  
  // const { data, error } = await resend.emails.send({
  //   from: sender,
  //   to: receiver,
  //   subject: '! Contact Form Request !',
  //   html: "<strong>it works!</strong>",
  // });

  // if (error) {
  //   return res.status(400).json({ error });
  // }

  // res.status(200).json({ data });
});



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


// app.post('/api/email', async (req, res) => {
//   // res.send({
//   //   messsage: `API HIT`
//   // })
//   console.log('API HIT');
//   console.log(req.body);
//   try {
//     const {data, error} = await resend.emails.send({
//       from: `${sender}`,
//       to:[`${receiver}`],
//       subject: '! Contact Form Request !',
//       html: 'test',
//     })

//     if (error) {
//       return console.error({ error });
//     }
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// })