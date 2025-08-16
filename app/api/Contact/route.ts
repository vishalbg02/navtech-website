import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Configuration for SMTP with timeout and pooling
const getTransporter = (): Transporter => {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use TLS
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
        pool: true, // Reuse connection for better performance
        connectionTimeout: 10000, // 10 seconds timeout
        greetingTimeout: 5000, // 5 seconds greeting timeout
    });
};

export async function POST(req: NextRequest) {
    let transporter: Transporter | null = null;

    try {
        const { fullName, email, designation, phone, message } = await req.json();

        // Initialize transporter
        transporter = getTransporter();

        // Read and encode logo as base64
        const logoPath = path.join(process.cwd(), 'public', 'images', 'navtech-logo_email.png');
        let logoAttachment = null;
        let logoSrc = 'https://navtechno.in/wp-content/uploads/2022/02/logo-white-02.svg'; // Fallback URL

        try {
            const logoBuffer = fs.readFileSync(logoPath);
            logoAttachment = {
                filename: 'navtech-logo.png',
                content: logoBuffer,
                cid: 'navtech-logo' // Content ID for inline use
            };
            logoSrc = 'cid:navtech-logo'; // Use embedded image
        } catch (error) {
            console.warn('Could not load local logo, using fallback URL:', error);
        }

        // Main email to recipient (info@navtechno.in)
        const mainMailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.EMAIL_RECIPIENT,
            replyTo: email,
            subject: `New Contact Form Submission from ${fullName}`,
            text: `
        Name: ${fullName}
        Email: ${email}
        Designation: ${designation}
        Phone: ${phone}
        Message: ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${logoSrc}" alt="NavTechno Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto;" />
          </div>
          <h2 style="color: #333333; font-size: 20px; margin-bottom: 15px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Name:</td><td style="padding: 8px; color: #555555;">${fullName}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Email:</td><td style="padding: 8px; color: #555555;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Designation:</td><td style="padding: 8px; color: #555555;">${designation}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Phone:</td><td style="padding: 8px; color: #555555;">${phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333333;">Message:</td><td style="padding: 8px; color: #555555;">${message}</td></tr>
          </table>
          <div style="margin-top: 15px; text-align: center; color: #777777; font-size: 12px;">
            <p>Nav Wireless Technologies Pvt. Ltd.</p>
            <p>C6 The First Residue ITC Narmada, Ahmedabad, Gujarat 380015, India</p>
            <p><a href="mailto:info@navtechno.in" style="color: #95C149; text-decoration: none;">info@navtechno.in</a> | +91 70484 21010</p>
          </div>
        </div>
      `,
            attachments: logoAttachment ? [logoAttachment] : []
        };

        // Auto-reply email to the form submitter
        const autoReplyMailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Thank You for Contacting NavTechno',
            text: `
        Dear ${fullName},

        Thank you for contacting Nav Wireless Technologies Pvt. Ltd. We have received your message and will get back to you soon.

        Best regards,
        NavTechno Team
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${logoSrc}" alt="NavTechno Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto;" />
          </div>
          <h2 style="color: #333333; font-size: 20px; margin-bottom: 15px;">Thank You for Contacting Us</h2>
          <p style="color: #555555; line-height: 1.6;">Dear ${fullName},</p>
          <p style="color: #555555; line-height: 1.6;">Thank you for reaching out to Nav Wireless Technologies Pvt. Ltd. We have received your message and will get back to you as soon as possible.</p>
          <div style="margin-top: 15px; text-align: center; color: #777777; font-size: 12px;">
            <p>Nav Wireless Technologies Pvt. Ltd.</p>
            <p>C6 The First Residue ITC Narmada, Ahmedabad, Gujarat 380015, India</p>
            <p><a href="mailto:info@navtechno.in" style="color: #95C149; text-decoration: none;">info@navtechno.in</a> | +91 70484 21010</p>
          </div>
        </div>
      `,
            attachments: logoAttachment ? [logoAttachment] : []
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