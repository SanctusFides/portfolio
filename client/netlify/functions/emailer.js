const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;

export const handler = async (event) => {
  // const body = JSON.parse(event.body);
  console.log('Inside handler');
  console.log(event);
  const name = event.name;
  const email = event.email;
  const message = event.message;
  const timestamp = new Date().toLocaleString();
  console.log(name);
  console.log(email);
  console.log(message);
  console.log(timestamp);
  return {
    statusCode: 200,
    headers:{
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    },
    body: 'Hello from Lambda!',
  }
  // const res = await fetch('https://api.resend.com/emails', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${RESEND_API_KEY}`,
  //   },
  //   body: JSON.stringify({
  //     from: 'contact@johnhin.es',
  //     to: ['jhn.hines@gmail.com'],
  //     subject: '! Contact Form Request !',
  //     html: `
  //       <strong>Contact Name</strong>: ${name}
  //       <br>
  //       <strong>Contact Email:</strong> ${email}
  //       <br>
  //       <strong>Contact Date:</strong> ${timestamp}
  //       <br>
  //       <strong>Message:</strong>
  //       <br>
  //       ${message}
  //       `,
  //   }),
  // });
  
  // if (res.ok) {
  //   const data = await res.json();
  //   console.log("res was okay");
  //   console.log(data.body);
  //   return {
  //     statusCode: 200,
  //     headers:{
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "*",
  //       "Access-Control-Allow-Headers": "*",
  //     },
  //     body: data,
  //   };
  // }
};