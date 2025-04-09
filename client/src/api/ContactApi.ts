import axios from "axios";
import { Resend } from "resend";

// Using a .env file to store the url for our API request that handles sending the email 
const api_url: string = import.meta.env.VITE_API_EMAIL_URL;

// Creating the Type for our form data to be used as the type in our function that creates the email template
export type FormData = {
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
Contact Date: ${formData.date}

Body:
${formData.message}
`;

// Need to validate the form details incase anything funky was changed on the source to remove the required checks
export async function contactHandler(formData: FormData) {
  axios.post(`${api_url}`, formData);
}

 