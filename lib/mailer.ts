import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail", // or use SMTP provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendAlert(to: string, site: string) {
  await transporter.sendMail({
    from: `"Uptime Monitor" <${process.env.EMAIL_USER}>`,
    to,
    subject: `🚨 Website Down: ${site}`,
    text: `The website ${site} appears to be DOWN.`,
  });
}
