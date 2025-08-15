import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';

// Configuration for SMTP with timeout and pooling
const getTransporter = (): Transporter => {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use TLS
        auth: {
            user: process.env.CAREERS_GMAIL_USER,
            pass: process.env.CAREERS_GMAIL_PASS,
        },
        pool: true, // Reuse connection for better performance
        connectionTimeout: 10000, // 10 seconds timeout
        greetingTimeout: 5000, // 5 seconds greeting timeout
    });
};

export async function POST(req: NextRequest) {
    let transporter: Transporter | null = null;

    try {
        const { fullName, email, designation, phone, message, resumeFile, fileName } = await req.json();

        // Initialize transporter
        transporter = getTransporter();

        // Hosted logo URL (replace with your actual URL)
        const logoUrl = 'https://navtechno.in/images/navtech-logo.png'; // Update this URL

        // Attachments if resume is provided
        const attachments = resumeFile ? [
            {
                filename: fileName || 'resume.pdf',
                content: Buffer.from(resumeFile, 'base64'),
            }
        ] : [];

        // Main email to recipient (e.g., careers@navtechno.in)
        const mainMailOptions = {
            from: process.env.CAREERS_GMAIL_USER,
            to: process.env.CAREERS_EMAIL_RECIPIENT,
            replyTo: email,
            subject: `New Career Application from ${fullName}`,
            text: `
        Name: ${fullName}
        Email: ${email}
        Designation: ${designation}
        Phone: ${phone}
        Message: ${message}
        ${resumeFile ? 'Resume attached.' : 'No resume provided.'}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${logoUrl}" alt="NavTechno Logo" style="max-width: 100px; height: auto;" />
          </div>
          <h2 style="color: #333333; font-size: 20px; margin-bottom: 15px;">New Career Application</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Name:</td><td style="padding: 8px; color: #555555;">${fullName}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Email:</td><td style="padding: 8px; color: #555555;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Designation:</td><td style="padding: 8px; color: #555555;">${designation}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Phone:</td><td style="padding: 8px; color: #555555;">${phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Message:</td><td style="padding: 8px; color: #555555;">${message}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Resume:</td><td style="padding: 8px; color: #555555;">${resumeFile ? 'Attached' : 'Not provided'}</td></tr>
          </table>
          <div style="margin-top: 15px; text-align: center; color: #777777; font-size: 12px;">
            <p>Nav Wireless Technologies Pvt. Ltd.</p>
            <p>C6 The First Residue ITC Narmada, Ahmedabad, Gujarat 380015, India</p>
            <p><a href="mailto:info@navtechno.in" style="color: #95C149; text-decoration: none;">info@navtechno.in</a> | +91 70484 21010</p>
          </div>
        </div>
      `,
            attachments,
        };

        // Auto-reply email to the applicant
        const autoReplyMailOptions = {
            from: process.env.CAREERS_GMAIL_USER,
            to: email,
            subject: 'Thank You for Your Application to NavTechno',
            text: `
        Dear ${fullName},

        Thank you for your interest in joining Nav Wireless Technologies Pvt. Ltd. We have received your application and will review it shortly.

        Best regards,
        NavTechno HR Team
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${logoUrl}" alt="NavTechno Logo" style="max-width: 100px; height: auto;" />
          </div>
          <h2 style="color: #333333; font-size: 20px; margin-bottom: 15px;">Thank You for Your Application</h2>
          <p style="color: #555555; line-height: 1.6;">Dear ${fullName},</p>
          <p style="color: #555555; line-height: 1.6;">Thank you for your interest in joining Nav Wireless Technologies Pvt. Ltd. We have received your application and will review it shortly.</p>
          <div style="margin-top: 15px; text-align: center; color: #777777; font-size: 12px;">
            <p>Nav Wireless Technologies Pvt. Ltd.</p>
            <p>C6 The First Residue ITC Narmada, Ahmedabad, Gujarat 380015, India</p>
            <p><a href="mailto:info@navtechno.in" style="color: #95C149; text-decoration: none;">info@navtechno.in</a> | +91 70484 21010</p>
          </div>
        </div>
      `,
        };

        // Send both emails with retry logic for transient failures
        const maxRetries = 2;
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                await Promise.all([
                    transporter.sendMail(mainMailOptions),
                    transporter.sendMail(autoReplyMailOptions),
                ]);
                break; // Success, exit loop
            } catch (error) {
                if (attempt === maxRetries) throw error; // Throw error on last attempt
                console.warn(`Retry ${attempt} due to error:`, error);
                await new Promise(resolve => setTimeout(resolve, 2000 * attempt)); // Exponential backoff
            }
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);

        let errorMessage = 'Failed to send email';
        if (error.code === 'ETIMEDOUT' || error.code === 'ESOCKETTIMEDOUT') {
            errorMessage = 'Timeout error: Please check your internet connection and try again.';
        } else if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
            errorMessage = 'Network error: Unable to connect to the email server. Please try again later.';
        } else if (error.responseCode >= 500) {
            errorMessage = 'Server error: Please try again later.';
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    } finally {
        if (transporter) {
            try {
                await transporter.close(); // Clean up transporter
            } catch (e) {
                console.error('Error closing transporter:', e);
            }
        }
    }
}