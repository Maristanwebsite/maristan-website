import { NextResponse } from "next/server";

export async function POST(req) {
    let nodemailer = require('nodemailer');
    const data = await req.json();
    const { email } = data.body;

    const transporter = nodemailer.createTransport({
        port: 587,
        host: 'smtp.office365.com',
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.MAIL_FROM,
            pass: process.env.MAIL_AUTH,
        },
    });

    const mailData = {
        from: process.env.MAIL_FROM,
        to: process.env.RECEIVER_EMAIL,
        subject: `Message From Maristan Newsletter`,
        html:
            `<div>	
                <p>New user wants to subscribe the newsletter:</p>	
				<p>${email}</p>
			</div>`,
    };

    try {
        await transporter.sendMail(mailData);
        return NextResponse.json({ status: 'OK' });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Internal Server Error' });
    }

}
