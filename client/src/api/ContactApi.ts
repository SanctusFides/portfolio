import axios from "../../node_modules/axios/index.cjs";

// Creating the Type for our form data to be used as the type in our function that creates the email template
export type FormData = {
  name: string;
  email: string;
  message: string;
  date: string;
};

// Using a .env file to store the API key and email addresses for sending and receiving the emails sent from Resend 
// const api_url: string = import.meta.env.VITE_API_EMAIL_URL;
const api_url: string = '/.netlify/functions/emailer';

// Need to validate the form details incase anything funky was changed on the source to remove the required checks
export async function contactHandler(formData: FormData) {
  return await axios.post(`${api_url}`, formData);
}

