import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',').filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.length === 0) {
        callback(null, true);
        return;
      }
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  }),
);
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, company, service, budget, message } = req.body;

  if (!name || !email || !message) {
    res.status(422).json({ message: 'Missing required fields' });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT ?? process.env.SMTP_USER,
      subject: `New inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || '—'}</p>
        <p><strong>Service:</strong> ${service || '—'}</p>
        <p><strong>Budget:</strong> ${budget || '—'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.json({ message: 'Message sent' });
  } catch (error) {
    console.error('Email error', error);
    res.status(500).json({ message: 'Unable to send email right now' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
});

