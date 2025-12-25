import {useState} from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const serviceID = import.meta.env.VITE_SERVICE_ID;
	const templateID = import.meta.env.VITE_TEMPLATE_ID;
	const publicID = import.meta.env.VITE_PUBLIC_ID;

	const sendEmail = (e) => {
		e.preventDefault();

		if (!serviceID || !templateID || !publicID) {
			alert("EmailJS is not configured. Please check your environment variables.");
			return;
		}

		const templateParams = {
			from_name: name,
			from_email: email,
			message: message,
		};

		emailjs
			.send(
				serviceID, // Replace with your EmailJS service ID
				templateID, // Replace with your EmailJS template ID
				templateParams,
				publicID // Replace with your EmailJS public key
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("Message sent successfully!");
					setName("");
					setEmail("");
					setMessage("");
				},
				(error) => {
					console.error("EmailJS error:", error);
					alert("Failed to send message, please try again.");
				}
			);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-slate-900 pt-[60px] font-[Inter]" id="contact">
			<div className="w-[800px] mx-[40px] px-[30px] backdrop-blur bg-[rgba(30,41,59,0.7)] border border-[rgba(255,255,255,0.1)] rounded-[20px] mb-[30px]">
				<h1 className="text-white font-bold text-[30px] text-center mt-[40px]">Start a conversation</h1>
				<p className="text-slate-400 text-center">Have a project in mind? Reach out and let's make it happen.</p>
				<form onSubmit={sendEmail}>
					<div className="flex max-md:flex-col mt-[40px] gap-[20px]">
						<div className="flex-1">
							<p className="text-slate-400">Full Name</p>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full h-[40px] mt-[10px] bg-slate-800 outline-none border border-[rgba(255,255,255,0.1)] rounded-[8px] px-[10px] text-white"
								required
							/>
						</div>
						<div className="flex-1">
							<p className="text-slate-400">Email Address</p>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full h-[40px] mt-[10px] outline-none bg-slate-800 border border-[rgba(255,255,255,0.1)] rounded-[8px] px-[10px] text-white"
								required
							/>
						</div>
					</div>
					<div className="mt-[40px]">
						<p className="text-slate-400">Your Message</p>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="w-full h-[100px] mt-[10px] outline-none bg-slate-800 border border-[rgba(255,255,255,0.1)] rounded-[8px] px-[10px] py-[10px] text-white"
							required
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full mt-[20px] bg-sky-500 hover:bg-sky-600 text-white mb-[20px] px-[20px] py-[10px] rounded-[8px] font-semibold transition-all cursor-pointer"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};
