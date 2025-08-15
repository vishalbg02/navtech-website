import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  fullName: string;
  email: string;
  designation: string;
  phone: string;
  message: string;
}

// Create reusable transporter object using Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Email template function
const createEmailTemplate = (formData: ContactFormData) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #95C149, #7BA635); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; }
          .field { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
          .field:last-child { border-bottom: none; }
          .label { font-weight: bold; color: #555; margin-bottom: 5px; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
          .value { color: #333; font-size: 14px; }
          .message-content { background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #95C149; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
          .timestamp { color: #888; font-size: 11px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p class="timestamp">Received on ${new Date().toLocaleString()}</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${formData.fullName}</div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">${formData.email}</div>
            </div>
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${formData.phone}</div>
            </div>
            <div class="field">
              <div class="label">Designation</div>
              <div class="value">${formData.designation}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="message-content">${formData.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the NavTech website contact form.</p>
            <p>Company: Nav Wireless Technologies Pvt Ltd</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Validation function
const validateFormData = (data: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Full name is required and must be at least 2 characters long');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required');
  }
  
  if (!data.phone || data.phone.trim().length < 10) {
    errors.push('Phone number is required and must be at least 10 characters long');
  }
  
  if (!data.designation || data.designation.trim().length < 2) {
    errors.push('Designation is required');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message is required and must be at least 10 characters long');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the form data
    const validation = validateFormData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: validation.errors 
        },
        { status: 400 }
      );
    }
    
    // Check for required environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.GMAIL_TO_EMAIL) {
      console.error('Missing required environment variables for email configuration');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is not configured properly. Please contact the administrator.' 
        },
        { status: 500 }
      );
    }
    
    const formData: ContactFormData = {
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      designation: body.designation.trim(),
      phone: body.phone.trim(),
      message: body.message.trim(),
    };
    
    // Create transporter
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    
    // Email options
    const mailOptions = {
      from: `"${formData.fullName}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_TO_EMAIL,
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.fullName}`,
      html: createEmailTemplate(formData),
      text: `
New Contact Form Submission

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Designation: ${formData.designation}

Message:
${formData.message}

Submitted on: ${new Date().toLocaleString()}
      `.trim(),
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      messageId: info.messageId
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return user-friendly error message
    let errorMessage = 'Sorry, there was an error sending your message. Please try again.';
    
    if (error instanceof Error) {
      // Log detailed error for debugging
      console.error('Detailed error:', error.message);
      
      // Provide specific error messages for common issues
      if (error.message.includes('authentication')) {
        errorMessage = 'Email authentication failed. Please contact the administrator.';
      } else if (error.message.includes('network') || error.message.includes('timeout')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage 
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}