import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
    }

    // Create Nodemailer transporter using secure environment variables
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"${process.env.EMAIL_FROM || 'Riwaz Studio'}" <${process.env.EMAIL_USER}>`, 
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Enquiry — ${subject}`,
      text: `
------------------------------------------------
RIWAZ STUDIO
New Contact Form Enquiry
------------------------------------------------

You have received a new enquiry through the Riwaz Studio website.

CLIENT DETAILS

Name:
${name}

Email:
${email}

Phone:
${phone || 'Not provided'}

Subject:
${subject}

MESSAGE

${message}

------------------------------------------------
Riwaz Studio
Website Contact Form Notification
------------------------------------------------
      `,
      html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b0f19; color: #fffcf2; padding: 40px; border-radius: 8px; border: 1px solid #1a1f2e;">
        
        <div style="text-align: center; margin-bottom: 40px;">
          <h1 style="color: #d4af37; font-size: 24px; letter-spacing: 4px; margin: 0; text-transform: uppercase;">RIWAZ STUDIO</h1>
          <p style="color: #9d9db5; font-size: 14px; margin-top: 10px; letter-spacing: 1px;">New Contact Form Enquiry</p>
        </div>
        
        <div style="background-color: #121826; border: 1px solid #1a1f2e; padding: 30px; border-radius: 4px; margin-bottom: 30px;">
          <h2 style="color: #d4af37; font-size: 16px; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid #1a1f2e; padding-bottom: 10px; letter-spacing: 2px;">CLIENT DETAILS</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #9d9db5; width: 100px; font-weight: bold; font-size: 14px;">Name:</td>
              <td style="padding: 10px 0; color: #fffcf2; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #9d9db5; width: 100px; font-weight: bold; font-size: 14px;">Email:</td>
              <td style="padding: 10px 0; color: #fffcf2; font-size: 15px;"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #9d9db5; width: 100px; font-weight: bold; font-size: 14px;">Phone:</td>
              <td style="padding: 10px 0; color: #fffcf2; font-size: 15px;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #9d9db5; width: 100px; font-weight: bold; font-size: 14px;">Subject:</td>
              <td style="padding: 10px 0; color: #fffcf2; font-size: 15px;">${subject}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #121826; border: 1px solid #1a1f2e; padding: 30px; border-radius: 4px;">
          <h2 style="color: #d4af37; font-size: 16px; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid #1a1f2e; padding-bottom: 10px; letter-spacing: 2px;">MESSAGE</h2>
          <p style="color: #fffcf2; line-height: 1.8; font-size: 15px; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 40px; border-top: 1px solid #1a1f2e; padding-top: 20px;">
          <p style="color: #9d9db5; font-size: 12px; margin: 0;">This email was sent securely from the Riwaz Studio Website.</p>
        </div>
      </div>
      `
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    // Return Success Response
    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting Riwaz Studio. Your enquiry has been sent successfully. Our team will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact Form Submission Error:', error);
    
    // We return a generic error message so internal details aren't leaked.
    return res.status(500).json({
      success: false,
      message: 'Unable to send your message right now. Please try again.',
      debug_error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
