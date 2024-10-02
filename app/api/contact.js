import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create the Nodemailer transporter using Zoho's SMTP server
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: "contact@tonimichelledesign.com",
        pass: "FVuRtPEW6LAR", // Replace with your Zoho App Password
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: '"Contact Form" <contact@tonimichelledesign.com>', // Sender address
        to: "tm.campbell@outlook.com", // Recipient (your personal email)
        subject: "New Contact Form Submission", // Subject line
        text: `You have a new contact form submission from: 
        Name: ${name}
        Email: ${email}
        Message: ${message}`,
      });

      // Respond with a success message
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
