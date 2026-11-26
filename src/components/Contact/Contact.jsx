import {useState} from "react";
import emailjs from "@emailjs/browser";
import {AnimatePresence, motion} from "motion/react";
import {profile} from "../../data/portfolio";
import {ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon} from "../ui/Icons";
import {Reveal, SectionHeading} from "../ui/Reveal";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicID = import.meta.env.VITE_PUBLIC_ID;

const channels = [
	{label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon},
	{label: "GitHub", value: "github.com/shazaib991", href: profile.github, Icon: GithubIcon},
	{label: "LinkedIn", value: "Shazaib Munawar", href: profile.linkedin, Icon: LinkedinIcon},
];

const inputClass =
	"mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-sky-400/60 focus:ring-4 focus:ring-sky-400/10";

export const Contact = () => {
	const [form, setForm] = useState({name: "", email: "", message: ""});
	const [status, setStatus] = useState({state: "idle", text: ""});

	const update = (field) => (e) => setForm((f) => ({...f, [field]: e.target.value}));

	const sendEmail = async (e) => {
		e.preventDefault();
		if (!serviceID || !templateID || !publicID) {
			setStatus({state: "error", text: `The contact form isn't configured yet. Please email ${profile.email}.`});
			return;
		}
		setStatus({state: "sending", text: ""});
		try {
			await emailjs.send(
				serviceID,
				templateID,
				{from_name: form.name, from_email: form.email, message: form.message},
				publicID
			);
			setStatus({state: "success", text: "Thanks! Your message is on its way. I'll get back to you soon."});
			setForm({name: "", email: "", message: ""});
		} catch (error) {
			console.error("EmailJS error:", error);
			setStatus({state: "error", text: `Something went wrong. Please try again or email ${profile.email}.`});
		}
	};

	return (
		<section id="contact" className="relative overflow-hidden py-28 md:py-36">
			<div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 translate-y-1/2 rounded-full bg-sky-500/15 blur-[140px]" />

			<div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.15fr]">
				<div>
					<SectionHeading
						index="05"
						eyebrow="Contact"
						title="Let's build something together."
						subtitle="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
					/>

					<div className="mt-10 space-y-3">
						{channels.map(({label, value, href, Icon}, i) => (
							<Reveal key={label} delay={0.15 + i * 0.07}>
								<a
									href={href}
									target={href.startsWith("mailto") ? undefined : "_blank"}
									rel="noreferrer"
									className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-sky-400/30 hover:bg-white/[0.05]"
								>
									<span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-400/10 text-sky-400">
										<Icon className="h-5 w-5" />
									</span>
									<span className="min-w-0 flex-1">
										<span className="block text-xs tracking-wider text-slate-500 uppercase">{label}</span>
										<span className="block truncate text-slate-200">{value}</span>
									</span>
									<ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-400" />
								</a>
							</Reveal>
						))}
					</div>
				</div>

				<Reveal delay={0.15}>
					<form
						onSubmit={sendEmail}
						className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl md:p-8"
					>
						<div className="grid gap-5 sm:grid-cols-2">
							<label className="block text-sm text-slate-400">
								Full name
								<input
									type="text"
									value={form.name}
									onChange={update("name")}
									placeholder="Jane Doe"
									autoComplete="name"
									className={inputClass}
									required
								/>
							</label>
							<label className="block text-sm text-slate-400">
								Email address
								<input
									type="email"
									value={form.email}
									onChange={update("email")}
									placeholder="jane@company.com"
									autoComplete="email"
									className={inputClass}
									required
								/>
							</label>
						</div>
						<label className="mt-5 block text-sm text-slate-400">
							Your message
							<textarea
								value={form.message}
								onChange={update("message")}
								placeholder="Tell me about your project…"
								rows={6}
								className={`${inputClass} resize-none`}
								required
							/>
						</label>

						<motion.button
							type="submit"
							disabled={status.state === "sending"}
							whileTap={{scale: 0.98}}
							className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-wait disabled:opacity-70"
						>
							{status.state === "sending" ? (
								<>
									<span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />
									Sending…
								</>
							) : (
								<>
									Send message <ArrowUpRight className="h-4 w-4" />
								</>
							)}
						</motion.button>

						<AnimatePresence>
							{status.text && (
								<motion.p
									key={status.state}
									role="status"
									initial={{opacity: 0, y: -6}}
									animate={{opacity: 1, y: 0}}
									exit={{opacity: 0}}
									className={`mt-4 rounded-xl px-4 py-3 text-sm ${
										status.state === "success"
											? "bg-emerald-400/10 text-emerald-300"
											: "bg-rose-400/10 text-rose-300"
									}`}
								>
									{status.text}
								</motion.p>
							)}
						</AnimatePresence>
					</form>
				</Reveal>
			</div>
		</section>
	);
};
