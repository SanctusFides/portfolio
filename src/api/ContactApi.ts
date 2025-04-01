import type { Request, Response } from "express";
import { Resend } from "resend";

// Using a .env file to store the API key and email addresses for sending and receiving the emails sent from Resend 
const api_key = import.meta.env.VITE_RESEND_API_KEY;
const sender = import.meta.env.VITE_SENDER;
const receiver = import.meta.env.VITE_RECEIVER;
// Initialize Resend using Api Key from above
const resend = new Resend(api_key);

// Creating the Type for our form data to be used as the type in our function that creates the email template
type FormData = {
  name: string;
  email: string;
  message: string;
  date: string;
}
// Using the form structure, construct a string literal to format and plug in the form values. 
// Date aspect is currently temporary just to get in the current one, but saw a great idea about capturing time at submission
// to use for rate-limiting the submit button. So will most likely follow that example and use that as this value
const createEmail = (formData: FormData) => `
Contact Name: ${formData.name}
Contact Email: ${formData.email}
Contact Date: ${new Date().toLocaleString()}

Body:
${formData.message}
`;

export const pVar = () => {
  console.log(sender);
  
}

export default async function handler(req: Request, res: Response) {
  try {
    const {data, error} = await resend.emails.send({
          from: `${sender}`,
          to:[`${receiver}`],
          subject: '! Contact Form Request !',
          html: 'test',
        });
    
        if (error) {
          return console.error({ error });
        }
        console.log(data);
  } catch (error) {
    
  }
}

// Need to validate the form details incase anything funky was changed on the source to remove the required checks
 

// async function handleEmailing(req: IncomingMessage, res: ServerResponse) {
//   try {
    
//   } catch (error) {
//     // If error is caught, create a response for generic server error and return it
//     res.setHeader('Content-Type', 'text/html');
//     res.writeHead(500,'Error Occured - Unable to send message');
//     res.end();
//     return res;
//   }
// } 