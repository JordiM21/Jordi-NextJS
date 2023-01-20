import React from "react";
import { useState } from "react";

const ContactMe = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSumbit = (e) => {
		e.preventDefault();
		let data = {
			name,
			email,
			message,
		};
		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log("Response succeeded!");
		});
		reset();
	};
	const reset = () => {
		setSubmitted(true);
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<>
			<form className="max-w-sm md:max-w-lg lg:max-w-2xl my-10 mx-20 sm:mx-auto md:w-full">
				<h2 className="text-4xl text-gray-800 dark:text-gray-200 text-center mb-10">
					Let's stay in touch!
				</h2>
				<div className="md:flex justify-center md:items-center mb-6">
					<div className="lg:w-14">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Name
						</label>
					</div>
					<div className="md:w-2/3">
						{submitted ? (
							<h1>Gracias!</h1>
						) : (
							<input
								required
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 dark:bg-opacity-50 dark:border-opacity-50 "
								id="inline-full-name"
								type="text"
								placeholder="Jhon"
								value={name}
								onChange={(
									e
								) => {
									setName(
										e
											.target
											.value
									);
								}}
							/>
						)}
					</div>
				</div>
				<div className="md:flex justify-center md:items-center mb-6">
					<div className="lg:w-14">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Email
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							required
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 dark:bg-opacity-50 dark:border-opacity-50"
							id="inline-full-name"
							type="email"
							placeholder="JhonDoe@gmail.com"
							value={email}
							onChange={(e) => {
								setEmail(
									e.target
										.value
								);
							}}
						/>
					</div>
				</div>
				<div className="md:flex justify-center md:items-center mb-6">
					<div className="lg:w-14">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="inline-full-name"
						>
							Body
						</label>
					</div>
					<div className="md:w-2/3">
						<input
							className="bg-gray-200 h-16 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 dark:bg-opacity-50 dark:border-opacity-50"
							id="inline-full-name"
							type="text"
							placeholder="Say something nice!"
							value={message}
							onChange={(e) => {
								setMessage(
									e.target
										.value
								);
							}}
						/>
					</div>
				</div>
				<div className="md:flex md:items-center">
					<div className="md:w-1/3"></div>
					<div className="md:w-2/3">
						<button
							className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
							type="button"
							onClick={(e) => {
								handleSumbit(e);
							}}
						>
							{submitted
								? "Sent!"
								: "Enviar"}
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ContactMe;
