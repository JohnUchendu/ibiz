// // // // import { EmailTemplate } from '../../../components/email-template';
// // // import { EmailTemplate } from "@/components/email-template";
// // // import { Resend } from "resend";
// // // import * as React from "react";

// // // const resend = new Resend(process.env.RESEND_API_KEY);

// // // export async function POST() {
// // //   try {
// // //     const { data, error } = await resend.emails.send({
// // //       from: "Acme <mail@mail.ibiz.name.ng>",
// // //       to: ["johnchnd195@gmail.com"],
// // //       subject: "Hello world",
// // //       //   react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
// // //     //   react: <EmailTemplate firstName="John" />,
// // //      react: React.createElement(EmailTemplate, { firstName: "John" }),
// // //     });

// // //     if (error) {
// // //       console.error("Resend error:", error);
// // //       return Response.json({ error }, { status: 500 });
// // //     }

// // //     return Response.json({ data });
// // //   } catch (err: any) {
// // //     return Response.json(
// // //       { error: err.message ?? String(err) },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }









// // import { Resend } from "resend";
// // import { NextResponse } from "next/server";

// // const resend = new Resend(process.env.RESEND_API_KEY);

// // export async function POST() {
// //   try {
// //     const { data, error } = await resend.emails.send({
// //       from: "Acme <mail@mail.ibiz.name.ng>",
// //       to: ["johnchnd195@gmail.com","  kelachichnd@live.com "],
// //       subject: "Hello world - HTML Test",
// //       html: `
// //         <!DOCTYPE html>
// //         <html>
// //           <head>
// //             <title>Test Email</title>
// //           </head>
// //           <body>
// //             <h1 style="color: #2563eb;">Hello John!</h1>
// //             <p>This is a test email with simple HTML.</p>
// //             <p>If this works, then the issue is with React component rendering.</p>
// //           </body>
// //         </html>
// //       `,
// //     });

// //     if (error) {
// //       console.error("Resend error:", error);
// //       return NextResponse.json({ error }, { status: 500 });
// //     }

// //     console.log("✅ Simple HTML email sent successfully:", data);
// //     return NextResponse.json({ 
// //       success: true, 
// //       data,
// //       message: "Simple HTML email sent successfully" 
// //     });
// //   } catch (error: any) {
// //     console.error("Send error:", error);
// //     return NextResponse.json(
// //       { 
// //         error: error.message ?? "Internal server error",
// //         details: "Check Resend API key and configuration" 
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }


// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const bccRecipients = [
//       "kelachichnd@live.com",
//       "cecilialearningacademy@gmail.com",
//     //   "recipient3@example.com",
//       // Add as many as you need
//     ];

//     const { data, error } = await resend.emails.send({
//       from: "Acme <mail@mail.ibiz.name.ng>",
//       to: ["johnchnd195@gmail.com"], // Primary recipient
//       bcc: bccRecipients, // Bulk recipients (hidden from each other)
//       subject: "Bulk Email Test",
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <title>Bulk Email</title>
//           </head>
//           <body>
//             <h1 style="color: #2563eb;">Hello Team!</h1>
//             <p>This is a bulk email sent to multiple recipients.</p>
//             <p>Each recipient will not see others' email addresses.</p>
//           </body>
//         </html>
//       `,
//     });

//     if (error) {
//       console.error("Resend error:", error);
//       return NextResponse.json({ error }, { status: 500 });
//     }

//     console.log("✅ Bulk email sent successfully to", bccRecipients.length + 1, "recipients");
//     return NextResponse.json({ 
//       success: true, 
//       data,
//       recipients_count: bccRecipients.length + 1
//     });
//   } catch (error: any) {
//     console.error("Send error:", error);
//     return NextResponse.json(
//       { error: error.message ?? "Internal server error" },
//       { status: 500 }
//     );
//   }
// }


// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const recipients = [
//       "johnchnd195@gmail.com",
    
//     ];

//     const results = [];
    
//     for (const recipient of recipients) {
//       const { data, error } = await resend.emails.send({
//         from: "Acme <mail@mail.ibiz.name.ng>",
//         to: [recipient],
//         subject: "🎉 Welcome to Our Community!",
//         html: `
//           <!DOCTYPE html>
//           <html>
//           <head>
//             <meta charset="utf-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Welcome Email</title>
//           </head>
//           <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
//             <!-- Main container -->
//             <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f4f4f4">
//               <tr>
//                 <td align="center" style="padding: 40px 0;">
//                   <!-- Content container -->
//                   <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="max-width: 600px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
//                     <!-- Header -->
//                     <tr>
//                       <td bgcolor="#2563eb" style="padding: 30px; text-align: center;">
//                         <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Acme! 🚀</h1>
//                       </td>
//                     </tr>
                    
//                     <!-- Content -->
//                     <tr>
//                       <td style="padding: 40px 30px;">
//                         <h2 style="color: #1f2937; margin-top: 0;">Hello there! 👋</h2>
//                         <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
//                           We're thrilled to have you join our community. Get ready for exclusive updates, 
//                           special offers, and valuable content delivered straight to your inbox.
//                         </p>
                        
//                         <!-- Feature boxes -->
//                         <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0;">
//                           <tr>
//                             <td width="33%" align="center" style="padding: 15px;">
//                               <div style="background-color: #fbbf24; color: #78350f; padding: 20px; border-radius: 8px; text-align: center;">
//                                 <h3 style="margin: 0; font-size: 16px;">✨ Exclusive</h3>
//                                 <p style="margin: 10px 0 0 0; font-size: 14px;">Special offers</p>
//                               </div>
//                             </td>
//                             <td width="33%" align="center" style="padding: 15px;">
//                               <div style="background-color: #10b981; color: #064e3b; padding: 20px; border-radius: 8px; text-align: center;">
//                                 <h3 style="margin: 0; font-size: 16px;">📈 Insights</h3>
//                                 <p style="margin: 10px 0 0 0; font-size: 14px;">Valuable content</p>
//                               </div>
//                             </td>
//                             <td width="33%" align="center" style="padding: 15px;">
//                               <div style="background-color: #8b5cf6; color: white; padding: 20px; border-radius: 8px; text-align: center;">
//                                 <h3 style="margin: 0; font-size: 16px;">🎯 Updates</h3>
//                                 <p style="margin: 10px 0 0 0; font-size: 14px;">Latest news</p>
//                               </div>
//                             </td>
//                           </tr>
//                         </table>
                        
//                         <!-- CTA Button -->
//                         <table width="100%" cellpadding="0" cellspacing="0" border="0">
//                           <tr>
//                             <td align="center" style="padding: 20px 0;">
//                               <a href="https://yourwebsite.com/dashboard" 
//                                  style="background-color: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
//                                 Explore Your Dashboard →
//                               </a>
//                             </td>
//                           </tr>
//                         </table>
//                       </td>
//                     </tr>
                    
//                     <!-- Footer -->
//                     <tr>
//                       <td bgcolor="#f3f4f6" style="padding: 20px; text-align: center;">
//                         <p style="color: #6b7280; font-size: 14px; margin: 0;">
//                           © 2024 Acme Inc. | <a href="#" style="color: #2563eb; text-decoration: none;">Unsubscribe</a>
//                         </p>
//                         <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
//                           You're receiving this email because you signed up for our service.
//                         </p>
//                       </td>
//                     </tr>
//                   </table>
//                 </td>
//               </tr>
//             </table>
//           </body>
//           </html>
//         `,
//       });

//       results.push({ recipient, success: !error, error });
//     }

//     const successful = results.filter(result => result.success);
//     return NextResponse.json({ 
//       success: true, 
//       sent_count: successful.length,
//       message: "Beautiful emails sent successfully!"
//     });

//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }



import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    // Replace with your actual audience ID from Resend dashboard
    const audienceId = "39bdb6d1-013c-40d4-a799-51f8f23ff5a1" 

    const { data, error } = await resend.emails.send({
      from: "Acme Marketing <mail@mail.ibiz.name.ng>",
      to: [`${audienceId}@resend.dev`], // Magic Resend audience email
      subject: "🎉 Welcome to Our Exclusive Community!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>         <meta name="viewport" content="width=device-width, initial-scale=1.0">e>Welcome to Acme!</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f8fafc">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" adow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td bgcolor="#2563eb" style="padding: 40px; text-align: center;">
                      <h1 style="color: white; margin: 0; font-size: 32px;">Welcome to Acme! 🚀</h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #1a202c; margin-top: 0;">Hello amazing subscriber!</h2>
                      <p style="color: #4a5568; line-height: 1.6; font-size: 16px;">
                        Thank you for joining our community of 1,000+ passionate individuals. 
                        We're excited to share exclusive content, early access to features, 
                        and special offers with you.
                      </p>
                      
                      <!-- CTA Button -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td align="center" style="padding: 30px 0;">
                            <a href="https://acme.com/welcome" 
                               style="background-color: #2563eb; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; display: inline-block;">
                              Explore Your Benefits →
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td bgcolor="#f7fafc" style="padding: 25px; text-align: center;">
                      <p style="color: #718096; font-size: 14px; margin: 0;">
                        <a href="{{{unsubscribe_url}}}" style="color: #e53e3e; text-decoration: none;">Unsubscribe</a> • 
                        Acme Inc, 123 Business St, City, Country
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: "Marketing email sent to entire audience!",
      data 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}