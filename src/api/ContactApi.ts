import axios from "axios";

// Creating the Type for our form data to be used as the type in our function that creates the email template
export type FormData = {
  name: string;
  email: string;
  message: string;
  date: string;
}

// Todo - need to look into relate limiting so that contact button can't be spammed 

// Using netlify serverless function to handle Resend function for sending email.
const api_url: string = '/.netlify/functions/emailer';

// Need to validate the form details incase anything funky was changed on the source to remove the required checks
export async function contactHandler(formData: FormData) {
  return await axios.post(`${api_url}`, formData);
}

 