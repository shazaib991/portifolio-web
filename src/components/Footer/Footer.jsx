import {navLinks, profile} from "../../data/portfolio";
import {ArrowUp, GithubIcon, LinkedinIcon, MailIcon} from "../ui/Icons";

const socials = [
	{href: profile.github, label: "GitHub", Icon: GithubIcon},
	{href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon},
	{href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon},
];

export const Footer = () => (
	<footer className="border-t border-white/10">
		<div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
			<div>
				<p className="font-display text-lg font-semibold text-white">
					{profile.name}
					<span className="text-sky-400">.</span>
				</p>
				<p className="mt-1 text-sm text-slate-500">
					© {new Date().getFullYear()} · {profile.role} · {profile.stack}
				</p>
			</div>

			<ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
				{navLinks.map(({id, label}) => (
					<li key={id}>
						<a href={`#${id}`} className="transition-colors hover:text-white">
							{label}
						</a>
					</li>
				))}
			</ul>

			<div className="flex items-center gap-2">
				{socials.map(({href, label, Icon}) => (
					<a
						key={label}
						href={href}
						target={href.startsWith("mailto") ? undefined : "_blank"}
						rel="noreferrer"
						aria-label={label}
						className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400/50 hover:text-sky-400"
					>
						<Icon className="h-4 w-4" />
					</a>
				))}
				<a
					href="#home"
					aria-label="Back to top"
					className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-950 transition hover:bg-sky-300"
				>
					<ArrowUp />
				</a>
			</div>
		</div>
	</footer>
);
