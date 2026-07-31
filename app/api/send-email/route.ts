import { NextRequest, NextResponse } from 'next/server';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const name = String(payload?.name ?? '').trim();
    const email = String(payload?.email ?? '').trim();
    const subject = String(payload?.subject ?? '').trim();
    const message = String(payload?.message ?? '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in your name, email, and message.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL_TO || process.env.RESEND_TO_EMAIL || 'cvardhan501@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    if (!resendApiKey) {
      console.error('Missing email configuration for contact form.');
      return NextResponse.json(
        {
          error:
            'The contact form is not configured yet. Add RESEND_API_KEY in your deployment settings.',
        },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `New Contact Form: ${subject || 'No subject'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #fac242;">New Contact Form Submission</h2>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Subject:</strong> ${escapeHtml(subject || 'N/A')}</p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap; color: #666;">${escapeHtml(message)}</p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;">
            <p style="color: #999; font-size: 12px;">This email was sent from your portfolio contact form.</p>
          </div>
        `,
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error('Resend error:', result);
      console.error('Response status:', response.status);
      return NextResponse.json(
        {
          error:
            result?.message ||
            'The email service rejected the message. Verify that your Resend sender address is verified and the API key is valid.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Unable to send message right now. Please try again shortly.' },
      { status: 500 }
    );
  }
}
