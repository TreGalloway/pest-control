import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:any) {
  try {
    const data = await resend.emails.send({
      from: req.body.email,
      to: ['Pipepiperpestcontrol@gmail.com'],
      subject: `New message from ${req.body['first-name']}`,
      react: req.body.message,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

