
import { EmailTemplate } from '@/components/email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const { firstName, lastName, email, phoneNumber, message } = await req.body.json();
    const data = await resend.emails.send({
      from: 'Site <bytregalloway@gmail.com>',
      to: 'pipepiperpestcontrol@gmail.com',
      subject: 'Hello world',
      text: 'This is the plain text version of the email',
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        phoneNumber,
        message
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}