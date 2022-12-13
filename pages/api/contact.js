export default function (req, res) {
	require("dotenv").config();

	let nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "mailsenderbot21@gmail.com",
			pass: process.env.password,
		},
		secure: true,
	});
	const mailData = {
		from: "mailsenderbot21@gmail.com",
		to: "jordimantilla21@gmail.com",
		subject: `Message From ${req.body.name}`,
		text: req.body.message + " | Sent from: " + req.body.email,
		html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
	};
	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});
	res.status(200);
}
