export const handler = async (event) => {
  console.log('Inside netlify funct handler');
  const RESEND_API_KEY = process.env.VITE_RESEND_API_KEY;
  const body = JSON.parse(event.body);
  const name = body.name;
  const email = body.email;
  const message = body.message;
  const timestamp = new Date().toLocaleString();
  // return {
  //   statusCode: 200,
  //   headers:{
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "*",
  //   "Access-Control-Allow-Headers": "*",
  //   },
  //   body: 'Hello from Lambda!',
  // }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'contact@johnhin.es',
      to: ['jhn.hines@gmail.com'],
      subject: '! Contact Form Request !',
      html: `
        <strong>Contact Name</strong>: ${name}
        <br>
        <strong>Contact Email:</strong> ${email}
        <br>
        <strong>Contact Date:</strong> ${timestamp}
        <br>
        <strong>Message:</strong>
        <br>
        ${message}
        `,
    }),
  });
  if (res.ok) {
    return {
      statusCode: 200,
      body: 'works!',
    };
  }
};