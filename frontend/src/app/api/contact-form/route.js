import { NextResponse } from "next/server";

export async function POST(req) {
	let nodemailer = require('nodemailer');
	const data = await req.json();
	const { firstname, lastname, email, subject, message } = data.body;

	const firstnameText = firstname ? `First Name: ${firstname}` : '';
	const lastnameText = firstname ? `Last Name: ${lastname}` : '';
	const emailText = email ? `Email: ${email}` : '';
	const subjectText = subject ? `Subject: ${subject}` : '';
	const messageText = message ? `Message: ${message}` : '';

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
		subject: `Message From Maristan`,
		html:
			`<div>
				<p>${firstnameText}</p>
				<p>${lastnameText}</p>
				<p>${emailText}</p>
				<p>${subjectText}</p>
				<p>${messageText}</p>
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
